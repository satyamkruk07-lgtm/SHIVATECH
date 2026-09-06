"use client";

import React from "react";
import { GalleryItem } from "@/data/gallery";

interface WebNetworkProps {
  items: GalleryItem[];
  selectedIndex: number;
  hoveredIndex: number | null;
  centerPos: { x: number; y: number };
}

export default function WebNetwork({
  items,
  selectedIndex,
  hoveredIndex,
  centerPos,
}: WebNetworkProps) {
  const cx = centerPos.x;
  const cy = centerPos.y;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible filter drop-shadow-[0_0_15px_rgba(56,189,248,0.25)]"
      viewBox="0 0 1000 1000"
      fill="none"
    >
      <defs>
        <radialGradient id="webCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#040814" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Ambient Glow */}
      <circle cx={cx} cy={cy} r="380" fill="url(#webCenterGlow)" />

      {/* Concentric Spider Web Rings */}
      {[70, 150, 230, 310, 390].map((r, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          stroke={i % 2 === 0 ? "#38bdf8" : "#ef4444"}
          strokeOpacity={i % 2 === 0 ? 0.22 : 0.15}
          strokeWidth="1"
          strokeDasharray={i % 2 === 0 ? "6 4" : "12 6"}
        />
      ))}

      {/* Crosshair Sector Lines */}
      <line x1={cx - 450} y1={cy} x2={cx + 450} y2={cy} stroke="#38bdf8" strokeOpacity="0.15" strokeWidth="1" />
      <line x1={cx} y1={cy - 450} x2={cx} y2={cy + 450} stroke="#38bdf8" strokeOpacity="0.15" strokeWidth="1" />

      {/* Radial Web Strands Connecting Central Hub to Photo Nodes */}
      {items.map((item, idx) => {
        const nx = cx + item.x;
        const ny = cy + item.y;

        const isSelected = idx === selectedIndex;
        const isHovered = idx === hoveredIndex;

        return (
          <g key={item.id}>
            {/* Base Web Line */}
            <line
              x1={cx}
              y1={cy}
              x2={nx}
              y2={ny}
              stroke={isSelected ? "#ef4444" : isHovered ? "#38bdf8" : "rgba(56, 189, 248, 0.25)"}
              strokeOpacity={isSelected ? 0.9 : isHovered ? 0.7 : 0.25}
              strokeWidth={isSelected ? 2 : isHovered ? 1.5 : 1}
              strokeDasharray={isSelected ? "none" : "8 4"}
            />

            {/* Glowing Accent Strand on Selected/Hovered Node */}
            {(isSelected || isHovered) && (
              <line
                x1={cx}
                y1={cy}
                x2={nx}
                y2={ny}
                stroke={isSelected ? "#ef4444" : "#38bdf8"}
                strokeWidth="3"
                strokeOpacity="0.6"
                className="animate-pulse filter drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              />
            )}
          </g>
        );
      })}

      {/* Central Web Hub Ring */}
      <circle cx={cx} cy={cy} r="45" fill="#040814" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx={cx} cy={cy} r="35" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
    </svg>
  );
}
