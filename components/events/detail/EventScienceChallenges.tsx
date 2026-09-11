"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScienceChallenge } from "@/data/events";

interface EventScienceChallengesProps {
  challenges: ScienceChallenge[];
}

export const EventScienceChallenges: React.FC<EventScienceChallengesProps> = ({ challenges }) => {
  const [selectedChallenge, setSelectedChallenge] = useState<ScienceChallenge | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedChallenge(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto font-mono">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] tracking-[0.25em] text-purple-400 uppercase font-bold block mb-1.5">
            // NEXT-GEN HACKATHON 1.0 ARENA
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase mb-3">
            NEXT-GEN ARENA CHALLENGES
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            Four specialized competitions testing speed, rapid innovation, hardware engineering, and venture pitching. Click any card below to read complete guidelines and register!
          </p>
        </div>

        {/* 4 Cards 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {challenges.map((challenge, index) => {
            const registerLink = `/register?event=next-gen-hackathon&track=${encodeURIComponent(
              challenge.id
            )}&competition=${encodeURIComponent(challenge.title)}`;

            return (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-purple-950/25 via-[#070b18] to-[#03050e] border border-purple-500/30 hover:border-purple-400/80 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.06)] hover:shadow-[0_0_40px_rgba(168,85,247,0.22)] group hover:-translate-y-1"
              >
                {/* Decorative Top Corners */}
                <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-purple-400/40 pointer-events-none" />
                <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-purple-400/40 pointer-events-none" />

                <div>
                  {/* Card Header: Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-purple-400 px-2.5 py-1 rounded bg-purple-500/15 border border-purple-500/30">
                      EVENT {challenge.number} // {challenge.tag}
                    </span>
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                      {challenge.icon}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    onClick={() => setSelectedChallenge(challenge)}
                    className="text-lg sm:text-xl font-black text-white tracking-wide group-hover:text-purple-200 transition-colors mb-0.5 cursor-pointer leading-snug"
                  >
                    {challenge.title}
                  </h3>
                  <span className="text-xs text-purple-400 font-bold block mb-3">
                    {challenge.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 font-sans font-normal leading-relaxed mb-4">
                    {challenge.description}
                  </p>

                  {/* Metadata Chips: Duration & Team Size */}
                  <div className="space-y-1.5 mb-4 text-[11px] text-slate-400 pt-3 border-t border-white/10 font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 uppercase">Duration:</span>
                      <span className="text-slate-200 font-semibold">{challenge.duration || "Competition Window"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 uppercase">Team Size:</span>
                      <span className="text-purple-300 font-semibold">{challenge.teamSize || "2–3 Members"}</span>
                    </div>
                  </div>

                  {/* Format Indicator */}
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-purple-300/90 font-semibold mb-5 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shrink-0" />
                    <span className="truncate">{challenge.format}</span>
                  </div>
                </div>

                {/* Card Bottom Actions: REGISTER BUTTON & DETAILS BUTTON */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch gap-2.5">
                  <Link
                    href={registerLink}
                    className="flex-1 py-3 px-5 rounded-xl font-bold tracking-wider text-xs uppercase text-center text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:brightness-110 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>REGISTER FOR THIS CHALLENGE</span>
                    <span className="text-sm leading-none">→</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelectedChallenge(challenge)}
                    className="py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-center"
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal on Click */}
      <AnimatePresence>
        {selectedChallenge && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-challenge-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto font-mono"
            onClick={() => setSelectedChallenge(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#040814] border border-purple-500/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(168,85,247,0.25)] text-white overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400 pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400 pointer-events-none" />

              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 mb-5 border-b border-white/10 gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase px-2.5 py-0.5 rounded bg-purple-500/15 border border-purple-500/30">
                      EVENT {selectedChallenge.number} // {selectedChallenge.tag}
                    </span>
                    <span className="text-[10px] text-slate-400 tracking-wider">
                      NEXT-GEN HACKATHON 1.0
                    </span>
                  </div>
                  <h3
                    id="modal-challenge-title"
                    className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight"
                  >
                    {selectedChallenge.title}
                  </h3>
                  <span className="text-xs text-purple-400 font-bold block mt-0.5">
                    {selectedChallenge.subtitle}
                  </span>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedChallenge(null)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Event Description (About Challenge) */}
              <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] text-purple-400 tracking-widest uppercase font-bold block mb-1.5">
                  // CHALLENGE BRIEFING & OBJECTIVE
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                  {selectedChallenge.description}
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[9px] text-slate-400 tracking-widest uppercase block mb-1">
                    ⏱ ESTIMATED TIME
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {selectedChallenge.duration || "Scheduled Slot"}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[9px] text-slate-400 tracking-widest uppercase block mb-1">
                    👥 TEAM SIZE
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {selectedChallenge.teamSize || "2–4 Members"}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[9px] text-slate-400 tracking-widest uppercase block mb-1">
                    🏆 AWARDS & MERIT
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-purple-300">
                    Certificates & Trophy
                  </span>
                </div>
              </div>

              {/* Format & Arena */}
              <div className="mb-6 p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs">
                <span className="text-[10px] text-purple-300 font-bold uppercase tracking-widest block mb-1">
                  🎯 ARENA & EVALUATION FORMAT
                </span>
                <p className="text-slate-300 font-sans text-xs">
                  {selectedChallenge.format}
                </p>
              </div>

              {/* Highlights / Features */}
              {selectedChallenge.highlights && selectedChallenge.highlights.length > 0 && (
                <div className="mb-6">
                  <span className="text-[10px] text-slate-400 tracking-widest uppercase font-bold block mb-2">
                    KEY EVALUATION FOCUS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedChallenge.highlights.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-sans px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={`/register?event=next-gen-hackathon&track=${encodeURIComponent(
                    selectedChallenge.id
                  )}&competition=${encodeURIComponent(selectedChallenge.title)}`}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold tracking-widest text-xs uppercase text-center text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>REGISTER FOR THIS CHALLENGE</span>
                  <span className="text-sm">→</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedChallenge(null)}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-semibold tracking-wider text-xs uppercase text-center border border-white/20 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventScienceChallenges;
