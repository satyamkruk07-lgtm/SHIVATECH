"use client";

import React from "react";
import { motion } from "framer-motion";

interface GalleryControlsProps {
  onPrev: () => void;
  onNext: () => void;
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
}

export const GalleryControls: React.FC<GalleryControlsProps> = ({
  onPrev,
  onNext,
  isAutoPlaying,
  onToggleAutoPlay,
}) => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-4 pointer-events-auto select-none font-mono">
      {/* Left Arrow Button */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="w-11 h-11 rounded-full bg-[#040814]/85 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all hover:border-red-500 cursor-pointer"
        aria-label="Previous Memory"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </motion.button>

      {/* AutoPlay Toggle Indicator Button */}
      <button
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          onToggleAutoPlay();
        }}
        className="px-4 py-2 rounded-full bg-[#040814]/85 border border-sky-400/40 backdrop-blur-xl text-xs font-bold text-sky-400 hover:text-white hover:border-sky-300 flex items-center space-x-2 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)] cursor-pointer"
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isAutoPlaying ? "bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" : "bg-slate-500"
          }`}
        />
        <span className="tracking-widest uppercase">
          {isAutoPlaying ? "AUTOPLAY: ON" : "AUTOPLAY: PAUSED"}
        </span>
      </button>

      {/* Right Arrow Button */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="w-11 h-11 rounded-full bg-[#040814]/85 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all hover:border-red-500 cursor-pointer"
        aria-label="Next Memory"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </motion.button>
    </div>
  );
};

export default GalleryControls;
