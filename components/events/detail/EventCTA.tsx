"use client";

import React from "react";
import Link from "next/link";
import { EventItem } from "@/data/events";

interface EventCTAProps {
  event: EventItem;
}

export const EventCTA: React.FC<EventCTAProps> = ({ event }) => {
  const isCrimson = event.accentColor === "crimson";
  const isBlue = event.accentColor === "blue";
  const isEmerald = event.accentColor === "emerald";

  const glowColor = isCrimson
    ? "bg-red-600/15"
    : isBlue
    ? "bg-sky-600/15"
    : isEmerald
    ? "bg-emerald-600/15"
    : "bg-purple-600/15";

  const buttonGradient = isCrimson
    ? "bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_30px_rgba(239,68,68,0.4)]"
    : isBlue
    ? "bg-gradient-to-r from-sky-600 via-blue-500 to-sky-600 shadow-[0_0_30px_rgba(56,189,248,0.4)]"
    : isEmerald
    ? "bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
    : "bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.4)]";

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#02040a] text-center overflow-hidden">
      {/* Background Accent Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] ${glowColor} rounded-full blur-[140px] pointer-events-none`}
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <span className="text-xs font-mono tracking-[0.3em] text-slate-400 uppercase font-bold mb-3">
          // JOIN SHIVATECH 2026
        </span>

        <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white uppercase mb-4 leading-tight">
          READY TO COMPETE IN {event.name}?
        </h2>

        <p className="text-sm sm:text-base font-sans text-slate-300 max-w-xl leading-relaxed mb-8">
          Register now to secure your team slot, access challenge mentoring, and showcase your innovation on the grand stage of Shivalik University.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 font-mono w-full sm:w-auto">
          <Link
            href={event.registerUrl}
            className={`w-full sm:w-auto py-4 px-10 rounded-xl font-bold tracking-widest text-xs sm:text-sm uppercase text-center text-white ${buttonGradient} hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300`}
          >
            <span>REGISTER FOR THIS EVENT →</span>
          </Link>

          <Link
            href="/events"
            className="w-full sm:w-auto py-4 px-8 rounded-xl font-semibold tracking-wider text-xs sm:text-sm uppercase text-center border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all duration-200"
          >
            <span>← EXPLORE OTHER EVENTS</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventCTA;
