"use client";

import React from "react";
import { GalleryItem } from "@/data/gallery";

interface GalleryNodeProps {
  item: GalleryItem;
  index: number;
  x: number;
  y: number;
  isSelected: boolean;
  isHovered: boolean;
  isFilteredOut: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function GalleryNode({
  item,
  x,
  y,
  isSelected,
  isHovered,
  isFilteredOut,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: GalleryNodeProps) {
  // Crisp non-overlapping dimensions
  const getDimensions = () => {
    switch (item.size) {
      case "lg":
        return "w-48 h-32 sm:w-56 sm:h-36";
      case "sm":
        return "w-32 h-24 sm:w-38 sm:h-28";
      default:
        return "w-40 h-28 sm:w-48 sm:h-32";
    }
  };

  return (
    <div
      className={`absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer group select-none transition-all duration-500 ease-out ${
        isFilteredOut ? "opacity-15 grayscale pointer-events-none scale-90" : "opacity-100"
      }`}
      style={{
        transform: `translate3d(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px), 0) scale(${
          isSelected ? 1.1 : isHovered ? 1.05 : 1
        })`,
        zIndex: isSelected ? 35 : isHovered ? 30 : 20,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Photo Frame Container */}
      <div
        className={`relative ${getDimensions()} rounded-2xl overflow-hidden p-1 transition-all duration-300 ${
          isSelected
            ? "bg-[#060c1d]/95 border-2 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.7),0_0_12px_rgba(56,189,248,0.4)]"
            : isHovered
            ? "bg-[#060c1d]/90 border border-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.5)]"
            : item.featured
            ? "bg-[#040814]/85 border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)]"
            : "bg-[#040814]/80 border border-sky-500/30 shadow-[0_0_8px_rgba(56,189,248,0.2)]"
        }`}
      >
        {/* Sci-Fi Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-sky-400 z-10" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-500 z-10" />

        {/* Thumbnail Image */}
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/90 via-[#040814]/20 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-full bg-[#040814]/85 border border-white/10 backdrop-blur-md">
            <span className="text-[8px] font-mono font-bold tracking-wider text-sky-400 uppercase">
              {item.category}
            </span>
          </div>

          {/* Title & Date Overlay */}
          <div className="absolute bottom-1.5 left-1.5 right-1.5">
            <h4
              className={`text-[11px] font-mono font-extrabold uppercase tracking-wide truncate transition-colors ${
                isSelected ? "text-red-400 drop-shadow" : "text-white"
              }`}
            >
              {item.title}
            </h4>
            <p className="text-[8px] font-mono text-slate-300 truncate">
              {item.date}
            </p>
          </div>
        </div>

        {/* Active Ping Indicator */}
        {isSelected && (
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-[#040814] animate-ping" />
        )}
      </div>
    </div>
  );
}
