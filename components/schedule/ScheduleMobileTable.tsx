"use client";

import React from "react";
import Link from "next/link";
import { ScheduleItem, DaySchedule } from "@/data/schedule";

interface ScheduleMobileTableProps {
  items: ScheduleItem[];
  daySchedule: DaySchedule;
}

export default function ScheduleMobileTable({
  items,
  daySchedule,
}: ScheduleMobileTableProps) {
  // Category Color Map
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "HACKATHON":
        return "bg-red-500/15 border-red-500/50 text-red-400";
      case "CEREMONY":
      case "AWARDS":
        return "bg-amber-500/15 border-amber-500/50 text-amber-400";
      case "WORKSHOP":
        return "bg-cyan-500/15 border-cyan-500/50 text-cyan-400";
      case "TALK":
        return "bg-purple-500/15 border-purple-500/50 text-purple-400";
      case "COMPETITION":
        return "bg-emerald-500/15 border-emerald-500/50 text-emerald-400";
      default:
        return "bg-sky-500/15 border-sky-500/40 text-sky-300";
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-3 select-none">
      {/* 1. Day Summary Banner */}
      <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#040814]/85 border border-white/10 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-mono font-black text-white uppercase tracking-wider">
            {daySchedule.dayLabel}
          </span>
          <span className="text-white/30">•</span>
          <span className="text-[11px] font-mono text-slate-300 tracking-wider">
            {daySchedule.dateStr}
          </span>
        </div>
        <div className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest px-2 py-0.5 rounded-full bg-sky-950/60 border border-sky-500/30">
          {items.length} SESSIONS
        </div>
      </div>

      {/* 2. Cyberpunk Schedule Table */}
      <div className="relative rounded-2xl bg-[#040814]/95 border border-sky-500/30 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(56,189,248,0.15)] overflow-hidden">
        {/* Cyber Corner Notches */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500 z-10" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-400 z-10" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-400 z-10" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500 z-10" />

        {/* Top Accent Gradient */}
        <div className="h-[2px] w-full bg-gradient-to-r from-red-500 via-sky-400 to-red-500" />

        {/* Table Structure */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left font-mono">
            {/* Table Header */}
            <thead className="bg-[#060c1d] border-b border-white/10 text-[10px] uppercase tracking-widest text-sky-400">
              <tr>
                <th className="py-2.5 px-3.5 w-[38%]">TIME & CATEGORY</th>
                <th className="py-2.5 px-3.5">EVENT & VENUE</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-white/10">
              {items.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`transition-colors duration-200 ${
                    idx % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                  } hover:bg-red-500/10`}
                >
                  {/* Column 1: Time & Category */}
                  <td className="py-3 px-3.5 align-top">
                    {/* Time */}
                    <div className="text-xs font-black text-red-400 tracking-wider">
                      {item.time}
                    </div>

                    {/* Duration */}
                    <div className="text-[9px] text-slate-400 tracking-tight mt-0.5">
                      {item.duration}
                    </div>

                    {/* Category Pill */}
                    <div className="mt-1.5">
                      <span
                        className={`inline-block text-[8px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded border ${getCategoryColor(
                          item.category
                        )}`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </td>

                  {/* Column 2: Event Details, Venue & Action */}
                  <td className="py-3 px-3.5 align-top">
                    {/* Title */}
                    <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white leading-tight">
                      {item.title}
                    </h4>

                    {/* Venue with Location Pin */}
                    <div className="flex items-center space-x-1 text-[10px] text-sky-400/90 font-semibold tracking-wide uppercase mt-1">
                      <span>📍</span>
                      <span className="truncate">{item.venue}</span>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] text-slate-300/85 font-sans leading-relaxed mt-1 line-clamp-2">
                      {item.description}
                    </p>

                    {/* View Event Action Link */}
                    <div className="mt-2 flex items-center justify-between">
                      <Link
                        href="/events"
                        className="inline-flex items-center space-x-1 text-[10px] font-bold text-sky-400 hover:text-white uppercase tracking-wider px-2 py-1 rounded bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-400/40 transition-colors"
                      >
                        <span>VIEW EVENT</span>
                        <span>›</span>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
