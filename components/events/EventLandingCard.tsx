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

              {event.slug === "hacknation-2-0" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/20 border border-amber-400 text-amber-200 text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(251,191,36,0.35)]">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>DISCLAIMER: REGISTRATION OPEN FOR INTERNAL STUDENTS ONLY</span>
                </span>
              )}
            </div>

            {/* Event Name */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
              {event.name}
            </h3>

            {/* Target Audience Highlighted Badge (High-Contrast Amber/Yellow Glow) */}
            {event.targetAudienceNote && (
              <div className="mb-4">
                <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-400/25 to-amber-500/20 border-2 border-amber-400 shadow-[0_0_22px_rgba(251,191,36,0.5)] backdrop-blur-md">
                  <span className="text-sm sm:text-base leading-none">🎓</span>
                  <span className="text-xs sm:text-sm font-mono font-black text-amber-200 tracking-wider uppercase drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]">
                    [ {event.targetAudienceNote} ]
                  </span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,1)] animate-pulse" />
                </div>
              </div>
            )}

            {/* Date & Venue Pill */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300 mb-4">
              <span className="flex items-center space-x-1.5 text-red-400 font-bold">
                <span>📅</span>
                <span>{event.date}</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center space-x-1.5 text-slate-300 font-semibold truncate max-w-full">
                <span>📍</span>
                <span>{event.venue}</span>
              </span>
              {event.registrationDeadline && (
                <>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center space-x-1.5 text-amber-300 font-black bg-gradient-to-r from-amber-500/20 via-yellow-400/25 to-amber-500/20 px-2.5 py-1 rounded border border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>LAST DATE: {event.registrationDeadline.toUpperCase()}</span>
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
              {event.description}
            </p>

            {/* Micro Highlights Pill Row */}
            {event.highlights && event.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {event.highlights.slice(0, 3).map((hl, i) => (
                  <span
                    key={i}
                    className="text-[10px] sm:text-[11px] font-mono font-medium text-slate-400 px-2.5 py-0.5 rounded bg-white/[0.02] border border-white/5"
                  >
                    • {hl}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right Block: Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-3 w-full lg:w-48 self-stretch lg:self-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
            {event.registrationDeadline && (
              <div className="text-center py-2 px-2.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-yellow-400/15 to-amber-500/15 border border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                  REGISTRATION CLOSES
                </span>
                <span className="text-xs font-black text-white font-mono uppercase tracking-wide">
                  ⏰ {event.registrationDeadline}
                </span>
              </div>
            )}

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
            {event.slug === "ideathon" ? (
              <div className="flex flex-col gap-2 w-full">
                {event.internalRegisterUrl ? (
                  <a
                    href={event.internalRegisterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl font-bold tracking-wider text-xs uppercase text-center border border-purple-400/40 bg-purple-500/15 hover:bg-purple-500/25 text-purple-200 hover:text-white transition-all duration-200 flex items-center justify-center space-x-1.5 cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                  >
                    <span>INTERNAL REGISTRATION</span>
                    <span className="text-xs opacity-75">↗</span>
                  </a>
                ) : null}
                <Link
                  href="/contact"
                  className="py-2 px-3 rounded-lg font-medium tracking-wide text-[11px] text-center border border-sky-400/30 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-white transition-all duration-200 flex items-center justify-center space-x-1"
                >
                  <span>External team: Contact our coordinators on Contact Page</span>
                  <span className="text-xs">→</span>
                </Link>
              </div>
            ) : !event.isRegistrationOpen ? (
              <Link
                href={`/register?event=${event.slug}`}
                className="py-3.5 px-4 rounded-xl font-bold tracking-wider text-[11px] uppercase text-center border border-amber-400/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 transition-all duration-200 flex items-center justify-center space-x-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>REGISTRATION OPENING SOON</span>
                <span className="text-xs opacity-60">→</span>
              </Link>
            ) : event.registerUrl.startsWith("http") ? (
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
