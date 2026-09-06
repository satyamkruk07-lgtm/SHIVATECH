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
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible filter drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]"
      viewBox="0 0 1000 1000"
      fill="none"
    >
      <defs>
        <radialGradient id="webCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#040814" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Ambient Glow */}
      <circle cx={cx} cy={cy} r="420" fill="url(#webCenterGlow)" />

      {/* Organic Spider Web Rings */}
      {[80, 160, 240, 320, 400, 480].map((r, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          stroke={i % 2 === 0 ? "#38bdf8" : "#ef4444"}
          strokeOpacity={i % 2 === 0 ? 0.25 : 0.18}
          strokeWidth="1"
          strokeDasharray={i % 2 === 0 ? "8 4" : "16 8"}
        />
      ))}

      {/* Crosshair Sector Guidelines */}
      <line x1={cx - 480} y1={cy} x2={cx + 480} y2={cy} stroke="#38bdf8" strokeOpacity="0.18" strokeWidth="1" />
      <line x1={cx} y1={cy - 480} x2={cx} y2={cy + 480} stroke="#38bdf8" strokeOpacity="0.18" strokeWidth="1" />

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
              stroke={isSelected ? "#ef4444" : isHovered ? "#38bdf8" : "rgba(56, 189, 248, 0.3)"}
              strokeOpacity={isSelected ? 0.95 : isHovered ? 0.75 : 0.3}
              strokeWidth={isSelected ? 2.5 : isHovered ? 1.8 : 1}
              strokeDasharray={isSelected ? "none" : "8 4"}
            />

            {/* Glowing Pulse Strand on Selected/Hovered Node */}
            {(isSelected || isHovered) && (
              <line
                x1={cx}
                y1={cy}
                x2={nx}
                y2={ny}
                stroke={isSelected ? "#ef4444" : "#38bdf8"}
                strokeWidth="3.5"
                strokeOpacity="0.7"
                className="animate-pulse filter drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]"
              />
            )}
          </g>
        );
      })}

      {/* Central Web Hub Ring */}
      <circle cx={cx} cy={cy} r="48" fill="#040814" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.7" />
      <circle cx={cx} cy={cy} r="38" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
    </svg>
  );
}
