"use client";

import React from "react";
import Link from "next/link";
import { ScheduleItem } from "@/data/schedule";

interface ScheduleDetailsProps {
  item: ScheduleItem | null;
  onClose?: () => void;
}

export default function ScheduleDetails({ item, onClose }: ScheduleDetailsProps) {
  if (!item) return null;

  return (
    <div className="absolute top-28 right-4 sm:right-8 lg:right-12 z-30 w-full max-w-[320px] sm:max-w-[350px] pointer-events-auto select-none transition-all duration-500 ease-out animate-fadeIn">
      <div className="relative p-5 rounded-2xl bg-[#040814]/80 border border-sky-500/30 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(56,189,248,0.2)]">
        {/* Sci-Fi Angular Tech Accents */}
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-sky-400" />

        {/* Header Row: Category & Title */}
        <div className="flex items-start justify-between mb-3 border-b border-white/10 pb-3">
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
  );
}
