"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EventItem } from "@/data/events";

interface EventLandingCardProps {
  event: EventItem;
  index: number;
}

export const EventLandingCard: React.FC<EventLandingCardProps> = ({ event, index }) => {
  const isCrimson = event.accentColor === "crimson";
  const isBlue = event.accentColor === "blue";
  const isEmerald = event.accentColor === "emerald";

  const borderColor = isCrimson
    ? "border-red-500/25 hover:border-red-500/60"
    : isBlue
    ? "border-sky-500/25 hover:border-sky-500/60"
    : isEmerald
    ? "border-emerald-500/25 hover:border-emerald-500/60"
    : "border-purple-500/25 hover:border-purple-500/60";

  const badgeColor = isCrimson
    ? "text-red-400 border-red-500/30 bg-red-500/10"
    : isBlue
    ? "text-sky-400 border-sky-500/30 bg-sky-500/10"
    : isEmerald
    ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
    : "text-purple-400 border-purple-500/30 bg-purple-500/10";

  const glowShadow = isCrimson
    ? "shadow-[0_0_30px_rgba(239,68,68,0.06)] hover:shadow-[0_0_40px_rgba(239,68,68,0.18)]"
    : isBlue
    ? "shadow-[0_0_30px_rgba(56,189,248,0.06)] hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]"
    : isEmerald
    ? "shadow-[0_0_30px_rgba(16,185,129,0.06)] hover:shadow-[0_0_40px_rgba(16,185,129,0.18)]"
    : "shadow-[0_0_30px_rgba(168,85,247,0.06)] hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]";

  const detailUrl = `/events/${event.slug}`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div
        className={`relative rounded-2xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-white/[0.03] via-[#050814] to-[#02040a] border ${borderColor} ${glowShadow} transition-all duration-300 overflow-hidden font-mono group`}
      >
        {/* Fine Technical Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Block: Number, Category, Name, Date, Description */}
          <div className="flex-1 max-w-3xl">
            {/* Top Micro Header */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span
                className={`text-xs font-black tracking-[0.25em] uppercase px-3 py-1 rounded border ${badgeColor}`}
              >
                EVENT {event.number} // {event.category}
              </span>

              {event.badge && (
                <span className="text-[10px] font-bold tracking-wider text-slate-400 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 uppercase">
                  ★ {event.badge}
                </span>
              )}
            </div>

            {/* Event Name */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
              {event.name}
            </h3>

            {/* Date & Venue Pill */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold text-slate-300 mb-5">
              <span className="flex items-center space-x-1.5 text-red-400 uppercase tracking-wider">
                <svg
                  className="w-4 h-4 text-red-500 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{event.date}</span>
              </span>

              <span className="text-white/20 hidden sm:inline">•</span>

              <span className="text-slate-400 font-normal">
                📍 {event.venue}
              </span>
            </div>

            {/* Short Source-Based Description */}
            <p className="text-sm sm:text-base text-slate-300 font-sans font-normal leading-relaxed max-w-2xl">
              {event.description}
            </p>
          </div>

          {/* Right Block: Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 shrink-0 lg:w-56">
            {/* VIEW DETAILS BUTTON -> Opens Dedicated Page */}
            <Link
              href={detailUrl}
              className={`py-3.5 px-6 rounded-xl font-bold tracking-wider text-xs uppercase text-center transition-all duration-300 flex items-center justify-center space-x-2 text-white shadow-lg ${
                isCrimson
                  ? "bg-gradient-to-r from-red-600 to-red-500 hover:brightness-110 shadow-red-600/25"
                  : isBlue
                  ? "bg-gradient-to-r from-sky-600 to-blue-600 hover:brightness-110 shadow-sky-600/25"
                  : isEmerald
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 shadow-emerald-600/25"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 shadow-purple-600/25"
              }`}
            >
              <span>VIEW DETAILS</span>
              <span className="text-sm leading-none">→</span>
            </Link>

            {/* REGISTER BUTTON -> Opens Register Page or External Form */}
            {event.registerUrl.startsWith("http") ? (
              <a
                href={event.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl font-semibold tracking-wider text-xs uppercase text-center border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 text-white transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>REGISTER</span>
                <span className="text-xs opacity-60">↗</span>
              </a>
            ) : (
              <Link
                href={event.registerUrl}
                className="py-3.5 px-6 rounded-xl font-semibold tracking-wider text-xs uppercase text-center border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 text-white transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>REGISTER</span>
                <span className="text-xs opacity-60">↗</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EventLandingCard;
