"use client";

import React from "react";
import { motion } from "framer-motion";

const progressionSteps = [
  {
    stepNumber: "01",
    phaseLabel: "PHASE 01",
    title: "ROBO RACE",
    tagline: "SPEED & PRECISION",
    description: "High-speed circuit qualification sprint.",
    status: "STARTING ROUND",
    accentClass: "text-amber-300 border-amber-500/30 bg-amber-500/10",
    glowColor: "rgba(245,158,11,0.5)",
  },
  {
    stepNumber: "02",
    phaseLabel: "PHASE 02",
    title: "ROBO SOCCER",
    tagline: "MASTER THE FIELD",
    description: "Turf agility & ball maneuvering battle.",
    status: "SEMI-FINAL CHALLENGE",
    accentClass: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    glowColor: "rgba(16,185,129,0.5)",
  },
  {
    stepNumber: "03",
    phaseLabel: "PHASE 03",
    title: "ROBO WAR",
    tagline: "THE FINAL COMBAT",
    description: "Head-to-head combat arena faceoff.",
    status: "GRAND FINALE",
    accentClass: "text-red-400 border-red-500/40 bg-red-500/15",
    glowColor: "rgba(239,68,68,0.6)",
  },
];

export const QualificationTimeline: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/5 overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="flex items-center space-x-2 text-xs tracking-[0.3em] uppercase text-sky-400 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span>SECTION 03 // ELIMINATION PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-orbitron">
            THE QUALIFICATION JOURNEY
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3 font-sans tracking-wide">
            One continuous progression. Clear each phase to advance toward the championship.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-sky-400 to-red-500 rounded-full mt-6 mb-8" />

          {/* Explicit Progression Breadcrumb */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold tracking-wider uppercase">
            <span className="text-amber-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
              START
            </span>
            <span className="text-slate-500">→</span>
            <span className="text-white">01 ROBO RACE</span>
            <span className="text-slate-500">→</span>
            <span className="text-emerald-400">02 ROBO SOCCER</span>
            <span className="text-slate-500">→</span>
            <span className="text-red-400">03 ROBO WAR</span>
            <span className="text-slate-500">→</span>
            <span className="text-amber-400 font-orbitron">
              CHAMPION 🏆
            </span>
          </div>
        </div>

        {/* 1. DESKTOP VIEW: HORIZONTAL GLOWING PROGRESSION LINE */}
        <div className="hidden lg:block relative my-12">
          {/* Continuous Glowing Background Line */}
          <div className="absolute top-[68px] left-[5%] right-[5%] h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] z-0" />

          <div className="grid grid-cols-3 gap-8 relative z-10">
            {progressionSteps.map((step, idx) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Node Circle */}
                <div
                  className="w-16 h-16 rounded-2xl bg-[#040814] border-2 flex items-center justify-center text-xl font-black tracking-wider transition-all duration-300 group-hover:scale-110 mb-6 shadow-lg relative cursor-default"
                  style={{
                    borderColor: step.glowColor,
                    boxShadow: `0 0 25px ${step.glowColor}`,
                  }}
                >
                  <span className="text-white font-orbitron">{step.stepNumber}</span>
                  {/* Subtle inner ping dot */}
                  <span
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping"
                    style={{ backgroundColor: step.glowColor }}
                  />
                </div>

                {/* Phase Tag */}
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-black tracking-[0.2em] uppercase border mb-2 ${step.accentClass}`}>
                  {step.phaseLabel}
                </span>

                {/* Title */}
                <h4 className="text-lg font-black tracking-tight text-white uppercase font-orbitron mb-1 group-hover:text-red-400 transition-colors">
                  {step.title}
                </h4>

                {/* Tagline */}
                <span className="text-[11px] font-extrabold tracking-[0.2em] text-slate-400 uppercase mb-2">
                  {step.tagline}
                </span>

                {/* Description */}
                <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

                {/* Advance Arrow (except for final) */}
                {idx < 2 && (
                  <div className="mt-4 text-xs font-bold text-red-500/80 tracking-widest uppercase flex items-center space-x-1">
                    <span>CLEAR</span>
                    <span>→</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Grand Finale Champion Pod at the end */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-red-500/10 via-amber-500/10 to-red-500/10 border border-amber-500/30 flex items-center justify-between shadow-[0_0_40px_rgba(245,158,11,0.15)]"
          >
            <div className="flex items-center space-x-4">
              <span className="text-3xl">🏆</span>
              <div>
                <span className="text-xs font-black tracking-[0.25em] text-amber-300 uppercase block">
                  CHAMPIONSHIP STAGE
                </span>
                <span className="text-xl font-black tracking-tight text-white uppercase font-orbitron">
                  BECOME THE QUANTUM DRIFT CHAMPION
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 uppercase tracking-wider block">FINAL CRITERIA</span>
              <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">
                OUTLAST ALL 3 PHASES
              </span>
            </div>
          </motion.div>
        </div>

        {/* 2. MOBILE VIEW: VERTICAL TIMELINE */}
        <div className="block lg:hidden relative pl-6 sm:pl-8 border-l-2 border-gradient-to-b from-amber-500 via-emerald-500 to-red-500 ml-4 space-y-10">
          {/* Mobile Start Node */}
          <div className="relative">
            <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-8 h-8 rounded-xl bg-[#040814] border-2 border-amber-400 flex items-center justify-center text-[10px] font-black shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              <span className="text-amber-400 font-mono">GO</span>
            </div>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-amber-400 font-black tracking-widest uppercase block">
                  QUALIFICATION ENTRY
                </span>
                <span className="text-base font-black text-white font-orbitron">
                  START
                </span>
              </div>
              <span className="text-xs font-bold text-amber-400 tracking-wider">
                ↓ BEGIN
              </span>
            </div>
          </div>

          {progressionSteps.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Node Indicator on Vertical Line */}
              <div
                className="absolute -left-[37px] sm:-left-[45px] top-0 w-8 h-8 rounded-xl bg-[#040814] border-2 flex items-center justify-center text-xs font-black"
                style={{ borderColor: step.glowColor }}
              >
                <span className="text-white font-orbitron">{step.stepNumber}</span>
              </div>

              {/* Content Card */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black tracking-[0.2em] uppercase border ${step.accentClass}`}>
                    {step.phaseLabel}
                  </span>
                  <span className="text-[10px] text-slate-500 tracking-wider uppercase">
                    {step.status}
                  </span>
                </div>

                <h4 className="text-xl font-black tracking-tight text-white uppercase font-orbitron">
                  {step.title}
                </h4>

                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase block mb-2">
                  {step.tagline}
                </span>

                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-3">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-bold text-red-400">
                  <span>CLEAR PHASE → ADVANCE</span>
                  <span>↓</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Champion Callout on Mobile */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-amber-500/15 via-red-500/10 to-transparent border border-amber-500/30 text-center">
            <span className="text-2xl mb-2 block">🏆</span>
            <span className="text-xs font-black tracking-[0.2em] text-amber-300 uppercase block">
              FINAL GOAL
            </span>
            <span className="text-lg font-black tracking-tight text-white uppercase font-orbitron block mt-1">
              BECOME THE QUANTUM DRIFT CHAMPION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationTimeline;
