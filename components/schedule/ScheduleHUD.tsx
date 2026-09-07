"use client";

import React from "react";
import { scheduleData } from "@/data/schedule";

interface ScheduleHUDProps {
  activeDay: number;
  onSelectDay: (day: number) => void;
}

export default function ScheduleHUD({ activeDay, onSelectDay }: ScheduleHUDProps) {
  return (
    <div className="w-full max-w-2xl text-center pointer-events-auto select-none px-2 sm:px-4 pt-14 sm:pt-16 pb-0 z-20">
      {/* Subtitle Accent Badge */}
      <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
        <span className="text-[10px] font-mono font-bold tracking-widest text-red-500 uppercase">
          SHIVATECH 2026 • 5-DAY FESTIVAL
        </span>
      </div>

      {/* Main Display Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase font-mono drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-none mb-0.5">
        SCHEDULE
      </h1>

      {/* Tagline */}
      <p className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-slate-300 uppercase mb-2 drop-shadow">
        PLAN. PREPARE. PERFORM.
      </p>

      {/* 5-DAY SELECTOR PILL TOGGLE */}
      <div className="inline-flex items-center p-0.5 sm:p-1 rounded-full bg-[#040814]/90 border border-white/15 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.85)] max-w-full overflow-x-auto no-scrollbar gap-0.5 sm:gap-1">
        {scheduleData.map((d) => {
          const isActive = activeDay === d.dayNumber;
          return (
            <button
              key={d.dayNumber}
              onClick={() => onSelectDay(d.dayNumber)}
              className={`relative px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-400/50"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="sm:hidden">{d.shortPillLabel}</span>
              <span className="hidden sm:inline">{d.pillLabel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
