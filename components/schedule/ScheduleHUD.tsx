"use client";

import React from "react";

interface ScheduleHUDProps {
  activeDay: number;
  onSelectDay: (day: number) => void;
}

export default function ScheduleHUD({ activeDay, onSelectDay }: ScheduleHUDProps) {
  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 w-full max-w-xl text-center pointer-events-auto select-none px-4">
      {/* Subtitle Accent Badge */}
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2">
        <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
        <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
          SHIVATECH 2026
        </span>
      </div>

      {/* Main Display Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-mono drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] leading-none mb-1">
        SCHEDULE
      </h1>

      {/* Tagline */}
      <p className="text-xs sm:text-sm font-mono font-semibold tracking-widest text-slate-300 uppercase mb-4 drop-shadow">
        PLAN. PREPARE. PERFORM.
      </p>

      {/* DAY SELECTOR PILL TOGGLE */}
      <div className="inline-flex items-center p-1 rounded-full bg-[#040814]/80 border border-white/15 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
        <button
          onClick={() => onSelectDay(1)}
          className={`relative px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
            activeDay === 1
              ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-400/50"
              : "text-slate-400 hover:text-white"
          }`}
        >
          DAY 01 (OCT 24)
        </button>

        <button
          onClick={() => onSelectDay(2)}
          className={`relative px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
            activeDay === 2
              ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-400/50"
              : "text-slate-400 hover:text-white"
          }`}
        >
          DAY 02 (OCT 25)
        </button>
      </div>
    </div>
  );
}
