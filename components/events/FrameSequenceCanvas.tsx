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

  // Cache for loaded images or ImageBitmaps
  const imageCacheRef = useRef<Map<string, HTMLImageElement | ImageBitmap>>(
    new Map()
  );
  // Track in-flight fetch promises to prevent duplicate downloads
  const loadingPromisesRef = useRef<Map<string, Promise<HTMLImageElement | ImageBitmap | null>>>(
    new Map()
  );
  
  // HTML5 Video Fallback cache for Vercel deployment reliability
  const videoElementsRef = useRef<Map<string, HTMLVideoElement>>(new Map());

  // Keep reference to the last successfully rendered source to prevent black screen flashes
  const lastRenderedImageRef = useRef<HTMLImageElement | ImageBitmap | HTMLVideoElement | null>(
    null
  );

  const initialLoadedRef = useRef<boolean>(false);

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

      lastRenderedImageRef.current = source;
    },
    []
  );

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

      // Re-draw last image after resize if available
      if (lastRenderedImageRef.current) {
        drawFrameToCanvas(lastRenderedImageRef.current);
      }
    }
  }, [drawFrameToCanvas]);

  /**
   * Preload initial key frames & videos on page load
   */
  useEffect(() => {
    let isMounted = true;

    const preloadInitialBatch = async () => {
      const initialUrls: string[] = [];
      
      // 1. Preload video fallbacks for Vercel CDN stability
      eventsSequenceData.forEach((evt) => {
        getOrCreateVideo(evt.id, evt.videoUrl);
      });

      // 2. First 10 frames of Event 1 (HACKNATION 2.0)
      const event1 = eventsSequenceData[0];
      for (let f = event1.minFrame; f < Math.min(event1.minFrame + 10, event1.maxFrame); f++) {
        initialUrls.push(getFrameUrl(event1, f));
      }

      // 3. First frames of all other events
      eventsSequenceData.slice(1).forEach((evt) => {
        initialUrls.push(getFrameUrl(evt, evt.minFrame));
      });

      // Load all initial batch items concurrently
      await Promise.all(initialUrls.map((url) => loadSingleFrame(url)));

      if (isMounted) {
        initialLoadedRef.current = true;
        if (onInitialFramesLoaded) {
          onInitialFramesLoaded();
        }
      }
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

    // Ahead
    for (let i = 1; i <= windowSize; i++) {
      const targetFrame = frameNumber + i;
      if (targetFrame <= activeEvent.maxFrame) {
        preloadUrls.push(getFrameUrl(activeEvent, targetFrame));
      } else if (activeEvent.index < eventsSequenceData.length) {
        const nextEvt = eventsSequenceData[activeEvent.index];
        const overflow = targetFrame - activeEvent.maxFrame;
        if (nextEvt && nextEvt.minFrame + overflow - 1 <= nextEvt.maxFrame) {
          preloadUrls.push(getFrameUrl(nextEvt, nextEvt.minFrame + overflow - 1));
        }
      }
    }

    // Behind
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
   * Render target frame on canvas (with instant Video Frame fallback if PNG fails on Vercel)
   */
  useEffect(() => {
    updateCanvasDimensions();

    const { activeEvent, eventProgress, frameUrl } = sequenceState;
    const cachedImage = imageCacheRef.current.get(frameUrl);

    if (cachedImage) {
      drawFrameToCanvas(cachedImage);
    } else {
      let cancelled = false;

      // Render last rendered image while target frame is loading
      if (lastRenderedImageRef.current) {
        drawFrameToCanvas(lastRenderedImageRef.current);
      }

      loadSingleFrame(frameUrl).then((img) => {
        if (cancelled) return;
        if (img) {
          drawFrameToCanvas(img);
        } else {
          // PNG image fetch failed (e.g. 404 on Vercel), fallback to seeking video stream!
          const video = getOrCreateVideo(activeEvent.id, activeEvent.videoUrl);
          if (video) {
            const seekVideo = () => {
              if (video.duration && !isNaN(video.duration)) {
                video.currentTime = eventProgress * video.duration;
              }
              drawFrameToCanvas(video);
            };

            if (video.readyState >= 2) {
              seekVideo();
            } else {
              video.addEventListener("loadedmetadata", seekVideo, { once: true });
              video.addEventListener("canplay", seekVideo, { once: true });
            }
          }
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
    getOrCreateVideo,
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
