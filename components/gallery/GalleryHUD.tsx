"use client";

import React from "react";

interface GalleryHUDProps {
  currentIndex: number;
  totalCount: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryHUD({
  currentIndex,
  totalCount,
  onPrev,
  onNext,
}: GalleryHUDProps) {
  const formattedIndex = (currentIndex + 1).toString().padStart(2, "0");
  const formattedTotal = totalCount.toString().padStart(2, "0");

  return (
    <>
      {/* TOP LEFT SECTION: PAGE TITLE & SUBTITLE */}
      <div className="absolute top-20 left-4 sm:left-8 lg:left-12 z-20 max-w-[260px] pointer-events-auto select-none hidden md:block">
        {/* Accent Tag */}
        <div className="flex items-center space-x-2 mb-0.5">
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-red-500 uppercase">
            SHIVATECH 2026
          </span>
        </div>

        {/* Display Heading */}
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase font-mono drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-none mb-0.5">
          GALLERY
        </h1>

        {/* Subtitle */}
        <h2 className="text-[11px] font-mono font-extrabold tracking-widest text-red-500 uppercase mb-1">
          MOMENTS CONNECT US
        </h2>

        {/* Description */}
        <p className="text-[11px] text-slate-300 font-sans leading-tight drop-shadow">
          Relive the energy, people and moments that define SHIVATECH.
        </p>
      </div>

      {/* BOTTOM LEFT: PHOTO COUNTER */}
      <div className="absolute bottom-6 left-4 sm:left-8 lg:left-12 z-30 pointer-events-auto select-none hidden md:block">
        <div className="flex items-center space-x-2 bg-[#040814]/85 border border-white/15 px-3.5 py-1 rounded-full backdrop-blur-xl shadow-lg">
          <span className="text-xs font-mono font-black text-sky-400">{formattedIndex}</span>
          <span className="text-xs font-mono text-slate-500">/</span>
          <span className="text-xs font-mono text-slate-400">{formattedTotal}</span>
        </div>
      </div>

      {/* BOTTOM CENTER: SCROLL INDICATOR */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none select-none">
        <div className="relative w-4 h-4 mb-0.5 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-red-500 filter drop-shadow">
            <ellipse cx="12" cy="13.5" rx="3" ry="4" fill="#040814" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="7" r="2.2" fill="#040814" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="12" cy="13.5" r="1.2" fill="#ef4444" className="animate-pulse" />
          </svg>
        </div>
        <span className="text-[8px] font-mono font-bold tracking-widest text-slate-300 uppercase">
          SCROLL TO EXPLORE
        </span>
        <span className="text-[10px] text-slate-400 animate-bounce">⌄</span>
      </div>

      {/* BOTTOM RIGHT: NAVIGATION BUTTONS */}
      <div className="absolute bottom-6 right-4 sm:right-8 lg:right-12 z-30 pointer-events-auto select-none hidden md:block">
        <div className="flex items-center space-x-3 bg-[#040814]/85 border border-white/15 px-4 py-1 rounded-full backdrop-blur-xl shadow-lg">
          <button
            onClick={onPrev}
            className="text-[11px] font-mono font-bold text-slate-300 hover:text-white transition-colors"
          >
            ← PREVIOUS
          </button>
          <span className="text-slate-600 text-xs">|</span>
          <button
            onClick={onNext}
            className="text-[11px] font-mono font-bold text-slate-300 hover:text-white transition-colors"
          >
            NEXT →
          </button>
        </div>
      </div>
    </>
  );
}
