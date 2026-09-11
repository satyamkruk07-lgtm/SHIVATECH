"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EventItem } from "@/data/events";

interface EventItemSectionProps {
  event: EventItem;
  onViewEvent: (event: EventItem) => void;
}

export const EventItemSection: React.FC<EventItemSectionProps> = ({
  event,
  onViewEvent,
}) => {
  // Alternating composition:
  // Event 01 (index 0) -> content right, graphic left (reversed on desktop)
  // Event 02 (index 1) -> content left, graphic right (normal order)
  // Event 03 (index 2) -> content right, graphic left (reversed on desktop)
  // Event 04 (index 3) -> content left, graphic right (normal order)
  const isContentRight = event.number === "01" || event.number === "03";
  const isFlagship = event.isFlagship;
  const isCrimson = event.accentColor === "crimson";
  const isBlue = event.accentColor === "blue";

  return (
    <section
      id={`event-${event.id}`}
      className={`relative w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 border-b border-white/[0.06] overflow-hidden ${
        isFlagship
          ? "bg-gradient-to-b from-[#02040a] via-[#080d20]/50 to-[#02040a]"
          : "bg-[#02040a]"
      }`}
    >
      {/* Subtle Background Glow per event */}
      {isFlagship ? (
        <>
          <div className="absolute top-1/3 left-1/4 w-[400px] sm:w-[600px] h-[300px] bg-red-600/[0.08] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] sm:w-[600px] h-[300px] bg-sky-500/[0.08] rounded-full blur-[140px] pointer-events-none" />
        </>
      ) : isCrimson ? (
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[300px] bg-red-600/[0.06] rounded-full blur-[130px] pointer-events-none" />
      ) : isBlue ? (
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[450px] h-[300px] bg-sky-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
      ) : (
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[300px] bg-purple-600/[0.06] rounded-full blur-[130px] pointer-events-none" />
      )}

      {/* Subtle Geometric Web Accent Line Decoration */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className={`flex flex-col ${
            isContentRight ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center justify-between gap-10 sm:gap-14 lg:gap-20`}
        >
          {/* 1. DECORATIVE GRAPHIC / OVERSIZED NUMBER COLUMN */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 flex flex-col items-center justify-center text-center relative"
          >
            {/* Cybernetic Container Box */}
            <div
              className={`relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/3] rounded-2xl border p-6 sm:p-8 flex flex-col items-center justify-center backdrop-blur-xl select-none ${
                isFlagship
                  ? "bg-gradient-to-br from-red-950/20 via-black/50 to-sky-950/20 border-sky-400/30 shadow-[0_0_50px_rgba(56,189,248,0.15),inset_0_0_30px_rgba(239,68,68,0.1)]"
                  : isCrimson
                  ? "bg-black/40 border-red-500/25 shadow-[0_0_40px_rgba(239,68,68,0.1)]"
                  : isBlue
                  ? "bg-black/40 border-sky-500/25 shadow-[0_0_40px_rgba(56,189,248,0.1)]"
                  : "bg-black/40 border-purple-500/25 shadow-[0_0_40px_rgba(168,85,247,0.1)]"
              }`}
            >
              {/* Corner Tech Brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/30" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/30" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/30" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/30" />

              {/* Telemetry Tag */}
              <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-1 flex items-center space-x-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isFlagship
                      ? "bg-sky-400 animate-ping"
                      : isCrimson
                      ? "bg-red-500"
                      : isBlue
                      ? "bg-sky-400"
                      : "bg-purple-400"
                  }`}
                />
                <span>// SECTOR {event.number}</span>
                <span>•</span>
                <span>{event.category}</span>
              </div>

              {/* Oversized Event Number */}
              <div
                className={`text-8xl sm:text-9xl lg:text-[11rem] font-black font-mono tracking-tighter leading-none select-none my-1 sm:my-2 ${
                  isFlagship
                    ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-sky-200 to-red-400 drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]"
                    : isCrimson
                    ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-red-200 to-red-600/60 drop-shadow-[0_0_30px_rgba(239,68,68,0.35)]"
                    : isBlue
                    ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-sky-200 to-blue-600/60 drop-shadow-[0_0_30px_rgba(56,189,248,0.35)]"
                    : "text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-600/60 drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]"
                }`}
              >
                {event.number}
              </div>

              {/* Tagline / Prize Pool Pill */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-wider text-slate-300">
                <span className="text-white/50 uppercase">PRIZE POOL:</span>
                <span
                  className={`font-bold ${
                    isFlagship
                      ? "text-sky-300"
                      : isCrimson
                      ? "text-red-400"
                      : isBlue
                      ? "text-sky-300"
                      : "text-purple-300"
                  }`}
                >
                  {event.prize}
                </span>
              </div>
            </div>
          </motion.div>

          {/* 2. EDITORIAL CONTENT COLUMN */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-7/12 flex flex-col text-left"
          >
            {/* Top Micro Header (Number + Category Badge) */}
            <div className="flex items-center space-x-3 mb-3">
              <span
                className={`text-xs font-mono font-bold tracking-[0.25em] px-2.5 py-1 rounded border uppercase ${
                  isFlagship
                    ? "bg-sky-500/10 border-sky-400/30 text-sky-400"
                    : isCrimson
                    ? "bg-red-500/10 border-red-500/30 text-red-400"
                    : isBlue
                    ? "bg-sky-500/10 border-sky-500/30 text-sky-400"
                    : "bg-purple-500/10 border-purple-500/30 text-purple-400"
                }`}
              >
                PHASE {event.number}
              </span>

              {isFlagship && (
                <span className="text-[10px] font-mono font-extrabold tracking-[0.2em] px-2.5 py-1 rounded border border-red-500/40 bg-red-500/15 text-red-300 uppercase animate-pulse">
                  ★ FLAGSHIP EXPERIENCE
                </span>
              )}
            </div>

            {/* Event Name (Locked Exact Name) */}
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono tracking-wider text-white uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] mb-3 leading-tight">
              {event.name}
            </h3>

            {/* Date Pill (Locked Exact Date) */}
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono tracking-widest text-red-400 font-bold uppercase mb-5">
              <svg className="w-4 h-4 text-red-500 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>{event.date}</span>
              <span className="text-white/30">•</span>
              <span className="text-slate-400">{event.venue}</span>
            </div>

            {/* Event Description (Locked Exact Text) */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-sans font-normal leading-relaxed mb-6 max-w-2xl">
              {event.description}
            </p>

            {/* Event Highlights / Featured Challenges Grid */}
            {event.highlights && event.highlights.length > 0 && (
              <div className="mb-8">
                <span className="text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase block mb-3 font-semibold">
                  {event.id === "science-championship"
                    ? "CHAMPIONSHIP EVENTS & CHALLENGES"
                    : "KEY HIGHLIGHTS"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl">
                  {event.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors text-slate-200"
                    >
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          isFlagship
                            ? "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]"
                            : isCrimson
                            ? "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                            : isBlue
                            ? "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]"
                            : "bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                        }`}
                      />
                      <span className="text-xs sm:text-[13px] font-sans font-medium tracking-wide">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons: REGISTER & VIEW EVENT */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono">
              {/* REGISTER BUTTON */}
              <Link
                href={event.registerUrl}
                className={`py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl font-bold tracking-wider text-xs sm:text-sm uppercase text-center transition-all duration-200 flex items-center space-x-2 shadow-lg ${
                  isFlagship
                    ? "bg-gradient-to-r from-red-600 via-sky-600 to-red-600 hover:brightness-110 text-white shadow-[0_0_25px_rgba(239,68,68,0.4)]"
                    : isCrimson
                    ? "bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.35)]"
                    : isBlue
                    ? "bg-sky-500 hover:bg-sky-400 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                    : "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                }`}
              >
                <span>REGISTER</span>
                <span className="text-base leading-none">→</span>
              </Link>

              {/* VIEW EVENT BUTTON */}
              <button
                type="button"
                onClick={() => onViewEvent(event)}
                className="py-3 sm:py-3.5 px-5 sm:px-7 rounded-xl font-semibold tracking-wider text-xs sm:text-sm uppercase text-center border border-white/20 bg-white/5 hover:bg-white/15 hover:border-white/40 text-white transition-all duration-200 cursor-pointer flex items-center space-x-2"
              >
                <span>VIEW EVENT</span>
                <span className="text-xs opacity-60">↗</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventItemSection;
