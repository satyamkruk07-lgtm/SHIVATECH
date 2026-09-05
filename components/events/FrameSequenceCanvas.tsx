"use client";

import React, { useEffect, useRef, useCallback } from "react";
import {
  eventsSequenceData,
  getFrameUrl,
  getEventZoomState,
  GlobalSequenceState,
} from "@/data/events";
import FrameSequenceLoader from "./FrameSequenceLoader";

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
  const prevProgressRef = useRef<number>(sequenceState.globalProgress);

  // Dedicated FrameSequenceLoader instance
  const loaderRef = useRef<FrameSequenceLoader | null>(null);
  if (!loaderRef.current) {
    loaderRef.current = new FrameSequenceLoader();
  }

  useEffect(() => {
    sequenceStateRef.current = sequenceState;
  }, [sequenceState]);

  // Last rendered source to prevent black/empty canvas blinks
  const lastRenderedSourceRef = useRef<HTMLImageElement | ImageBitmap | null>(null);

  /**
   * Draws an image or bitmap frame to the canvas with cover scaling and dynamic focal zoom
   */
  const drawFrameToCanvas = useCallback(
    (source: HTMLImageElement | ImageBitmap) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const srcWidth = source.width;
      const srcHeight = source.height;

      if (!canvasWidth || !canvasHeight || !srcWidth || !srcHeight) return;

      // Cover scaling algorithm
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
   * Initial high-priority frame load & notification
   */
  useEffect(() => {
    let isMounted = true;
    const loader = loaderRef.current!;

    const preloadInitialBatch = async () => {
      const event1 = eventsSequenceData[0];
      const firstFrameUrl = getFrameUrl(event1, event1.minFrame);

      // Race load of frame 1 against 600ms safety timeout
      const loadFirst = loader.loadFrame(firstFrameUrl);
      const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 600));

      await Promise.race([loadFirst, timeoutPromise]);

      if (isMounted && onInitialFramesLoaded) {
        onInitialFramesLoaded();
      }

      // Preload initial window for Event 1
      const initialUrls: string[] = [];
      for (let f = event1.minFrame + 1; f < Math.min(event1.minFrame + 15, event1.maxFrame); f++) {
        initialUrls.push(getFrameUrl(event1, f));
      }
      eventsSequenceData.slice(1).forEach((evt) => {
        initialUrls.push(getFrameUrl(evt, evt.minFrame));
      });

      Promise.all(initialUrls.map((url) => loader.loadFrame(url))).catch(() => {});
    };

    preloadInitialBatch();

    return () => {
      isMounted = false;
    };
  }, [onInitialFramesLoaded]);

  /**
   * Direction-aware preloading on scroll progress update
   */
  useEffect(() => {
    const loader = loaderRef.current!;
    const currentProgress = sequenceState.globalProgress;
    const scrollDirection: "down" | "up" = currentProgress >= prevProgressRef.current ? "down" : "up";
    prevProgressRef.current = currentProgress;

    loader.updatePriorityQueue(sequenceState, scrollDirection);
  }, [sequenceState]);

  /**
   * Canvas rendering loop on frame update with 0ms nearest-frame fallback
   */
  useEffect(() => {
    updateCanvasDimensions();

    const loader = loaderRef.current!;
    const { activeEvent, frameUrl, frameNumber } = sequenceState;

    let cancelled = false;

    // 1. Check if exact target frame is already cached
    loader.loadFrame(frameUrl).then((img) => {
      if (cancelled) return;
      if (img) {
        drawFrameToCanvas(img);
      } else {
        // Fallback to nearest cached frame or last rendered frame (NO BLACK CANVAS)
        const nearest = loader.getNearestCachedFrame(activeEvent, frameNumber);
        if (nearest) {
          drawFrameToCanvas(nearest);
        } else if (lastRenderedSourceRef.current) {
          drawFrameToCanvas(lastRenderedSourceRef.current);
        }
      }
    });

    // Immediate 0ms attempt with nearest frame while load is pending
    const instantNearest = loader.getNearestCachedFrame(activeEvent, frameNumber);
    if (instantNearest) {
      drawFrameToCanvas(instantNearest);
    } else if (lastRenderedSourceRef.current) {
      drawFrameToCanvas(lastRenderedSourceRef.current);
    }

    return () => {
      cancelled = true;
    };
  }, [sequenceState, drawFrameToCanvas, updateCanvasDimensions]);

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

  /**
   * Unmount cleanup
   */
  useEffect(() => {
    return () => {
      if (loaderRef.current) {
        loaderRef.current.destroy();
      }
    };
  }, []);

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
