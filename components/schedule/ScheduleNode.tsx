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
  // Determine if label should be placed left or right of node depending on angle
  // Normalized angle in range [-180, 180]
  const normAngle = ((angleDeg % 360) + 540) % 360 - 180;
  const isRightSide = normAngle >= -90 && normAngle <= 90;

  // Render Category/Type Icon
  const renderIcon = () => {
    switch (item.icon) {
      case "badge":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zM9 7a3 3 0 0 1 6 0v3H9V7z" />
          </svg>
        );
      case "mic":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        );
      case "trophy":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 2v20M21 2v6a3 3 0 0 1-3 3M3 2v7a4 4 0 0 0 4 4v9M11 2v20" />
          </svg>
        );
      case "bulb":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18h6M10 22h4M15.09 14A6 6 0 0 0 18 9a6 6 0 0 0-12 0 6 6 0 0 0 2.91 5" />
          </svg>
        );
      case "talk":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        );
      case "gear":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      case "medal":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="7" />
            <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
          </svg>
        );
      case "code":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case "science":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 2v7.31L4.75 20.5a2 2 0 0 0 1.7 3h11.1a2 2 0 0 0 1.7-3L14 9.31V2" />
            <line x1="8.5" y1="2" x2="15.5" y2="2" />
            <line x1="7.5" y1="15" x2="16.5" y2="15" />
          </svg>
        );
      default:
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="8" />
          </svg>
        );
    }
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer group select-none transition-all duration-300"
      style={{
        transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) scale(${
          isSelected ? 1.15 : isHovered ? 1.08 : 1
        })`,
        zIndex: isSelected ? 30 : isHovered ? 25 : 10,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`Select ${item.title} at ${item.time}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Node Graphic Container */}
      <div className="relative flex items-center justify-center">
        {/* Hexagonal / Circular Outer Ring Accent */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isSelected
              ? "bg-[#060c1d]/95 border-red-500 text-red-400 shadow-[0_0_25px_rgba(239,68,68,0.7),0_0_12px_rgba(56,189,248,0.5)]"
              : isHovered
              ? "bg-[#060c1d]/90 border-sky-400 text-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.5)]"
              : item.featured
              ? "bg-[#060c1d]/80 border-red-500/60 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.3)]"
              : "bg-[#040814]/80 border-sky-500/40 text-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.2)]"
          }`}
        >
          {/* Hexagonal Inner Tech Border Overlay */}
          <svg className="absolute inset-0 w-full h-full p-1" viewBox="0 0 40 40" fill="none">
            <polygon
              points="20,2 35,10 35,30 20,38 5,30 5,10"
              stroke={isSelected ? "#ef4444" : isHovered ? "#38bdf8" : "rgba(255,255,255,0.15)"}
              strokeWidth="1.2"
              fill="none"
              strokeDasharray={isSelected ? "none" : "4 2"}
            />
          </svg>

          {/* Node Icon */}
          <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
            {renderIcon()}
          </div>
        </div>

        {/* Small Active Core Pulse Dot */}
        {isSelected && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-[#040814] animate-ping" />
        )}

        {/* Text Label Floating to Left or Right of Node */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 pointer-events-none ${
            isRightSide ? "left-14 text-left" : "right-14 text-right"
          }`}
        >
          {/* Time Badge */}
          <div
            className={`text-xs font-mono font-bold tracking-wider mb-0.5 transition-colors ${
              isSelected ? "text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" : "text-sky-400"
            }`}
          >
            {item.time}
          </div>

          {/* Event Title */}
          <div
            className={`text-sm font-extrabold uppercase tracking-wide font-mono transition-colors ${
              isSelected
                ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                : isHovered
                ? "text-slate-100"
                : "text-slate-300"
            }`}
          >
            {item.title}
          </div>

          {/* Subtitle / Short Description */}
          <div className="text-[11px] text-slate-400 max-w-[150px] sm:max-w-[180px] truncate leading-tight">
            {item.subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
