import atlasManifestData from "@/public/event-atlas/manifest.json";

export interface AtlasChunkInfo {
  chunkIndex: number;
  file: string;
  startFrame: number;
  endFrame: number;
  frameCount: number;
  columns: number;
  rows: number;
  atlasWidth: number;
  atlasHeight: number;
}

export interface EventAtlasManifest {
  id: string;
  frameWidth: number;
  frameHeight: number;
  frameCount: number;
  columns: number;
  rows: number;
  framesPerChunk: number;
  chunks: AtlasChunkInfo[];
}

export type ManifestRecord = Record<string, EventAtlasManifest>;

export interface FrameCropCoordinates {
  image: HTMLImageElement | ImageBitmap;
  sourceX: number;
  sourceY: number;
  sourceWidth: number;
  sourceHeight: number;
}

export class FrameAtlasLoader {
  private manifest: ManifestRecord = atlasManifestData as ManifestRecord;
  private chunkCache = new Map<string, HTMLImageElement | ImageBitmap>();
  private loadingPromises = new Map<string, Promise<HTMLImageElement | ImageBitmap | null>>();
  private activeConcurrency = 0;
  private maxConcurrency = 3;
  private pendingChunkUrls: string[] = [];

  /**
   * Safe chunk fetcher with createImageBitmap priority
   */
  public async loadChunk(url: string): Promise<HTMLImageElement | ImageBitmap | null> {
    if (this.chunkCache.has(url)) {
      return this.chunkCache.get(url)!;
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
              this.chunkCache.set(url, bitmap);
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
            this.chunkCache.set(url, img);
            resolve(img);
          };
          img.onerror = () => resolve(null);
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
   * Returns exact crop coordinates for a given event ID and frame number
   */
  public getFrameCrop(
    eventId: string,
    frameNumber: number
  ): FrameCropCoordinates | null {
    const eventManifest = this.manifest[eventId];
    if (!eventManifest) return null;

    const chunk = eventManifest.chunks.find(
      (c) => frameNumber >= c.startFrame && frameNumber <= c.endFrame
    );
    if (!chunk) return null;

    // Check if chunk is loaded in cache
    let image = this.chunkCache.get(chunk.file);

    // If exact chunk is pending, find nearest loaded chunk for this event to avoid black flash
    if (!image) {
      for (const c of eventManifest.chunks) {
        if (this.chunkCache.has(c.file)) {
          image = this.chunkCache.get(c.file)!;
          break;
        }
      }
    }

    if (!image) return null;

    const localIdx = Math.max(0, Math.min(chunk.frameCount - 1, frameNumber - chunk.startFrame));
    const col = localIdx % chunk.columns;
    const row = Math.floor(localIdx / chunk.columns);

    const sourceX = col * eventManifest.frameWidth;
    const sourceY = row * eventManifest.frameHeight;

    return {
      image,
      sourceX,
      sourceY,
      sourceWidth: eventManifest.frameWidth,
      sourceHeight: eventManifest.frameHeight,
    };
  }

  /**
   * Direction-aware chunk queue manager
   */
  public updateChunkQueue(
    eventId: string,
    frameNumber: number,
    direction: "down" | "up"
  ): void {
    const eventManifest = this.manifest[eventId];
    if (!eventManifest) return;

    const currentChunkIdx = eventManifest.chunks.findIndex(
      (c) => frameNumber >= c.startFrame && frameNumber <= c.endFrame
    );
    if (currentChunkIdx === -1) return;

    const urlsToQueue: string[] = [];

    // Always include current chunk
    urlsToQueue.push(eventManifest.chunks[currentChunkIdx].file);

    if (direction === "down") {
      // Queue next 2 chunks
      if (currentChunkIdx + 1 < eventManifest.chunks.length) {
        urlsToQueue.push(eventManifest.chunks[currentChunkIdx + 1].file);
      }
      if (currentChunkIdx + 2 < eventManifest.chunks.length) {
        urlsToQueue.push(eventManifest.chunks[currentChunkIdx + 2].file);
      }
    } else {
      // Queue previous chunk
      if (currentChunkIdx - 1 >= 0) {
        urlsToQueue.push(eventManifest.chunks[currentChunkIdx - 1].file);
      }
    }

    const filtered = urlsToQueue.filter(
      (u) => !this.chunkCache.has(u) && !this.loadingPromises.has(u)
    );

    this.pendingChunkUrls = filtered;
    this.processQueue();
    this.evictDistantChunks(eventId, currentChunkIdx);
  }

  /**
   * Bounded memory manager: keeps active & adjacent chunks, evicts distant chunks and closes ImageBitmaps
   */
  private evictDistantChunks(eventId: string, activeChunkIdx: number): void {
    const eventManifest = this.manifest[eventId];
    if (!eventManifest) return;

    // Keep initial chunk 0 of all events for instant transitions
    const initialChunkFiles = new Set(
      Object.values(this.manifest).map((m) => m.chunks[0]?.file)
    );

    for (const [file, item] of this.chunkCache.entries()) {
      if (initialChunkFiles.has(file)) continue;

      // Check if file belongs to active event and is within +/- 2 chunks
      let keep = false;
      const chunkIdx = eventManifest.chunks.findIndex((c) => c.file === file);
      if (chunkIdx !== -1 && Math.abs(chunkIdx - activeChunkIdx) <= 2) {
        keep = true;
      }

      if (!keep) {
        if (item && typeof (item as any).close === "function") {
          (item as any).close();
        }
        this.chunkCache.delete(file);
      }
    }
  }

  /**
   * Concurrency-controlled chunk download worker loop
   */
  private async processQueue(): Promise<void> {
    while (
      this.pendingChunkUrls.length > 0 &&
      this.activeConcurrency < this.maxConcurrency
    ) {
      const url = this.pendingChunkUrls.shift();
      if (!url || this.chunkCache.has(url) || this.loadingPromises.has(url)) continue;

      this.activeConcurrency++;
      this.loadChunk(url).finally(() => {
        this.activeConcurrency--;
        this.processQueue();
      });
    }
  }

  /**
   * Cleanup memory on unmount
   */
  public destroy(): void {
    this.pendingChunkUrls = [];
    for (const [, item] of this.chunkCache.entries()) {
      if (item && typeof (item as any).close === "function") {
        (item as any).close();
      }
    }
    this.chunkCache.clear();
    this.loadingPromises.clear();
  }
}

export default FrameAtlasLoader;
