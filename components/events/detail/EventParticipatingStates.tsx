"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { ParticipatingState } from "@/data/events";

interface EventParticipatingStatesProps {
  title?: string;
  states: ParticipatingState[];
}

const StateCard: React.FC<{
  state: ParticipatingState;
  index: number;
}> = ({ state, index }) => {
  const [imgError, setImgError] = useState(false);
  const stateNumber = ((index % 16) + 1).toString().padStart(2, "0");

  return (
    <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] bg-[#070b16] border border-white/10 hover:border-purple-500/80 hover:shadow-[0_0_35px_rgba(168,85,247,0.45),inset_0_0_20px_rgba(168,85,247,0.15)] hover:scale-[1.02] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer flex flex-col justify-center items-center select-none">
      {/* 1. Background Image */}
      {!imgError ? (
        <img
          src={state.imageUrl}
          alt={state.description}
          loading="lazy"
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.7] contrast-[1.05] group-hover:brightness-95 group-hover:scale-105 transition-all duration-700 ease-out"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/60 via-slate-900 to-[#04060e]" />
      )}

      {/* 2. Atmospheric Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30 group-hover:via-black/35 transition-all duration-500 pointer-events-none" />
      <div className="absolute inset-0 bg-purple-950/10 group-hover:bg-purple-950/20 transition-colors duration-500 pointer-events-none" />

      {/* 3. Top State Index Tag */}
      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-purple-300/90 tracking-wider z-20">
        #{stateNumber}
      </div>

      {/* 4. Centered Pin & State Name (Exact Match to User Screenshot) */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 text-center max-w-[90%]">
        {/* Purple Location Pin Circle */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-900/50 border border-purple-400/60 backdrop-blur-md flex items-center justify-center mb-3.5 shadow-[0_0_18px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_28px_rgba(168,85,247,0.85)] group-hover:scale-110 group-hover:border-purple-300 group-hover:bg-purple-600/50 transition-all duration-300">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>

        {/* State Name in Orbitron typography */}
        <h3
          className="text-sm sm:text-base md:text-lg font-black tracking-widest text-white uppercase leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] group-hover:text-purple-200 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {state.description}
        </h3>
      </div>

      {/* 5. Cybernetic Corner Accents */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-500/0 group-hover:border-purple-400/80 transition-all duration-300 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-400/80 transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export const EventParticipatingStates: React.FC<EventParticipatingStatesProps> = ({
  title = "Past Participating States",
  states,
}) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isHovered, setIsHovered] = useState(false);
  const [withTransition, setWithTransition] = useState(true);
  const touchStartX = useRef(0);

  // Responsive items visible
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(4);
      else if (window.innerWidth >= 768) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const totalStates = states?.length || 0;

  // Triplicate array to provide seamless infinite loop buffer
  const extendedStates = useMemo(() => {
    if (!states || states.length === 0) return [];
    return [...states, ...states, ...states];
  }, [states]);

  // Start at middle copy
  const [currentIndex, setCurrentIndex] = useState(totalStates);

  // Auto-scroll every 3 seconds (3000ms) unless hovered
  useEffect(() => {
    if (isHovered || totalStates === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, totalStates]);

  // Handle seamless loop on transition end
  const handleTransitionEnd = () => {
    if (totalStates === 0) return;

    if (currentIndex >= totalStates * 2) {
      setWithTransition(false);
      setCurrentIndex(currentIndex - totalStates);
    } else if (currentIndex < totalStates) {
      setWithTransition(false);
      setCurrentIndex(currentIndex + totalStates);
    }
  };

  // Re-enable transition after instant snap
  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsHovered(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setIsHovered(false);
  };

  if (!states || states.length === 0) return null;

  // Calculate current active state for indicator (0-indexed)
  const activeNormalizedIndex = (currentIndex % totalStates + totalStates) % totalStates;

  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06] overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient Cybernetic Purple Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/[0.06] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a855f7 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-5 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center space-x-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-purple-400 uppercase font-bold">
                // NATIONWIDE FOOTPRINT ({totalStates}+ STATES & UTs)
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-mono tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              {title}
            </h2>
          </div>

          {/* Controls: Auto-scroll status pill + Prev/Next buttons */}
          <div className="flex items-center space-x-3 self-start md:self-auto">
            {/* 3s Interval Status Indicator */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[10px] font-mono text-purple-300 backdrop-blur-sm">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isHovered ? "bg-amber-400" : "bg-emerald-400 animate-pulse"
                }`}
              />
              <span>{isHovered ? "HOVER PAUSED" : "3S AUTO SCROLL"}</span>
            </div>

            {/* Prev Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous state"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/15 hover:border-purple-400/60 text-white flex items-center justify-center transition-all duration-200 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Next state"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/15 hover:border-purple-400/60 text-white flex items-center justify-center transition-all duration-200 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative w-full overflow-hidden py-3"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Edge Blur Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#02040a] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#02040a] to-transparent z-20 pointer-events-none" />

          {/* Sliding Track */}
          <div
            onTransitionEnd={handleTransitionEnd}
            className="flex will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              transition: withTransition
                ? "transform 0.65s cubic-bezier(0.2, 0.9, 0.3, 1)"
                : "none",
            }}
          >
            {extendedStates.map((state, idx) => (
              <div
                key={`${state.id}-${idx}`}
                className="shrink-0 px-2 sm:px-2.5"
                style={{
                  width: `${100 / visibleCount}%`,
                }}
              >
                <StateCard state={state} index={idx} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Tracker */}
        <div className="flex items-center justify-center space-x-1.5 mt-8">
          {states.map((_, dotIdx) => (
            <button
              key={`dot-${dotIdx}`}
              onClick={() => {
                const diff = dotIdx - activeNormalizedIndex;
                setCurrentIndex((prev) => prev + diff);
              }}
              aria-label={`Jump to state ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === activeNormalizedIndex
                  ? "w-6 bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventParticipatingStates;
