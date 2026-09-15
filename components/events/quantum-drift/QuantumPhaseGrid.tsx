"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { QuantumDriftPhase } from "@/data/events";

interface QuantumPhaseGridProps {
  phases: QuantumDriftPhase[];
}

export const QuantumPhaseGrid: React.FC<QuantumPhaseGridProps> = ({ phases }) => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 text-xs tracking-[0.3em] uppercase text-red-400 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>SECTION 02 // TOURNAMENT STRUCTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-orbitron">
            THE FOUR PHASES
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3 font-sans tracking-wide">
            One arena. Four challenges. One progression.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-sky-400 to-red-500 rounded-full mt-6" />
        </div>

        {/* The 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {phases.map((phase, idx) => {
            const isPhase4 = phase.number === "04";

            // Border and accent styling based on phase
            const borderColors = {
              green: "border-emerald-500/30 hover:border-emerald-500/80 group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]",
              cyan: "border-sky-500/30 hover:border-sky-500/80 group-hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]",
              crimson: "border-red-500/30 hover:border-red-500/80 group-hover:shadow-[0_0_35px_rgba(239,68,68,0.25)]",
              amber: "border-amber-500/40 hover:border-amber-400/90 group-hover:shadow-[0_0_45px_rgba(245,158,11,0.35)]",
            }[phase.accent];

            const badgeBg = {
              green: "text-emerald-400 bg-emerald-500/15 border-emerald-500/40",
              cyan: "text-sky-400 bg-sky-500/15 border-sky-500/40",
              crimson: "text-red-400 bg-red-500/15 border-red-500/40",
              amber: "text-amber-300 bg-amber-500/20 border-amber-500/50",
            }[phase.accent];

            return (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative rounded-2xl overflow-hidden border ${borderColors} transition-all duration-500 group bg-[#040814] flex flex-col justify-between ${
                  isPhase4 ? "md:col-span-2 md:min-h-[420px]" : "min-h-[380px]"
                }`}
              >
                {/* 1. VISUAL CARD BACKGROUND */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                  <Image
                    src={phase.image}
                    alt={phase.name}
                    fill
                    sizes={isPhase4 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-cover object-center opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-[#040814]/85 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#040814]/80 via-transparent to-[#040814]/80" />
                </div>

                {/* 2. CARD HEADER */}
                <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-md text-xs font-black tracking-[0.25em] uppercase border ${badgeBg}`}>
                    PHASE {phase.number}
                  </span>

                  {isPhase4 && (
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-[0.25em] uppercase text-amber-300 bg-amber-500/15 border border-amber-500/40 animate-pulse">
                      ★ FINAL PHASE
                    </span>
                  )}
                </div>

                {/* 3. CARD BODY & CONTENT */}
                <div className="relative z-10 p-6 sm:p-8 pt-0 flex flex-col">
                  <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.3em] uppercase text-slate-400 mb-1">
                    {phase.tagline}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase font-orbitron mb-3 group-hover:text-red-400 transition-colors">
                    {phase.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-xl mb-6">
                    {phase.description}
                  </p>

                  {/* Progression Label Footnote */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-red-400 uppercase">
                        {phase.progressionLabel}
                      </span>
                    </div>

                    <span className="text-[10px] text-slate-500 tracking-widest uppercase">
                      KNOCKOUT CRITERIA
                    </span>
                  </div>
                </div>

                {/* Technical Corner Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/30 pointer-events-none" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/30 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/30 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/30 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuantumPhaseGrid;
