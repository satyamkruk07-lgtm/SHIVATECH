"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  getGlobalSequenceState,
  GlobalSequenceState,
  eventsSequenceData,
} from "@/data/events";
import FrameSequenceCanvas from "./FrameSequenceCanvas";
import EventsLoader from "./EventsLoader";
import EventArrivalUI from "./EventArrivalUI";

export const EventsScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize sequence state with first frame
  const [sequenceState, setSequenceState] = useState<GlobalSequenceState>(() =>
    getGlobalSequenceState(0)
  );

  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const lastStateFrameUrlRef = useRef<string>(sequenceState.frameUrl);

  const handleInitialFramesLoaded = useCallback(() => {
    setIsLoading(false);
  }, []);

  const calculateTargetProgress = useCallback(() => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollableHeight = rect.height - window.innerHeight;
    if (scrollableHeight <= 0) return 0;
    const currentScroll = -rect.top;
    return Math.max(0, Math.min(1, currentScroll / scrollableHeight));
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const tick = () => {
      const isReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Lerp target progress for smooth camera scroll feel
      const lerpFactor = isReducedMotion ? 1.0 : 0.15;
      const diff = targetProgressRef.current - currentProgressRef.current;

      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * lerpFactor;
        const newState = getGlobalSequenceState(currentProgressRef.current);
        
        // Only update state if frame actually changed to minimize React re-renders
        if (newState.frameUrl !== lastStateFrameUrlRef.current) {
          lastStateFrameUrlRef.current = newState.frameUrl;
          setSequenceState(newState);
        }
      } else if (currentProgressRef.current !== targetProgressRef.current) {
        currentProgressRef.current = targetProgressRef.current;
        const newState = getGlobalSequenceState(currentProgressRef.current);
        if (newState.frameUrl !== lastStateFrameUrlRef.current) {
          lastStateFrameUrlRef.current = newState.frameUrl;
          setSequenceState(newState);
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    const handleScroll = () => {
      targetProgressRef.current = calculateTargetProgress();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial evaluation
    handleScroll();

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [calculateTargetProgress]);

  return (
    <>
      {/* Page Loader */}
      <EventsLoader isLoading={isLoading} />

      {/* Tall Scroll Container (Controls global sequence camera progress) */}
      <div
        ref={containerRef}
        className="relative w-full h-[600vh] bg-[#02040a]"
      >
        {/* Sticky Viewport */}
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
          {/* Frame Sequence HTML Canvas Renderer */}
          <FrameSequenceCanvas
            sequenceState={sequenceState}
            onInitialFramesLoaded={handleInitialFramesLoaded}
          />

          {/* Event Arrival Building Name Glow & Cinematic Card UI */}
          <EventArrivalUI sequenceState={sequenceState} />
        </div>
      </div>
    </>
  );
};

export default EventsScene;
