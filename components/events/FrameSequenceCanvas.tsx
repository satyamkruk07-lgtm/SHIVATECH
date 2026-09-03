"use client";

import React, { useEffect, useRef, useCallback } from "react";
import {
  eventsSequenceData,
  getFrameUrl,
  getEventZoomState,
  GlobalSequenceState,
} from "@/data/events";

interface FrameSequenceCanvasProps {
  sequenceState: GlobalSequenceState;
  onInitialFramesLoaded?: () => void;
}

export const FrameSequenceCanvas: React.FC<FrameSequenceCanvasProps> = ({
  sequenceState,
  onInitialFramesLoaded,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sequenceStateRef = useRef<GlobalSequenceState>(sequenceState);

  useEffect(() => {
    sequenceStateRef.current = sequenceState;
  }, [sequenceState]);

  // Image cache
  const imageCacheRef = useRef<Map<string, HTMLImageElement | ImageBitmap>>(new Map());
  const loadingPromisesRef = useRef<Map<string, Promise<HTMLImageElement | ImageBitmap | null>>>(new Map());

  // HTML5 Video cache & seek queue for Vercel deployment reliability across all 4 events
  const videoElementsRef = useRef<Map<string, HTMLVideoElement>>(new Map());
  const isSeekingRef = useRef<Map<string, boolean>>(new Map());
  const pendingTimeRef = useRef<Map<string, number>>(new Map());

  // Last rendered source to prevent black screen flashes
  const lastRenderedSourceRef = useRef<HTMLImageElement | ImageBitmap | HTMLVideoElement | null>(null);

  /**
   * Safe image fetcher with createImageBitmap priority and standard Image fallback
   */
  const loadSingleFrame = useCallback(
    async (url: string): Promise<HTMLImageElement | ImageBitmap | null> => {
      if (imageCacheRef.current.has(url)) {
        return imageCacheRef.current.get(url)!;
      }
      if (loadingPromisesRef.current.has(url)) {
        return loadingPromisesRef.current.get(url)!;
      }

      const promise = (async (): Promise<HTMLImageElement | ImageBitmap | null> => {
        try {
          if (typeof window !== "undefined" && "createImageBitmap" in window) {
            try {
              const response = await fetch(url);
              if (!response.ok) throw new Error(`HTTP ${response.status}`);
              const blob = await response.blob();
              const bitmap = await createImageBitmap(blob);
              imageCacheRef.current.set(url, bitmap);
              return bitmap;
            } catch {
              // Fallback to standard Image if fetch/bitmap creation fails
            }
          }

          return new Promise<HTMLImageElement | null>((resolve) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = () => {
              imageCacheRef.current.set(url, img);
              resolve(img);
            };
            img.onerror = () => {
              resolve(null);
            };
            img.src = url;
          });
        } catch {
          return null;
        } finally {
          loadingPromisesRef.current.delete(url);
        }
      })();

      loadingPromisesRef.current.set(url, promise);
      return promise;
    },
    []
  );

  /**
   * Safe HTML5 Video loader for Vercel fallback
   */
  const getOrCreateVideo = useCallback((eventId: string, videoUrl: string): HTMLVideoElement | null => {
    if (typeof window === "undefined") return null;
    if (videoElementsRef.current.has(eventId)) {
      return videoElementsRef.current.get(eventId)!;
    }

    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.load();

    videoElementsRef.current.set(eventId, video);
    return video;
  }, []);

  /**
   * Draws an image, bitmap, or video frame to the canvas using object-fit: cover scaling and dynamic building zoom
   */
  const drawFrameToCanvas = useCallback(
    (source: HTMLImageElement | ImageBitmap | HTMLVideoElement) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const srcWidth = source instanceof HTMLVideoElement ? source.videoWidth || 1920 : source.width;
      const srcHeight = source instanceof HTMLVideoElement ? source.videoHeight || 1080 : source.height;

      if (!canvasWidth || !canvasHeight || !srcWidth || !srcHeight) return;

      // Cover-style scaling algorithm
      const hRatio = canvasWidth / srcWidth;
      const vRatio = canvasHeight / srcHeight;
      const ratio = Math.max(hRatio, vRatio);

      const drawWidth = srcWidth * ratio;
      const drawHeight = srcHeight * ratio;
      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      // Calculate dynamic building zoom based on scroll progress and event ID
      const currentState = sequenceStateRef.current;
      const { scale, focalX, focalY } = getEventZoomState(
        currentState.activeEvent.id,
        currentState.eventProgress
      );

      const scaledWidth = drawWidth * scale;
      const scaledHeight = drawHeight * scale;

      const targetX = canvasWidth * focalX;
      const targetY = canvasHeight * focalY;

      const finalOffsetX = targetX - (targetX - offsetX) * scale;
      const finalOffsetY = targetY - (targetY - offsetY) * scale;

      ctx.drawImage(source, 0, 0, srcWidth, srcHeight, finalOffsetX, finalOffsetY, scaledWidth, scaledHeight);

      lastRenderedSourceRef.current = source;
    },
    []
  );

  /**
   * Non-blocking queued video seek for smooth playback across all 4 events
   */
  const seekVideoToProgress = useCallback((eventId: string, videoUrl: string, progress: number) => {
    const video = getOrCreateVideo(eventId, videoUrl);
    if (!video) return;

    const performSeek = () => {
      if (!video.duration || isNaN(video.duration)) return;

      const targetTime = Math.max(0, Math.min(video.duration, progress * video.duration));
      pendingTimeRef.current.set(eventId, targetTime);

      // If video is not currently seeking, seek now!
      if (!isSeekingRef.current.get(eventId)) {
        // If current video time is already close enough, draw immediately
        if (Math.abs(video.currentTime - targetTime) < 0.04) {
          drawFrameToCanvas(video);
          return;
        }

        isSeekingRef.current.set(eventId, true);
        
        // Fast seek if supported by browser, else standard currentTime
        if ('fastSeek' in video && typeof (video as any).fastSeek === 'function') {
          (video as any).fastSeek(targetTime);
        } else {
          video.currentTime = targetTime;
        }

        const handleSeeked = () => {
          isSeekingRef.current.set(eventId, false);
          drawFrameToCanvas(video);

          // Check if a newer target time arrived while seeking
          const latestPending = pendingTimeRef.current.get(eventId);
          if (latestPending !== undefined && Math.abs(video.currentTime - latestPending) > 0.04) {
            performSeek();
          }
        };

        video.addEventListener("seeked", handleSeeked, { once: true });
      } else {
        // Draw last available frame while seeking
        if (video.readyState >= 2) {
          drawFrameToCanvas(video);
        }
      }
    };

    if (video.readyState >= 2 && video.duration) {
      performSeek();
    } else {
      video.addEventListener("loadedmetadata", performSeek, { once: true });
      video.addEventListener("canplay", performSeek, { once: true });
    }
  }, [getOrCreateVideo, drawFrameToCanvas]);

  /**
   * Handle canvas sizing with devicePixelRatio clamping
   */
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    const rect = canvas.getBoundingClientRect();
    const newWidth = Math.floor(rect.width * dpr);
    const newHeight = Math.floor(rect.height * dpr);

    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      canvas.width = newWidth;
      canvas.height = newHeight;

      if (lastRenderedSourceRef.current) {
        drawFrameToCanvas(lastRenderedSourceRef.current);
      }
    }
  }, [drawFrameToCanvas]);

  /**
   * Preload initial key frames & videos for all 4 events on page load
   */
  useEffect(() => {
    let isMounted = true;

    const preloadInitialBatch = async () => {
      // 1. Preload video elements for ALL 4 events
      eventsSequenceData.forEach((evt) => {
        getOrCreateVideo(evt.id, evt.videoUrl);
      });

      // 2. High priority: load frame 1 of Event 1 instantly (with 600ms timeout race)
      const event1 = eventsSequenceData[0];
      const firstFrameUrl = getFrameUrl(event1, event1.minFrame);
      
      const loadFirstFrame = loadSingleFrame(firstFrameUrl);
      const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 600));

      await Promise.race([loadFirstFrame, timeoutPromise]);

      if (isMounted && onInitialFramesLoaded) {
        onInitialFramesLoaded();
      }

      // 3. Low priority: asynchronously preload remaining initial frames without blocking UI
      const remainingUrls: string[] = [];
      for (let f = event1.minFrame + 1; f < Math.min(event1.minFrame + 6, event1.maxFrame); f++) {
        remainingUrls.push(getFrameUrl(event1, f));
      }
      eventsSequenceData.slice(1).forEach((evt) => {
        remainingUrls.push(getFrameUrl(evt, evt.minFrame));
      });

      Promise.all(remainingUrls.map((url) => loadSingleFrame(url))).catch(() => {});
    };

    preloadInitialBatch();

    return () => {
      isMounted = false;
    };
  }, [loadSingleFrame, getOrCreateVideo, onInitialFramesLoaded]);

  /**
   * Preload window of frames around active state to ensure smooth scrubbing
   */
  useEffect(() => {
    const { activeEvent, frameNumber } = sequenceState;
    const windowSize = 12;

    const preloadUrls: string[] = [];

    for (let i = 1; i <= windowSize; i++) {
      const targetFrame = frameNumber + i;
      if (targetFrame <= activeEvent.maxFrame) {
        preloadUrls.push(getFrameUrl(activeEvent, targetFrame));
      }
    }

    for (let i = 1; i <= 5; i++) {
      const targetFrame = frameNumber - i;
      if (targetFrame >= activeEvent.minFrame) {
        preloadUrls.push(getFrameUrl(activeEvent, targetFrame));
      }
    }

    preloadUrls.forEach((url) => {
      if (!imageCacheRef.current.has(url) && !loadingPromisesRef.current.has(url)) {
        loadSingleFrame(url);
      }
    });
  }, [sequenceState, loadSingleFrame]);

  /**
   * Render target frame on canvas for active event
   */
  useEffect(() => {
    updateCanvasDimensions();

    const { activeEvent, eventProgress, frameUrl } = sequenceState;
    const cachedImage = imageCacheRef.current.get(frameUrl);

    if (cachedImage) {
      drawFrameToCanvas(cachedImage);
    } else {
      let cancelled = false;

      // Draw last rendered source while loading
      if (lastRenderedSourceRef.current) {
        drawFrameToCanvas(lastRenderedSourceRef.current);
      }

      loadSingleFrame(frameUrl).then((img) => {
        if (cancelled) return;
        if (img) {
          drawFrameToCanvas(img);
        } else {
          // PNG image fetch failed (e.g. 404 on Vercel), seek video for active event!
          seekVideoToProgress(activeEvent.id, activeEvent.videoUrl, eventProgress);
        }
      });

      return () => {
        cancelled = true;
      };
    }
  }, [
    sequenceState,
    drawFrameToCanvas,
    loadSingleFrame,
    seekVideoToProgress,
    updateCanvasDimensions,
  ]);

  /**
   * Window resize handler
   */
  useEffect(() => {
    window.addEventListener("resize", updateCanvasDimensions);
    updateCanvasDimensions();
    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
    };
  }, [updateCanvasDimensions]);

  return (
    <div className="fixed inset-0 w-full h-full z-0 bg-[#02040a] overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default FrameSequenceCanvas;
