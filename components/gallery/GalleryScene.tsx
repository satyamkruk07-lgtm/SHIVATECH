"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { galleryData, galleryCategories, GalleryCategory, GalleryItem } from "@/data/gallery";
import CityBackground from "./CityBackground";
import GalleryFilters from "./GalleryFilters";
import GalleryCarousel from "./GalleryCarousel";
import GalleryDetails from "./GalleryDetails";

export default function GalleryScene() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("ALL");
  const [selectedPhotoItem, setSelectedPhotoItem] = useState<GalleryItem | null>(null);

  // Mouse Parallax Offset
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Filter items based on selected category (memoized so reference remains stable across mouse moves)
  const filteredItems = useMemo(
    () =>
      galleryData.filter(
        (item) => activeCategory === "ALL" || item.category === activeCategory
      ),
    [activeCategory]
  );

  const handleSelectCategory = (cat: GalleryCategory) => {
    setActiveCategory(cat);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const handlePrevModalPhoto = useCallback(() => {
    if (!selectedPhotoItem) return;
    const currentIdx = filteredItems.findIndex((it) => it.id === selectedPhotoItem.id);
    const prevIdx = (currentIdx - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhotoItem(filteredItems[prevIdx]);
  }, [selectedPhotoItem, filteredItems]);

  const handleNextModalPhoto = useCallback(() => {
    if (!selectedPhotoItem) return;
    const currentIdx = filteredItems.findIndex((it) => it.id === selectedPhotoItem.id);
    const nextIdx = (currentIdx + 1) % filteredItems.length;
    setSelectedPhotoItem(filteredItems[nextIdx]);
  }, [selectedPhotoItem, filteredItems]);

  // Keyboard navigation for modal & carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoItem) {
        if (e.key === "ArrowLeft") handlePrevModalPhoto();
        if (e.key === "ArrowRight") handleNextModalPhoto();
        if (e.key === "Escape") setSelectedPhotoItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoItem, handlePrevModalPhoto, handleNextModalPhoto]);

  return (
    <main
      className="relative w-full min-h-screen bg-[#02050e] text-white overflow-hidden selection:bg-red-600 selection:text-white select-none flex flex-col justify-between"
      onMouseMove={handleMouseMove}
    >
      {/* 1. CINEMATIC FUTURISTIC CITY SKYLINE & ROOFTOP BACKGROUND */}
      <CityBackground mouseX={mouseOffset.x} mouseY={mouseOffset.y} />

      {/* 2. TOP HEADER HUD & CATEGORY FILTERS PILL BAR */}
      <div className="relative z-20 pt-16 sm:pt-20 px-4 flex flex-col items-center">
        {/* Title */}
        <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-1">
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-red-500 uppercase">
            WEB OF MEMORIES
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase font-mono drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-none mb-4 text-center">
          GALLERY ARCHIVE
        </h1>

        {/* Category Filters Bar */}
        <GalleryFilters
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />
      </div>

      {/* 3. PRIMARY MASK-TO-PHOTO REVEAL CAROUSEL */}
      <div className="relative z-10 w-full my-auto">
        <GalleryCarousel
          items={filteredItems}
          onOpenPhotoModal={(item) => setSelectedPhotoItem(item)}
        />
      </div>

      {/* 4. CINEMATIC LIGHTBOX MODAL (On clicking center photo) */}
      <GalleryDetails
        item={selectedPhotoItem}
        onClose={() => setSelectedPhotoItem(null)}
        onPrev={handlePrevModalPhoto}
        onNext={handleNextModalPhoto}
      />
    </main>
  );
}
