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
    <div className="w-full max-w-4xl mx-auto flex items-center justify-center pointer-events-auto select-none px-4 pt-16 sm:pt-20 pb-2 z-20">
      {/* Category Pills Bar */}
      <div className="inline-flex items-center flex-wrap justify-center gap-1.5 p-1.5 rounded-full bg-[#040814]/85 border border-white/15 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
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
