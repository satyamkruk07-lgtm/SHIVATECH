"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, animate } from "framer-motion";
import { EventItem, EventStatItem } from "@/data/events";

interface EventHeroProps {
  event: EventItem;
}

function HeroStatCounter({
  to,
  prefix = "",
  suffix = "",
  customText,
}: {
  to?: number;
  prefix?: string;
  suffix?: string;
  customText?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (to === undefined) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (val) => {
        setCount(Math.round(val));
      },
    });
    return controls.stop;
  }, [to]);

  if (customText) {
    return (
      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight block whitespace-normal">
        {customText}
      </span>
    );
  }

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export const EventHero: React.FC<EventHeroProps> = ({ event }) => {
  const isCrimson = event.accentColor === "crimson";
  const isBlue = event.accentColor === "blue";
  const isEmerald = event.accentColor === "emerald";

  const accentColorClass = isCrimson
    ? "text-red-400 border-red-500/30 bg-red-500/10"
    : isBlue
    ? "text-sky-400 border-sky-500/30 bg-sky-500/10"
    : isEmerald
    ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
    : "text-purple-400 border-purple-500/30 bg-purple-500/10";

  const glowGradient = isCrimson
    ? "from-red-600/20 via-transparent to-transparent"
    : isBlue
    ? "from-sky-600/20 via-transparent to-transparent"
    : isEmerald
    ? "from-emerald-600/20 via-transparent to-transparent"
    : "from-purple-600/20 via-transparent to-transparent";

  const isHackathon = event.slug === "hacknation-2-0" || event.category === "HACKATHON";

  // Stats strip strictly for Hackathon page
  const statsToRender: EventStatItem[] = isHackathon
    ? event.eventStats || [
        { id: "s1", value: 500, suffix: "+", label: "PARTICIPANTS" },
        { id: "s2", value: 100, suffix: "+", label: "TEAMS" },
        { id: "s3", value: 15, suffix: "+", label: "OTHER STATES" },
      ]
    : [];

  return (
    <section className="relative w-full pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] overflow-hidden border-b border-white/10">
      {/* Dynamic Ambient Background Glow */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] bg-gradient-to-b ${glowGradient} rounded-full blur-[140px] pointer-events-none`}
      />

      {/* Subtle Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/events"
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-slate-400 hover:text-white transition-colors group px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02]"
          >
            <span className="text-red-400 group-hover:-translate-x-1 transition-transform">←</span>
            <span>BACK TO ALL EVENTS</span>
          </Link>
        </motion.div>

        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 font-mono"
        >
          <span
            className={`text-xs sm:text-sm font-black tracking-[0.25em] uppercase px-3 py-1 rounded-md border ${accentColorClass}`}
          >
            EVENT {event.number} // {event.category}
          </span>

          {event.badge && (
            <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-slate-300 px-3 py-1 rounded-md bg-white/[0.05] border border-white/15">
              ★ {event.badge}
            </span>
          )}

          {event.duration && (
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-400 px-3 py-1 rounded-md bg-white/[0.03] border border-white/10">
              ⏱ {event.duration}
            </span>
          )}
        </motion.div>

        {/* Event Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-mono tracking-tight text-white uppercase drop-shadow-[0_0_35px_rgba(255,255,255,0.2)] mb-3 leading-none"
        >
          {event.name}
        </motion.h1>

        {/* Target Audience Bracket Note */}
        {event.targetAudienceNote && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mb-6"
          >
            <span className="inline-block text-xs sm:text-sm md:text-base font-mono font-bold text-purple-300 bg-purple-500/15 border border-purple-500/40 px-4 py-1.5 rounded-xl tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              [ {event.targetAudienceNote} ]
            </span>
          </motion.div>
        )}

        {/* Event Theme / Slogan from PDF */}
        {event.theme && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-base sm:text-xl lg:text-2xl font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 italic">
              "{event.theme}"
            </p>
          </motion.div>
        )}

        {/* Schedule & Metadata Bar (Box 1 in user image) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-8 font-mono"
        >
          {/* Date */}
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest text-slate-500 uppercase font-bold mb-1">
              OFFICIAL DATES
            </span>
            <span className="text-xs sm:text-sm font-bold text-white flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span>{event.date}</span>
            </span>
          </div>

          {/* Venue */}
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest text-slate-500 uppercase font-bold mb-1">
              CAMPUS VENUE
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate" title={event.venue}>
              📍 {event.venue}
            </span>
          </div>

          {/* Team / Participation */}
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest text-slate-500 uppercase font-bold mb-1">
              PARTICIPATION
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              👥 {event.teamSize || "Interdisciplinary Teams"}
            </span>
          </div>

          {/* Prize / Status */}
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest text-slate-500 uppercase font-bold mb-1">
              OPPORTUNITY & REWARDS
            </span>
            <span className="text-xs sm:text-sm font-bold text-emerald-400">
              🏆 {event.prize ? `${event.prize} Awards + Incubation` : "Awards, Certificates & Mentorship"}
            </span>
          </div>
        </motion.div>

        {/* Dynamic Event Stats Strip with Heading - ONLY ON HACKATHON PAGE */}
        {isHackathon && statsToRender.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="w-full max-w-4xl mx-auto mb-12 flex flex-col items-center"
          >
            {/* Heading Type Title Centered */}
            <div className="text-center mb-5">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-red-400 uppercase font-bold block mb-1">
                // PARTICIPATION RECORD
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-mono tracking-wider text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                {event.eventStatsTitle || "Previously Participants"}
              </h3>
            </div>

            {/* Centered Stats Box */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-6 sm:py-8 px-6 sm:px-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              {statsToRender.map((stat, idx) => (
                <div
                  key={stat.id || idx}
                  className={`flex flex-col items-center justify-center text-center min-w-0 relative ${
                    idx < statsToRender.length - 1 ? "sm:border-r sm:border-white/15" : ""
                  }`}
                >
                  <div className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-2 max-w-full">
                    <HeroStatCounter
                      to={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      customText={stat.customText}
                    />
                  </div>
                  <div className="font-sans text-[11px] sm:text-xs md:text-sm tracking-[0.2em] text-white/50 uppercase font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Hero Actions: REGISTER & EXPLORE SCHEDULE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="flex flex-wrap items-center gap-4 font-mono"
        >
          {event.registerUrl.startsWith("http") ? (
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-3.5 px-8 rounded-xl font-bold tracking-widest text-xs sm:text-sm uppercase text-center shadow-lg transition-all duration-300 flex items-center space-x-2 text-white hover:brightness-110 hover:-translate-y-0.5 cursor-pointer ${
                isCrimson
                  ? "bg-gradient-to-r from-red-600 to-red-500 shadow-[0_0_25px_rgba(239,68,68,0.4)]"
                  : isBlue
                  ? "bg-gradient-to-r from-sky-600 to-blue-600 shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                  : isEmerald
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_25px_rgba(168,85,247,0.4)]"
              }`}
            >
              <span>REGISTER FOR THIS EVENT</span>
              <span className="text-base leading-none">↗</span>
            </a>
          ) : (
            <Link
              href={event.registerUrl}
              className={`py-3.5 px-8 rounded-xl font-bold tracking-widest text-xs sm:text-sm uppercase text-center shadow-lg transition-all duration-300 flex items-center space-x-2 text-white hover:brightness-110 hover:-translate-y-0.5 ${
                isCrimson
                  ? "bg-gradient-to-r from-red-600 to-red-500 shadow-[0_0_25px_rgba(239,68,68,0.4)]"
                  : isBlue
                  ? "bg-gradient-to-r from-sky-600 to-blue-600 shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                  : isEmerald
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_25px_rgba(168,85,247,0.4)]"
              }`}
            >
              <span>REGISTER FOR THIS EVENT</span>
              <span className="text-base leading-none">→</span>
            </Link>
          )}

          <Link
            href="/schedule"
            className="py-3.5 px-7 rounded-xl font-semibold tracking-wider text-xs sm:text-sm uppercase text-center border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all duration-200"
          >
            <span>VIEW IN FESTIVAL SCHEDULE</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventHero;
