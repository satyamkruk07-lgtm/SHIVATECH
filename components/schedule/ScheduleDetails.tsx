"use client";

import React from "react";
import Link from "next/link";
import { ScheduleItem } from "@/data/schedule";

interface ScheduleDetailsProps {
  item: ScheduleItem | null;
  onClose?: () => void;
}

export default function ScheduleDetails({ item, onClose }: ScheduleDetailsProps) {
  const [isMobileExpanded, setIsMobileExpanded] = React.useState<boolean>(false);

  // Auto-collapse when user switches to another item
  React.useEffect(() => {
    setIsMobileExpanded(false);
  }, [item?.id]);

  if (!item) return null;

  return (
    <>
      {/* ========================================================================= */}
      {/* MOBILE BOTTOM SHEET (< sm): MINIMIZED BY DEFAULT TO LEAVE HOLOGRAM VISIBLE */}
      {/* ========================================================================= */}
      <div className="sm:hidden fixed bottom-2 left-2.5 right-2.5 z-30 pointer-events-auto select-none transition-all duration-300">
        {!isMobileExpanded ? (
          /* COMPACT MINIMIZED BAR (~75px) - 100% HOLOGRAM VISIBILITY */
          <div className="relative p-2.5 rounded-xl bg-[#040814]/95 border border-sky-500/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.9),0_0_20px_rgba(56,189,248,0.2)]">
            <button
              onClick={() => setIsMobileExpanded(true)}
              className="w-full flex items-center justify-center space-x-1.5 text-[9px] font-mono font-bold text-sky-400/90 tracking-widest pb-1 uppercase hover:text-white"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>TAP FOR FULL DETAILS ▲</span>
            </button>

            <div className="flex items-center justify-between pt-0.5">
              <div className="flex flex-col min-w-0 pr-2">
                <div className="flex items-center space-x-1.5 text-[9px] font-mono">
                  <span className="text-red-400 font-bold uppercase tracking-wider truncate">
                    {item.category}
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="text-slate-300 truncate">
                    {item.date || item.duration}
                  </span>
                </div>
                <h4 className="text-xs font-black font-mono tracking-wider text-white uppercase truncate mt-0.5">
                  {item.title}
                </h4>
              </div>

              <div className="flex items-center space-x-1.5 shrink-0 font-mono">
                <button
                  onClick={() => setIsMobileExpanded(true)}
                  className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] font-bold"
                >
                  INFO ▲
                </button>
                <Link
                  href="/register"
                  className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white text-[10px] font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(239,68,68,0.5)]"
                >
                  REGISTER &gt;
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* EXPANDED MOBILE DRAWER WITH ABOUT, VENUE & FULL ACTION BUTTONS */
          <div className="relative p-4 rounded-2xl bg-[#040814]/98 border border-sky-500/50 backdrop-blur-3xl shadow-[0_12px_40px_rgba(0,0,0,0.95),0_0_25px_rgba(56,189,248,0.25)] max-h-[70vh] overflow-y-auto">
            {/* Top Close / Minimize Bar */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/15">
              <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest">
                EVENT DETAILS
              </span>
              <button
                onClick={() => setIsMobileExpanded(false)}
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] font-mono font-bold flex items-center space-x-1"
              >
                <span>MINIMIZE</span>
                <span>▼</span>
              </button>
            </div>

            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-sky-400 uppercase">
                  {item.category}
                </span>
                <h3 className="text-lg font-black font-mono tracking-wider text-white uppercase leading-tight mt-0.5">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Event Time & Venue Info */}
            <div className="space-y-1.5 mb-3 text-xs font-mono">
              {item.date && (
                <div className="flex items-center space-x-2 text-slate-300">
                  <span className="text-red-400">📅</span>
                  <span className="font-semibold uppercase tracking-wider">{item.date}</span>
                </div>
              )}
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="text-sky-400">🕒</span>
                <span className="font-semibold">{item.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="text-red-400">📍</span>
                <span className="font-semibold uppercase tracking-wider">{item.venue}</span>
              </div>
            </div>

            {/* About Summary */}
            <div className="mb-4">
              <div className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1">
                ABOUT
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Link
                href="/events"
                className="w-full py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center space-x-2 text-xs font-mono font-bold tracking-wider text-slate-200"
              >
                <span>VIEW EVENT</span>
                <span className="text-sky-400">👁</span>
              </Link>
              <Link
                href="/register"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center space-x-2 text-xs font-mono font-bold tracking-wider text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]"
              >
                <span>REGISTER NOW</span>
                <span>›</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP FLOATING GLASS PANEL (>= sm)                                      */}
      {/* ========================================================================= */}
      <div className="hidden sm:block absolute top-20 right-6 lg:right-8 z-30 w-full max-w-[310px] pointer-events-auto select-none transition-all duration-500 ease-out animate-fadeIn">
        <div className="relative p-4 rounded-2xl bg-[#040814]/90 border border-sky-500/30 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(56,189,248,0.2)]">
          {/* Sci-Fi Angular Tech Accents */}
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-sky-400" />

          {/* Header Row: Category & Title */}
          <div className="flex items-start justify-between mb-2 border-b border-white/10 pb-2">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-sky-400 uppercase">
                {item.category}
              </span>
              <h3 className="text-xl font-black font-mono tracking-wider text-white uppercase drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] leading-tight mt-0.5">
                {item.title}
              </h3>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 transition-colors"
                aria-label="Close detail panel"
              >
                ✕
              </button>
            )}
          </div>

          {/* Event Time & Venue Info */}
          <div className="space-y-2 mb-4 text-xs font-mono">
            {/* Date */}
            {item.date && (
              <div className="flex items-center space-x-2.5 text-slate-300">
                <div className="w-5 h-5 rounded bg-blue-950/60 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <span className="font-semibold uppercase tracking-wider">{item.date}</span>
              </div>
            )}

            {/* Time Range */}
            <div className="flex items-center space-x-2.5 text-slate-300">
              <div className="w-5 h-5 rounded bg-sky-950/60 border border-sky-500/40 flex items-center justify-center text-sky-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="font-semibold">{item.duration}</span>
            </div>

            {/* Location / Venue */}
            <div className="flex items-center space-x-2.5 text-slate-300">
              <div className="w-5 h-5 rounded bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="font-semibold uppercase tracking-wider">{item.venue}</span>
            </div>
          </div>

          {/* About Summary */}
          <div className="mb-5">
            <div className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1">
              ABOUT
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5">
            {/* View Event Button */}
            <Link
              href="/events"
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-sky-400/60 flex items-center justify-center space-x-2 text-xs font-mono font-bold tracking-wider text-slate-200 hover:text-white transition-all shadow-md group"
            >
              <span>VIEW EVENT</span>
              <span className="text-sky-400 group-hover:scale-110 transition-transform">👁</span>
            </Link>

            {/* Register Button */}
            <Link
              href="/register"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-500 hover:to-red-600 border border-red-400/50 flex items-center justify-center space-x-2 text-xs font-mono font-bold tracking-wider text-white transition-all shadow-[0_0_20px_rgba(239,68,68,0.5)] group"
            >
              <span>REGISTER NOW</span>
              <span className="group-hover:translate-x-1 transition-transform">›</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
