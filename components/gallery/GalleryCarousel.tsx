"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { GalleryItem } from "@/data/gallery";
import GalleryCard from "./GalleryCard";
import GalleryWeb from "./GalleryWeb";
import GalleryControls from "./GalleryControls";

interface GalleryCarouselProps {
  items: GalleryItem[];
  onOpenPhotoModal: (item: GalleryItem) => void;
}

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({
  items,
  onOpenPhotoModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const dragStartXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const total = items.length;

  const handleNext = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Reset index ONLY when the filtered items list actually changes (e.g. category changed)
  const itemsSignature = items.map((it) => it.id).join(",");
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsSignature]);

  // Autoplay timer (exact 3.0s interval)
  useEffect(() => {
    if (!isAutoPlaying || isHovered || total <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, total, handleNext]);

  // Touch & Mouse Swipe Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    // Prevent swipe drag if user clicked on button or controls
    if ((e.target as HTMLElement).closest("button")) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const diffX = e.clientX - dragStartXRef.current;
    if (diffX > 50) {
      handlePrev();
    } else if (diffX < -50) {
      handleNext();
    }
  };

  if (total === 0) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center font-mono text-slate-400">
        NO MEMORIES FOUND IN THIS CATEGORY
      </div>
    );
  }

  // Symmetrical slot position calculator
  const getSlotPosition = (
    index: number
  ): "far-left" | "left" | "center" | "right" | "far-right" | "hidden" => {
    const diff = (index - currentIndex + total) % total;
    const normalizedDiff = diff > Math.floor(total / 2) ? diff - total : diff;

    if (normalizedDiff === 0) return "center";
    if (normalizedDiff === -1) return "left";
    if (normalizedDiff === 1) return "right";
    if (normalizedDiff === -2) return "far-left";
    if (normalizedDiff === 2) return "far-right";
    return "hidden";
  };

  return (
    <div
      className="relative w-full h-[65vh] max-h-[620px] min-h-[480px] flex items-center justify-center overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {/* Spider-Web Network Background Behind Cards */}
      <GalleryWeb activeCenterId={items[currentIndex]?.id || ""} />

      {/* Cards Stack Container */}
      <div className="relative w-full max-w-6xl h-full flex items-center justify-center z-10">
        {items.map((item, idx) => {
          const slot = getSlotPosition(idx);
          if (slot === "hidden") return null;

          return (
            <GalleryCard
              key={item.id}
              item={item}
              position={slot}
              isCenter={idx === currentIndex}
              onClick={() => setCurrentIndex(idx)}
              onOpenPhotoModal={onOpenPhotoModal}
            />
          );
        })}
      </div>

      {/* Bottom Controls Bar */}
      <GalleryControls
        onPrev={handlePrev}
        onNext={handleNext}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={() => setIsAutoPlaying((prev) => !prev)}
      />
    </div>
  );
};

export default GalleryCarousel;
