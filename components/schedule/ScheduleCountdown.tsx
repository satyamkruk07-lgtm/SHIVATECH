"use client";

import React, { useState, useEffect } from "react";

// Target date: October 07, 2026 09:00:00 AM IST
const TARGET_DATE = new Date("2026-10-07T09:00:00+05:30").getTime();

export default function ScheduleCountdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTwoDigits = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="absolute bottom-3 left-3 sm:left-6 z-30 pointer-events-auto select-none hidden md:block">
      <div className="relative w-52 sm:w-60 p-3 rounded-xl sm:rounded-2xl bg-[#040814]/85 border border-sky-500/30 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_20px_rgba(56,189,248,0.15)] flex flex-col items-center text-center">
        {/* Sci-Fi Corner Accents */}
        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-red-500" />
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-sky-400" />

        {/* Panel Header */}
        <div className="text-[10px] font-mono font-extrabold tracking-widest text-slate-300 uppercase mb-1 border-b border-white/10 pb-0.5 w-full text-center">
          STAY ON TRACK
        </div>

        {/* Holographic Circular Arc Dial */}
        <div className="relative w-28 h-28 flex flex-col items-center justify-center my-0.5">
          {/* SVG Animated Circular Gauge */}
          <svg className="absolute inset-0 w-full h-full p-1" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="#38bdf8" strokeOpacity="0.2" strokeWidth="2" />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#ef4444"
              strokeOpacity="0.8"
              strokeWidth="2.5"
              strokeDasharray="280"
              strokeDashoffset="70"
              strokeLinecap="round"
              className="transform -rotate-90 origin-center filter drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]"
            />
            <circle cx="50" cy="50" r="38" stroke="#38bdf8" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Subheader */}
          <div className="text-[8px] font-mono font-bold text-sky-400 uppercase tracking-wider mb-0.5">
            SHIVATECH 2026
          </div>
          <div className="text-[7px] font-mono text-slate-400 uppercase mb-0.5">STARTS IN</div>

          {/* Days Display */}
          <div className="text-2xl font-black font-mono text-red-500 tracking-tight leading-none drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">
            {timeLeft.days}
          </div>
          <div className="text-[8px] font-mono font-bold text-slate-300 uppercase tracking-widest mt-0.5">
            DAYS
          </div>
        </div>

        {/* Live Ticking Hours : Mins : Secs */}
        <div className="text-[10px] font-mono font-bold tracking-wider text-slate-200 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10 mt-0.5 shadow-inner">
          <span className="text-sky-400">{formatTwoDigits(timeLeft.hours)}</span>
          <span className="text-slate-400 px-0.5">H :</span>
          <span className="text-sky-400">{formatTwoDigits(timeLeft.minutes)}</span>
          <span className="text-slate-400 px-0.5">M :</span>
          <span className="text-red-400">{formatTwoDigits(timeLeft.seconds)}</span>
          <span className="text-slate-400 pl-0.5">S</span>
        </div>
      </div>
    </div>
  );
}
