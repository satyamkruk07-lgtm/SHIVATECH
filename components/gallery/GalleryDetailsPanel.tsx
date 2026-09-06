"use client";

import React from "react";
import { GalleryItem } from "@/data/gallery";

interface GalleryDetailsPanelProps {
  item: GalleryItem | null;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

export default function GalleryDetailsPanel({
  item,
  onPrev,
  onNext,
  onClose,
}: GalleryDetailsPanelProps) {
  if (!item) return null;

  return (
    <div className="absolute top-28 right-4 sm:right-8 lg:right-10 z-40 w-full max-w-[320px] sm:max-w-[360px] pointer-events-auto select-none transition-all duration-500 ease-out animate-fadeIn">
      <div className="relative p-5 rounded-2xl bg-[#040814]/90 border border-sky-500/40 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(56,189,248,0.25)]">
        {/* Sci-Fi Tech Corner Accents */}
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-sky-400" />

        {/* Header Row: Category Badge & Close X */}
        <div className="flex items-start justify-between mb-3 border-b border-white/10 pb-2">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-sky-400 uppercase">
              {item.category}
            </span>
            <h3 className="text-lg font-black font-mono tracking-wider text-white uppercase drop-shadow leading-tight mt-0.5">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 transition-colors"
            aria-label="Close photo detail panel"
          >
            ✕
          </button>
        </div>

        {/* Larger Image Preview Thumbnail */}
        <div className="relative w-full h-44 rounded-xl overflow-hidden mb-3 border border-white/15">
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/80 via-transparent to-transparent" />
        </div>

        {/* Date & Location Metadata */}
        <div className="space-y-1.5 mb-3 text-xs font-mono">
          <div className="flex items-center space-x-2 text-slate-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="font-semibold text-slate-200">{item.date}</span>
          </div>

          <div className="flex items-center space-x-2 text-slate-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-400">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-semibold uppercase tracking-wider text-red-400">{item.location}</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4 border-t border-white/10 pt-2">
          {item.description}
        </p>

        {/* Navigation Action Buttons: PREVIOUS, CLOSE, NEXT */}
        <div className="flex items-center justify-between space-x-2 pt-1 border-t border-white/10">
          <button
            onClick={onPrev}
            className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-xs font-mono font-bold text-slate-200 hover:text-white transition-all"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-2 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border border-red-400/50 flex items-center justify-center text-xs font-mono font-bold text-white transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)] uppercase tracking-wider"
          >
            CLOSE
          </button>

          <button
            onClick={onNext}
            className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-xs font-mono font-bold text-slate-200 hover:text-white transition-all"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
