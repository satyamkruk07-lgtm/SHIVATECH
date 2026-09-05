"use client";

import React, { useEffect, useRef, useCallback } from "react";
import {
  eventsSequenceData,
  getEventZoomState,
  GlobalSequenceState,
} from "@/data/events";
import FrameAtlasLoader, { FrameCropCoordinates } from "./FrameAtlasLoader";

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

  // FrameAtlasLoader instance
  const loaderRef = useRef<FrameAtlasLoader | null>(null);
  if (!loaderRef.current) {
    loaderRef.current = new FrameAtlasLoader();
  }

  useEffect(() => {
    sequenceStateRef.current = sequenceState;
  }, [sequenceState]);

  // Last rendered crop to prevent black screen flashes
  const lastRenderedCropRef = useRef<FrameCropCoordinates | null>(null);

  /**
   * Draws an atlas crop to the canvas with object-fit: cover scaling and dynamic focal building zoom
   */
  const drawCropToCanvas = useCallback(
    (crop: FrameCropCoordinates) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const srcWidth = crop.sourceWidth;
      const srcHeight = crop.sourceHeight;

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

      ctx.drawImage(
        crop.image,
        crop.sourceX,
        crop.sourceY,
        crop.sourceWidth,
        crop.sourceHeight,
        finalOffsetX,
        finalOffsetY,
        scaledWidth,
        scaledHeight
      );

      lastRenderedCropRef.current = crop;
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

      if (lastRenderedCropRef.current) {
        drawCropToCanvas(lastRenderedCropRef.current);
      }
    }
  }, [drawCropToCanvas]);

  /**
   * Initial high-priority chunk load & loader notification
   */
  useEffect(() => {
    let isMounted = true;
    const loader = loaderRef.current!;

    const preloadInitialBatch = async () => {
      // First chunk of Event 1 (Hacknation)
      const firstChunkUrl = "/event-atlas/hacknation-2-chunk-00.webp";

      const loadFirst = loader.loadChunk(firstChunkUrl);
      const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 600));

      await Promise.race([loadFirst, timeoutPromise]);

      if (isMounted && onInitialFramesLoaded) {
        onInitialFramesLoaded();
      }

      // Preload initial chunk 0 of all other 3 events for seamless transitions
      const initialChunkUrls = [
        "/event-atlas/hacknation-2-chunk-01.webp",
        "/event-atlas/ideathon-chunk-00.webp",
        "/event-atlas/shivatech-chunk-00.webp",
        "/event-atlas/science-championship-chunk-00.webp",
      ];

      Promise.all(initialChunkUrls.map((url) => loader.loadChunk(url))).catch(() => {});
    };

    preloadInitialBatch();

    return () => {
      isMounted = false;
    };
  }, [onInitialFramesLoaded]);

  /**
   * Direction-aware chunk preloading on scroll update
   */
  useEffect(() => {
    const loader = loaderRef.current!;
    const currentProgress = sequenceState.globalProgress;
    const scrollDirection: "down" | "up" =
      currentProgress >= prevProgressRef.current ? "down" : "up";
    prevProgressRef.current = currentProgress;

    loader.updateChunkQueue(
      sequenceState.activeEvent.id,
      sequenceState.frameNumber,
      scrollDirection
    );
  }, [sequenceState]);

  /**
   * Render loop: crops frame from texture atlas and blits to canvas
   */
  useEffect(() => {
    updateCanvasDimensions();

    const loader = loaderRef.current!;
    const { activeEvent, frameNumber } = sequenceState;

    let cancelled = false;

    // 1. Get exact crop for target frame
    const crop = loader.getFrameCrop(activeEvent.id, frameNumber);
    if (crop) {
      drawCropToCanvas(crop);
    } else if (lastRenderedCropRef.current) {
      // Draw last rendered crop while chunk is fetching (NEVER CLEAR CANVAS)
      drawCropToCanvas(lastRenderedCropRef.current);
    }

    // Async fallback check
    const currentChunkUrl = `/event-atlas/${activeEvent.id}-chunk-00.webp`;
    loader.loadChunk(currentChunkUrl).then(() => {
      if (cancelled) return;
      const updatedCrop = loader.getFrameCrop(activeEvent.id, frameNumber);
      if (updatedCrop) {
        drawCropToCanvas(updatedCrop);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [sequenceState, drawCropToCanvas, updateCanvasDimensions]);

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
   * Cleanup on unmount
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
