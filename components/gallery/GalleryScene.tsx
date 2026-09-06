"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { galleryData, GalleryCategory, GalleryItem } from "@/data/gallery";
import CityBackground from "./CityBackground";
import GalleryFilters from "./GalleryFilters";
import WebNetwork from "./WebNetwork";
import GalleryNode from "./GalleryNode";
import GalleryDetailsPanel from "./GalleryDetailsPanel";
import GalleryHUD from "./GalleryHUD";

export default function GalleryScene() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("ALL");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Parallax offset
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Web Network Draggable Position
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDraggingRef = useRef<boolean>(false);
  const startPointerPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const startDragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleSelectCategory = (cat: GalleryCategory) => {
    setActiveCategory(cat);
    setSelectedIndex(0);
  };

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % galleryData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        setSelectedIndex(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Mouse Parallax & Drag Handlers
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    startPointerPosRef.current = { x: e.clientX, y: e.clientY };
    startDragOffsetRef.current = { ...dragOffset };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startPointerPosRef.current.x;
    const dy = e.clientY - startPointerPosRef.current.y;
    setDragOffset({
      x: startDragOffsetRef.current.x + dx * 0.35,
      y: startDragOffsetRef.current.y + dy * 0.35,
    });
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const selectedItem = galleryData[selectedIndex] || galleryData[0];

  return (
    <main
      className="relative w-full min-h-screen bg-[#02050e] text-white overflow-hidden selection:bg-red-600 selection:text-white select-none"
      onMouseMove={handleMouseMove}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* 1. CINEMATIC FUTURISTIC CITY SKYLINE & ROOFTOP BACKGROUND */}
      <CityBackground mouseX={mouseOffset.x} mouseY={mouseOffset.y} />

      {/* 2. TOP CATEGORY FILTERS PILL BAR */}
      <GalleryFilters
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 3. MAIN SPIDER-WEB & ORGANIC PHOTO NETWORK CONTAINER */}
      <div
        className="relative z-10 w-full min-h-[72vh] flex items-center justify-center pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${dragOffset.x + mouseOffset.x * 12}px, ${
            dragOffset.y + mouseOffset.y * 12
          }px, 0)`,
        }}
      >
        {/* SVG Spider-Web Network */}
        <WebNetwork
          items={galleryData}
          selectedIndex={selectedIndex}
          hoveredIndex={hoveredIndex}
          centerPos={{ x: 500, y: 500 }}
        />

        {/* Central Web Hub Emblem */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none">
          <div className="w-7 h-7 mx-auto mb-0.5 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red-500 filter drop-shadow">
              <ellipse cx="12" cy="13.5" rx="3" ry="4" fill="#040814" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="7" r="2.2" fill="#040814" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="12" cy="13.5" r="1.2" fill="#ef4444" className="animate-pulse" />
            </svg>
          </div>
          <div className="text-[9px] font-mono font-black tracking-widest text-white uppercase drop-shadow">
            WEB OF MEMORIES
          </div>
          <div className="text-[8px] font-mono text-red-500 font-bold tracking-widest uppercase">
            SHIVATECH
          </div>
        </div>

        {/* Floating Photo Nodes */}
        {galleryData.map((item, idx) => {
          const isFilteredOut =
            activeCategory !== "ALL" && item.category !== activeCategory;

          return (
            <GalleryNode
              key={item.id}
              item={item}
              index={idx}
              x={item.x}
              y={item.y}
              isSelected={idx === selectedIndex}
              isHovered={idx === hoveredIndex}
              isFilteredOut={isFilteredOut}
              onClick={() => setSelectedIndex(idx)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          );
        })}
      </div>

      {/* 4. FLOATING CINEMATIC GLASS DETAILS PANEL */}
      <GalleryDetailsPanel
        item={selectedItem}
        onPrev={handlePrev}
        onNext={handleNext}
        onClose={() => setSelectedIndex(0)}
      />

      {/* 5. TOP-LEFT TITLE, BOTTOM COUNTER, SCROLL & NAV HUD */}
      <GalleryHUD
        currentIndex={selectedIndex}
        totalCount={galleryData.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </main>
  );
}
