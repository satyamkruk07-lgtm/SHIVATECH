"use client";

import React from "react";

interface GalleryNavigationProps {
  currentIndex: number;
  totalCount: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryNavigation({
  currentIndex,
  totalCount,
  onPrev,
  onNext,
}: GalleryNavigationProps) {
  const formattedIndex = (currentIndex + 1).toString().padStart(2, "0");
  const formattedTotal = totalCount.toString().padStart(2, "0");

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto select-none">
      <div className="flex items-center space-x-4 bg-[#040814]/90 border border-white/15 px-5 py-2.5 rounded-full backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_20px_rgba(56,189,248,0.15)]">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="flex items-center space-x-1.5 text-xs font-mono font-bold text-slate-300 hover:text-white transition-colors"
          aria-label="Previous photo"
        >
          <span className="text-red-500">←</span>
          <span>PREVIOUS</span>
        </button>

        {/* Counter Badge */}
        <div className="text-xs font-mono font-black text-white px-3 py-0.5 rounded-full bg-white/5 border border-white/10">
          <span className="text-sky-400">{formattedIndex}</span>
          <span className="text-slate-500 mx-1">/</span>
          <span className="text-slate-400">{formattedTotal}</span>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="flex items-center space-x-1.5 text-xs font-mono font-bold text-slate-300 hover:text-white transition-colors"
          aria-label="Next photo"
        >
          <span>NEXT</span>
          <span className="text-red-500">→</span>
        </button>
      </div>
    </div>
  );
}
