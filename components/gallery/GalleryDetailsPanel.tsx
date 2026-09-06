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
    <div className="absolute top-20 right-3 sm:right-6 lg:right-8 z-40 w-full max-w-[300px] sm:max-w-[330px] pointer-events-auto select-none transition-all duration-500 ease-out animate-fadeIn">
      <div className="relative p-4 rounded-2xl bg-[#040814]/92 border border-sky-500/40 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(56,189,248,0.25)]">
        {/* Sci-Fi Tech Corner Accents */}
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-sky-400" />

        {/* Header Row: Category Badge & Close X */}
        <div className="flex items-start justify-between mb-2 border-b border-white/10 pb-2">
          <div>
            <span className="text-[9px] font-mono font-bold tracking-widest text-sky-400 uppercase">
              {item.category}
            </span>
            <h3 className="text-base font-black font-mono tracking-wider text-white uppercase drop-shadow leading-tight mt-0.5">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 transition-colors text-xs"
            aria-label="Close photo detail panel"
          >
            ✕
          </button>
        </div>

        {/* Image Preview Thumbnail */}
        <div className="relative w-full h-36 rounded-xl overflow-hidden mb-2.5 border border-white/15">
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/80 via-transparent to-transparent" />
        </div>

        {/* Date & Location Metadata */}
        <div className="space-y-1 mb-2.5 text-[11px] font-mono">
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-slate-400">EVENT:</span>
            <span className="font-bold text-red-400 uppercase">{item.event}</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-slate-400">DATE:</span>
            <span className="font-semibold text-slate-200">{item.date}</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-slate-400">VENUE:</span>
            <span className="font-semibold text-sky-400 uppercase">{item.location}</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-[11px] text-slate-300 font-sans leading-relaxed mb-3 border-t border-white/10 pt-2">
          {item.description}
        </p>

        {/* Navigation Action Buttons */}
        <div className="flex items-center justify-between space-x-2 pt-1 border-t border-white/10">
          <button
            onClick={onPrev}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-xs font-mono font-bold text-slate-200 hover:text-white transition-all"
            aria-label="Previous photo"
          >
            ‹ PREV
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-1.5 px-3 rounded-xl bg-white/5 hover:bg-red-950/60 border border-white/15 hover:border-red-500/50 flex items-center justify-center text-xs font-mono font-bold text-slate-300 hover:text-white transition-all uppercase tracking-wider"
          >
            CLOSE
          </button>

          <button
            onClick={onNext}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border border-red-400/50 flex items-center justify-center text-xs font-mono font-bold text-white transition-all shadow-[0_0_12px_rgba(239,68,68,0.4)]"
            aria-label="Next photo"
          >
            NEXT ›
          </button>
        </div>
      </div>
    </div>
  );
}
