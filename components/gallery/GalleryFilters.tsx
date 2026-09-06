"use client";

import React from "react";
import { galleryCategories, GalleryCategory } from "@/data/gallery";

interface GalleryFiltersProps {
  activeCategory: GalleryCategory;
  onSelectCategory: (cat: GalleryCategory) => void;
}

export default function GalleryFilters({
  activeCategory,
  onSelectCategory,
}: GalleryFiltersProps) {
  return (
    <div className="w-full max-w-4xl mx-auto flex items-center justify-center flex-wrap gap-2 pointer-events-auto select-none px-4 pt-16 sm:pt-20 pb-2 z-20">
      {/* Title Header */}
      <div className="w-full text-center mb-1">
        <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-1">
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-red-500 uppercase">
            SHIVATECH 2026
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase font-mono drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] leading-none mb-1">
          GALLERY
        </h1>

        <p className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-slate-300 uppercase mb-3 drop-shadow">
          MOMENTS CONNECT US — WEB OF MEMORIES
        </p>
      </div>

      {/* Category Pills Bar */}
      <div className="inline-flex items-center flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-[#040814]/85 border border-white/15 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-400/50"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
