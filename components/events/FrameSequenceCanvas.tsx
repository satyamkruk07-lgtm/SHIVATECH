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
  sequenceStateRef.current = sequenceState;

  // Small bounded memory cache (current frame ± 10 frames)
  const imageCacheRef = useRef<Map<string, HTMLImageElement>>(new Map());
  const loadingPromisesRef = useRef<Map<string, Promise<HTMLImageElement | null>>>(new Map());

  // Last rendered frame & source to prevent redundant redrawing and black flashes
  const lastRenderedUrlRef = useRef<string | null>(null);
  const lastRenderedImageRef = useRef<HTMLImageElement | null>(null);
  const lastRenderedScaleRef = useRef<number | null>(null);

  // Dev-only performance diagnostic counters
  const renderStatsRef = useRef<{
    renderCount: number;
    totalRenderTimeMs: number;
    maxRenderTimeMs: number;
    lastLogTime: number;
  }>({
    renderCount: 0,
    totalRenderTimeMs: 0,
    maxRenderTimeMs: 0,
    lastLogTime: 0,
  });

  /**
   * Safe image fetcher with PNG fallback for a single frame
   */
  const loadSingleFrame = useCallback((url: string): Promise<HTMLImageElement | null> => {
    if (imageCacheRef.current.has(url)) {
      return Promise.resolve(imageCacheRef.current.get(url)!);
    }
    if (loadingPromisesRef.current.has(url)) {
      return loadingPromisesRef.current.get(url)!;
    }

    const promise = new Promise<HTMLImageElement | null>((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        imageCacheRef.current.set(url, img);
        resolve(img);
      };
      img.onerror = () => {
        // PNG fallback if WebP fails
        if (url.endsWith(".webp")) {
          const pngUrl = url.replace(/\.webp$/, ".png");
          const fallbackImg = new Image();
          fallbackImg.crossOrigin = "anonymous";
          fallbackImg.onload = () => {
            imageCacheRef.current.set(url, fallbackImg);
            resolve(fallbackImg);
          };
          fallbackImg.onerror = () => resolve(null);
          fallbackImg.src = pngUrl;
        } else {
          resolve(null);
        }
      };
      img.src = url;
    }).finally(() => {
      loadingPromisesRef.current.delete(url);
    });

    loadingPromisesRef.current.set(url, promise);
    return promise;
  }, []);

  /**
   * Finds nearest cached frame image for current event (0ms fallback)
   */
  const findNearestCachedImage = useCallback((event: (typeof eventsSequenceData)[0], targetFrame: number) => {
    for (let offset = 1; offset <= 15; offset++) {
      const prevUrl = getFrameUrl(event, targetFrame - offset);
      if (imageCacheRef.current.has(prevUrl)) return imageCacheRef.current.get(prevUrl)!;

      const nextUrl = getFrameUrl(event, targetFrame + offset);
      if (imageCacheRef.current.has(nextUrl)) return imageCacheRef.current.get(nextUrl)!;
    }
    return null;
  }, []);

  /**
   * Evicts distant images from memory cache (bounded cache: current ± 12 frames)
   */
  const evictDistantCache = useCallback((activeState: GlobalSequenceState) => {
    const { activeEvent, frameNumber } = activeState;
    const BOUND = 12;

    for (const [url] of imageCacheRef.current.entries()) {
      // Keep initial keyframes of all events for seamless transitions
      const isInitialFrame = eventsSequenceData.some(
        (evt) => getFrameUrl(evt, evt.minFrame) === url
      );
      if (isInitialFrame) continue;

      let isDistant = true;
      if (url.startsWith(activeEvent.frameFolder)) {
        const match = url.match(/frame_(\d+)\.(webp|png)$/);
        if (match) {
          const num = parseInt(match[1], 10);
          if (num >= frameNumber - BOUND && num <= frameNumber + BOUND) {
            isDistant = false;
          }
        }
      }

      if (isDistant) {
        imageCacheRef.current.delete(url);
      }
    }
  }, []);

  /**
   * Draws an image frame to the canvas using object-fit cover scaling and dynamic focal zoom
   */
  const drawFrameToCanvas = useCallback(
    (img: HTMLImageElement, frameUrl: string) => {
      const startTime = typeof performance !== "undefined" ? performance.now() : 0;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const srcWidth = img.width;
      const srcHeight = img.height;

      // Full symmetrical source image framing (keeps all 4 event buildings perfectly centered)
      const sX = 0;
      const sY = 0;
      const sWidth = srcWidth;
      const sHeight = srcHeight;

      // Calculate dynamic building zoom based on scroll progress and event ID
      const currentState = sequenceStateRef.current;
      const { scale, focalX, focalY } = getEventZoomState(
        currentState.activeEvent.id,
        currentState.eventProgress,
        currentState.frameNumber
      );

      const isPortraitMobile = canvasWidth / canvasHeight < 0.95;

      // Standard object-fit cover ensuring zero black bars
      const hRatio = canvasWidth / sWidth;
      const vRatio = canvasHeight / sHeight;
      const ratio = Math.max(hRatio, vRatio);

      let focalAdjustX = focalX;
      let focalAdjustY = focalY;
      let effectiveScale = scale;

      if (isPortraitMobile) {
        // Mobile portrait: center building horizontally (50%)
        // Robust arrival zoom so building entrance fills screen in final arrival frames (like Hacknation 2.0)
        effectiveScale = 1.0 + (scale - 1.0) * 0.72;
        focalAdjustX = 0.50; // Dead center horizontally
        focalAdjustY = focalY; // Positioned on each event's entrance facade
      }

      const drawWidth = sWidth * ratio;
      const drawHeight = sHeight * ratio;
      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      const scaledWidth = drawWidth * effectiveScale;
      const scaledHeight = drawHeight * effectiveScale;

      const targetX = canvasWidth * focalAdjustX;
      const targetY = canvasHeight * focalAdjustY;

      const finalOffsetX = targetX - (targetX - offsetX) * effectiveScale;
      const finalOffsetY = targetY - (targetY - offsetY) * effectiveScale;

      ctx.drawImage(img, sX, sY, sWidth, sHeight, finalOffsetX, finalOffsetY, scaledWidth, scaledHeight);

      lastRenderedUrlRef.current = frameUrl;
      lastRenderedImageRef.current = img;
      lastRenderedScaleRef.current = effectiveScale;

      // Dev-only performance tracking
      if (process.env.NODE_ENV !== "production" && startTime > 0) {
        const renderTime = performance.now() - startTime;
        const stats = renderStatsRef.current;
        stats.renderCount++;
        stats.totalRenderTimeMs += renderTime;
        if (renderTime > stats.maxRenderTimeMs) stats.maxRenderTimeMs = renderTime;

        // Log diagnostics every 2 seconds in dev mode
        if (startTime - stats.lastLogTime > 2000) {
          stats.lastLogTime = startTime;
          const avgTime = (stats.totalRenderTimeMs / stats.renderCount).toFixed(2);
          console.log(
            `[DEV DIAGNOSTICS] Avg Draw Time: ${avgTime}ms | Max: ${stats.maxRenderTimeMs.toFixed(
              2
            )}ms | Cached Frames: ${imageCacheRef.current.size} | Backing Canvas: ${canvasWidth}x${canvasHeight}`
          );
        }
      }
    },
    []
  );

  /**
   * Handle canvas sizing with capped effective DPR (Step 9)
   */
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Cap effective DPR to 1.5 max to prevent high-res GPU bottlenecking
    const rawDPR = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const effectiveDPR = Math.min(rawDPR, 1.5);

    const rect = canvas.getBoundingClientRect();
    const newWidth = Math.floor(rect.width * effectiveDPR);
    const newHeight = Math.floor(rect.height * effectiveDPR);

    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      canvas.width = newWidth;
      canvas.height = newHeight;

      if (lastRenderedImageRef.current && lastRenderedUrlRef.current) {
        drawFrameToCanvas(lastRenderedImageRef.current, lastRenderedUrlRef.current);
      }
    }
  }, [drawFrameToCanvas]);

  /**
   * Step 5: Initial load — ONLY load first frame & small initial range
   */
  useEffect(() => {
    let isMounted = true;

    const preloadInitialBatch = async () => {
      const event1 = eventsSequenceData[0];
      const firstFrameUrl = getFrameUrl(event1, event1.minFrame);

      // Race frame 1 load against 500ms safety timeout
      const loadFirst = loadSingleFrame(firstFrameUrl);
      const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 500));

      await Promise.race([loadFirst, timeoutPromise]);

      if (isMounted && onInitialFramesLoaded) {
        onInitialFramesLoaded();
      }

      // Small initial range (first 8 frames of Event 1 + frame 1 of other events)
      const initialUrls: string[] = [];
      for (let f = event1.minFrame + 1; f < Math.min(event1.minFrame + 8, event1.maxFrame); f++) {
        initialUrls.push(getFrameUrl(event1, f));
      }
      eventsSequenceData.slice(1).forEach((evt) => {
        initialUrls.push(getFrameUrl(evt, evt.minFrame));
      });

      Promise.all(initialUrls.map((url) => loadSingleFrame(url))).catch(() => {});
    };

    preloadInitialBatch();

    return () => {
      isMounted = false;
    };
  }, [loadSingleFrame, onInitialFramesLoaded]);

  /**
   * Small bounded preloader: loads current ± 8 frames
   */
  useEffect(() => {
    const { activeEvent, frameNumber } = sequenceState;
    const windowSize = 8;
    const preloadUrls: string[] = [];

    for (let i = 1; i <= windowSize; i++) {
      const nextF = frameNumber + i;
      if (nextF <= activeEvent.maxFrame) {
        preloadUrls.push(getFrameUrl(activeEvent, nextF));
      }
      const prevF = frameNumber - i;
      if (prevF >= activeEvent.minFrame) {
        preloadUrls.push(getFrameUrl(activeEvent, prevF));
      }
    }

    // Preload next event's opening frames when near the end of current event for seamless transition reveal
    if (frameNumber >= activeEvent.maxFrame - 15 && sequenceState.activeEventIndex < eventsSequenceData.length - 1) {
      const nextEvent = eventsSequenceData[sequenceState.activeEventIndex + 1];
      for (let f = nextEvent.minFrame; f <= Math.min(nextEvent.minFrame + 8, nextEvent.maxFrame); f++) {
        preloadUrls.push(getFrameUrl(nextEvent, f));
      }
    }

    preloadUrls.forEach((url) => {
      if (!imageCacheRef.current.has(url) && !loadingPromisesRef.current.has(url)) {
        loadSingleFrame(url);
      }
    });

    evictDistantCache(sequenceState);
  }, [sequenceState, loadSingleFrame, evictDistantCache]);

  /**
   * Main Render Effect: Step 10 — Redraw ONLY when target frame or zoom scale changes
   */
  useEffect(() => {
    const { activeEvent, frameUrl, frameNumber, eventProgress } = sequenceState;
    const { scale } = getEventZoomState(activeEvent.id, eventProgress, frameNumber);

    // Step 10: Skip draw if exact frame and zoom are already displayed on canvas
    const lastScale = lastRenderedScaleRef.current;
    if (
      frameUrl === lastRenderedUrlRef.current &&
      lastRenderedImageRef.current &&
      lastScale !== null &&
      Math.abs(scale - lastScale) < 0.01
    ) {
      return;
    }

    const cachedImg = imageCacheRef.current.get(frameUrl);

    if (cachedImg) {
      drawFrameToCanvas(cachedImg, frameUrl);
    } else {
      let cancelled = false;

      // Step 7: Keep last valid frame or nearest frame on screen (NEVER CLEAR CANVAS)
      const nearestImg = findNearestCachedImage(activeEvent, frameNumber);
      if (nearestImg) {
        drawFrameToCanvas(nearestImg, frameUrl);
      } else if (lastRenderedImageRef.current && lastRenderedUrlRef.current) {
        drawFrameToCanvas(lastRenderedImageRef.current, lastRenderedUrlRef.current);
      }

      loadSingleFrame(frameUrl).then((img) => {
        if (cancelled) return;
        if (img) {
          drawFrameToCanvas(img, frameUrl);
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
    findNearestCachedImage,
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

  // Camera motion blur during inter-building transition zones
  const blurAmount = React.useMemo(() => {
    const gp = sequenceState.globalProgress;
    const boundaries = [0.25, 0.50, 0.75];
    for (const b of boundaries) {
      const dist = Math.abs(gp - b);
      if (dist < 0.025) {
        const factor = 1 - dist / 0.025;
        return (factor * 3.5).toFixed(1);
      }
    }
    return "0";
  }, [sequenceState.globalProgress]);

  return (
    <div className="fixed inset-0 w-full h-full z-0 bg-[#02040a] overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover transition-[filter] duration-150"
        style={{
          width: "100%",
          height: "100%",
          filter: blurAmount !== "0" ? `blur(${blurAmount}px)` : "none",
        }}
      />
      {/* Subtle corner fade on desktop to blend bottom-right unobtrusively */}
      <div className="hidden sm:block absolute bottom-0 right-0 w-44 h-28 pointer-events-none bg-gradient-to-tl from-[#02040a] via-[#02040a]/70 to-transparent" />
    </div>
  );
};

export default FrameSequenceCanvas;
