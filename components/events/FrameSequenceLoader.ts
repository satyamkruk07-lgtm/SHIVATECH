import {
  EventSequenceData,
  eventsSequenceData,
  getFrameUrl,
  GlobalSequenceState,
} from "@/data/events";

export class FrameSequenceLoader {
  private cache = new Map<string, HTMLImageElement | ImageBitmap>();
  private loadingPromises = new Map<string, Promise<HTMLImageElement | ImageBitmap | null>>();
  private activeConcurrency = 0;
  private maxConcurrency = 5;
  private pendingQueue: string[] = [];

  /**
   * Safe fetcher with createImageBitmap priority and PNG fallback
   */
  public async loadFrame(url: string): Promise<HTMLImageElement | ImageBitmap | null> {
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }

    if (this.loadingPromises.has(url)) {
      return this.loadingPromises.get(url)!;
    }

    const promise = (async (): Promise<HTMLImageElement | ImageBitmap | null> => {
      try {
        if (typeof window !== "undefined" && "createImageBitmap" in window) {
          try {
            const response = await fetch(url);
            if (response.ok) {
              const blob = await response.blob();
              const bitmap = await createImageBitmap(blob);
              this.cache.set(url, bitmap);
              return bitmap;
            }
          } catch {
            // Fall through to Image fallback
          }
        }

        return new Promise<HTMLImageElement | ImageBitmap | null>((resolve) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => {
            this.cache.set(url, img);
            resolve(img);
          };
          img.onerror = () => {
            // If WebP fails for any reason, attempt PNG fallback for that single frame
            if (url.endsWith(".webp")) {
              const pngUrl = url.replace(/\.webp$/, ".png");
              const fallbackImg = new Image();
              fallbackImg.crossOrigin = "anonymous";
              fallbackImg.onload = () => {
                this.cache.set(url, fallbackImg);
                resolve(fallbackImg);
              };
              fallbackImg.onerror = () => resolve(null);
              fallbackImg.src = pngUrl;
            } else {
              resolve(null);
            }
          };
          img.src = url;
        });
      } catch {
        return null;
      } finally {
        this.loadingPromises.delete(url);
      }
    })();

    this.loadingPromises.set(url, promise);
    return promise;
  }

  /**
   * Instant 0ms nearest-frame lookup to avoid canvas clears or black screens
   */
  public getNearestCachedFrame(
    event: EventSequenceData,
    targetFrame: number
  ): HTMLImageElement | ImageBitmap | null {
    const exactUrl = getFrameUrl(event, targetFrame);
    if (this.cache.has(exactUrl)) {
      return this.cache.get(exactUrl)!;
    }

    for (let offset = 1; offset <= 35; offset++) {
      const prevUrl = getFrameUrl(event, targetFrame - offset);
      if (this.cache.has(prevUrl)) {
        return this.cache.get(prevUrl)!;
      }
      const nextUrl = getFrameUrl(event, targetFrame + offset);
      if (this.cache.has(nextUrl)) {
        return this.cache.get(nextUrl)!;
      }
    }

    // Fall back to any cached frame for this event
    for (let f = event.minFrame; f <= event.maxFrame; f++) {
      const u = getFrameUrl(event, f);
      if (this.cache.has(u)) {
        return this.cache.get(u)!;
      }
    }

    return null;
  }

  /**
   * Direction-aware priority preloader queue
   */
  public updatePriorityQueue(
    state: GlobalSequenceState,
    direction: "down" | "up"
  ): void {
    const { activeEvent, frameNumber } = state;
    const urlsToQueue: string[] = [];

    if (direction === "down") {
      // Prioritize: current frame -> next 30 frames -> opening frames of next event
      for (let i = 0; i <= 30; i++) {
        const target = frameNumber + i;
        if (target <= activeEvent.maxFrame) {
          urlsToQueue.push(getFrameUrl(activeEvent, target));
        }
      }

      if (activeEvent.nextEvent) {
        const nextEvt = eventsSequenceData.find((e) => e.title === activeEvent.nextEvent);
        if (nextEvt) {
          for (let f = nextEvt.minFrame; f < Math.min(nextEvt.minFrame + 12, nextEvt.maxFrame); f++) {
            urlsToQueue.push(getFrameUrl(nextEvt, f));
          }
        }
      }
    } else {
      // Prioritize: current frame -> previous 25 frames
      for (let i = 0; i <= 25; i++) {
        const target = frameNumber - i;
        if (target >= activeEvent.minFrame) {
          urlsToQueue.push(getFrameUrl(activeEvent, target));
        }
      }
    }

    // Deduplicate and filter out already cached/loading items
    const filtered = urlsToQueue.filter(
      (u) => !this.cache.has(u) && !this.loadingPromises.has(u)
    );

    this.pendingQueue = filtered;
    this.processQueue();
    this.evictDistantFrames(state);
  }

  /**
   * Bounded memory manager: evicts distant frames and calls ImageBitmap.close() to free GPU RAM
   */
  private evictDistantFrames(state: GlobalSequenceState): void {
    const { activeEvent, frameNumber } = state;
    const MAX_PREV_KEEP = 20;
    const MAX_NEXT_KEEP = 40;

    for (const [url, item] of this.cache.entries()) {
      // Keep initial keyframes of all events so transitions are seamless
      const isInitialFrame = eventsSequenceData.some(
        (evt) => getFrameUrl(evt, evt.minFrame) === url
      );
      if (isInitialFrame) continue;

      let isDistant = true;

      if (url.startsWith(activeEvent.frameFolder)) {
        // Extract frame number from URL (e.g. frame_045.webp -> 45)
        const match = url.match(/frame_(\d+)\.(webp|png)$/);
        if (match) {
          const num = parseInt(match[1], 10);
          if (num >= frameNumber - MAX_PREV_KEEP && num <= frameNumber + MAX_NEXT_KEEP) {
            isDistant = false;
          }
        }
      }

      if (isDistant) {
        if (item && typeof (item as any).close === "function") {
          (item as any).close(); // Free ImageBitmap GPU memory immediately!
        }
        this.cache.delete(url);
      }
    }
  }

  /**
   * Concurrency-controlled worker loop
   */
  private async processQueue(): Promise<void> {
    while (
      this.pendingQueue.length > 0 &&
      this.activeConcurrency < this.maxConcurrency
    ) {
      const url = this.pendingQueue.shift();
      if (!url || this.cache.has(url) || this.loadingPromises.has(url)) continue;

      this.activeConcurrency++;
      this.loadFrame(url).finally(() => {
        this.activeConcurrency--;
        this.processQueue();
      });
    }
  }

  /**
   * Cleanup resources on unmount
   */
  public destroy(): void {
    this.pendingQueue = [];
    for (const [, item] of this.cache.entries()) {
      if (item && typeof (item as any).close === "function") {
        (item as any).close();
      }
    }
    this.cache.clear();
    this.loadingPromises.clear();
  }
}

export default FrameSequenceLoader;
