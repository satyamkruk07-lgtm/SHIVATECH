"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { EventItem } from "@/data/events";

interface EventDetailsModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ event, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (event) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  const isCrimson = event.accentColor === "crimson";
  const isBlue = event.accentColor === "blue";
  const isFlagship = event.accentColor === "flagship";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#040814]/95 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-[0_0_80px_rgba(0,0,0,0.9)] text-white z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Top Neon Border Line */}
          <div
            className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl ${
              isFlagship
                ? "bg-gradient-to-r from-red-500 via-sky-400 to-red-500"
                : isCrimson
                ? "bg-gradient-to-r from-red-600 via-red-400 to-transparent"
                : isBlue
                ? "bg-gradient-to-r from-sky-500 via-blue-400 to-transparent"
                : "bg-gradient-to-r from-purple-500 via-indigo-400 to-transparent"
            }`}
          />

          {/* Close (X) Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/15 text-white/70 hover:text-white hover:bg-white/15 flex items-center justify-center transition-colors text-base"
          >
            ✕
          </button>

          {/* Header Metadata */}
          <div className="flex items-center space-x-2 text-xs font-mono mb-2">
            <span
              className={`font-bold tracking-[0.25em] uppercase ${
                isFlagship
                  ? "text-sky-400"
                  : isCrimson
                  ? "text-red-400"
                  : isBlue
                  ? "text-sky-400"
                  : "text-purple-400"
              }`}
            >
              EVENT {event.number} // {event.category}
            </span>
          </div>

          {/* Event Title */}
          <h3 className="text-2xl sm:text-4xl font-black font-mono tracking-wider text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-2">
            {event.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs sm:text-sm font-mono text-slate-300 tracking-wider mb-6">
            {event.tagline}
          </p>

          {/* Key Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4 mb-6 font-mono text-xs">
            <div>
              <span className="text-white/40 block text-[10px] tracking-widest uppercase mb-1">
                DATE
              </span>
              <span className="text-white font-bold">{event.date}</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] tracking-widest uppercase mb-1">
                PRIZE POOL
              </span>
              <span className="text-red-400 font-bold">{event.prize}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-white/40 block text-[10px] tracking-widest uppercase mb-1">
                TEAM SIZE
              </span>
              <span className="text-sky-300 font-bold">{event.teamSize}</span>
            </div>
            <div className="col-span-2 sm:col-span-3 border-t border-white/5 pt-2 mt-1">
              <span className="text-white/40 block text-[10px] tracking-widest uppercase mb-0.5">
                VENUE
              </span>
              <span className="text-slate-300">{event.venue}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-2">
              OVERVIEW
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {event.description}
            </p>
          </div>

          {/* Highlights / Competitions */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-3">
              {event.id === "science-championship"
                ? "CHAMPIONSHIP EVENTS & CHALLENGES"
                : "EVENT HIGHLIGHTS"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
              {event.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2.5 text-slate-200 bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5"
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
                  <span className="leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 font-mono">
            <Link
              href={event.registerUrl}
              onClick={onClose}
              className={`flex-1 py-3 px-6 rounded-xl font-bold tracking-wider text-xs sm:text-sm uppercase text-center transition-all shadow-lg flex items-center justify-center space-x-2 ${
                isFlagship
                  ? "bg-gradient-to-r from-red-600 via-sky-600 to-red-600 text-white hover:brightness-110 shadow-red-600/30"
                  : isCrimson
                  ? "bg-red-600 text-white hover:bg-red-500 shadow-red-600/30"
                  : isBlue
                  ? "bg-sky-500 text-white hover:bg-sky-400 shadow-sky-500/30"
                  : "bg-purple-600 text-white hover:bg-purple-500 shadow-purple-600/30"
              }`}
            >
              <span>REGISTER FOR THIS EVENT</span>
              <span>→</span>
            </Link>
            <Link
              href="/schedule"
              onClick={onClose}
              className="py-3 px-5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase text-center transition-colors"
            >
              VIEW IN SCHEDULE
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EventDetailsModal;
