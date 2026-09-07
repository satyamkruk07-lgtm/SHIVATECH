"use client";

import React from "react";
import { ScheduleItem } from "@/data/schedule";

interface ScheduleNodeProps {
  item: ScheduleItem;
  index: number;
  totalNodes: number;
  x: number;
  y: number;
  angleDeg: number;
  isSelected: boolean;
  isHovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function ScheduleNode({
  item,
  x,
  y,
  angleDeg,
  isSelected,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ScheduleNodeProps) {
  // Normalize angle to [-180, 180]
  const normAngle = ((angleDeg % 360) + 540) % 360 - 180;

  // STRICT OUTWARD (AWAY FROM CENTER) SECTOR PLACEMENT
  // Angle 0: Right (x > 0, y = 0)
  // Angle 90: Bottom (x = 0, y > 0)
  // Angle -90: Top (x = 0, y < 0)
  // Angle 180/-180: Left (x < 0, y = 0)
  const isTopSector = normAngle >= -135 && normAngle <= -45;
  const isBottomSector = normAngle >= 45 && normAngle <= 135;
  const isRightSector = normAngle > -45 && normAngle < 45;

  const getLabelClass = () => {
    // 1. Top Sector (y < 0): Position ABOVE the node (towards -y, away from center)
    if (isTopSector) {
      return "bottom-full mb-2.5 left-1/2 -translate-x-1/2 text-center items-center flex flex-col";
    }
    // 2. Bottom Sector (y > 0): Position BELOW the node (towards +y, away from center)
    if (isBottomSector) {
      return "top-full mt-2.5 left-1/2 -translate-x-1/2 text-center items-center flex flex-col";
    }
    // 3. Right Sector (x > 0): Position to the RIGHT of the node (towards +x, away from center)
    if (isRightSector) {
      return "left-full ml-3 top-1/2 -translate-y-1/2 text-left items-start flex flex-col";
    }
    // 4. Left Sector (x < 0): Position to the LEFT of the node (towards -x, away from center)
    return "right-full mr-3 top-1/2 -translate-y-1/2 text-right items-end flex flex-col";
  };

  // Render Icon
  const renderIcon = () => {
    switch (item.icon) {
      case "badge":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zM9 7a3 3 0 0 1 6 0v3H9V7z" />
          </svg>
        );
      case "mic":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        );
      case "trophy":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
          </svg>
        );
      case "food":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 2v20M21 2v6a3 3 0 0 1-3 3M3 2v7a4 4 0 0 0 4 4v9M11 2v20" />
          </svg>
        );
      case "bulb":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18h6M10 22h4M15.09 14A6 6 0 0 0 18 9a6 6 0 0 0-12 0 6 6 0 0 0 2.91 5" />
          </svg>
        );
      case "talk":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        );
      case "gear":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      case "medal":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="7" />
            <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
          </svg>
        );
      case "code":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case "science":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 2v7.31L4.75 20.5a2 2 0 0 0 1.7 3h11.1a2 2 0 0 0 1.7-3L14 9.31V2" />
            <line x1="8.5" y1="2" x2="15.5" y2="2" />
            <line x1="7.5" y1="15" x2="16.5" y2="15" />
          </svg>
        );
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="8" />
          </svg>
        );
    }
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer group select-none transition-all duration-300"
      style={{
        transform: `translate3d(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px), 0) scale(${
          isSelected ? 1.15 : isHovered ? 1.08 : 1
        })`,
        zIndex: isSelected ? 35 : isHovered ? 25 : 10,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`Select ${item.title} at ${item.time}`}
    >
      {/* Node Circle */}
      <div className="relative flex items-center justify-center">
        <div
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isSelected
              ? "bg-[#060c1d]/95 border-red-500 text-red-400 shadow-[0_0_22px_rgba(239,68,68,0.8),0_0_12px_rgba(56,189,248,0.6)]"
              : isHovered
              ? "bg-[#060c1d]/90 border-sky-400 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
              : item.featured
              ? "bg-[#060c1d]/80 border-red-500/60 text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.3)]"
              : "bg-[#040814]/80 border-sky-500/40 text-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.2)]"
          }`}
        >
          <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
            {renderIcon()}
          </div>
        </div>

        {/* Pulse Dot on Selected Node */}
        {isSelected && (
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-[#040814] animate-ping" />
        )}

        {/* Text Label Floating OUTWARD away from center */}
        <div
          className={`absolute whitespace-nowrap transition-all duration-300 pointer-events-none z-20 ${getLabelClass()}`}
        >
          {/* Time Tag */}
          <div
            className={`text-[9px] sm:text-[11px] font-mono font-bold tracking-wider transition-colors ${
              isSelected
                ? "text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)] px-1.5 py-0.5 rounded bg-red-950/40 border border-red-500/30"
                : "text-sky-400/90"
            }`}
          >
            {item.time}
          </div>

          {/* Title: On mobile, visible when isSelected or isHovered; On desktop (sm:), always visible */}
          <div
            className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-wide font-mono transition-colors mt-0.5 ${
              !isSelected && !isHovered ? "hidden sm:block" : "block"
            } ${
              isSelected
                ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] px-2 py-0.5 rounded-md bg-[#040814]/90 border border-red-500/40"
                : isHovered
                ? "text-slate-100"
                : "text-slate-300"
            }`}
          >
            {item.title}
          </div>

          {/* Subtitle: Desktop Only */}
          <div className="hidden sm:block text-[9px] sm:text-[10px] text-slate-400 max-w-[130px] truncate leading-tight mt-0.5">
            {item.subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
