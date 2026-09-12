"use client";

import React from "react";
import { motion } from "framer-motion";
import { JourneyMilestone } from "@/data/events";

interface HackathonJourneyTimelineProps {
  title?: string;
  subtitle?: string;
  milestones: JourneyMilestone[];
}

export const HackathonJourneyTimeline: React.FC<HackathonJourneyTimelineProps> = ({
  title = "THE HACKATHON JOURNEY",
  subtitle = "FROM LAUNCH TO THE GRAND FINAL",
  milestones,
}) => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.08] overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Futuristic Technical Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ================================================================= */}
        {/* SECTION HEADER & DATE CLARITY CALLOUT                            */}
        {/* ================================================================= */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Cyber Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-cyan-300 uppercase">
              // OFFICIAL TIMELINE & MILESTONES
            </span>
          </motion.div>

          {/* Section Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-white uppercase leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            THE HACKATHON{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-sky-400">
              JOURNEY
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-xs sm:text-sm lg:text-base font-mono font-bold tracking-[0.28em] text-slate-400 uppercase mt-3"
          >
            {subtitle}
          </motion.p>

          {/* MANDATORY DATE CLARITY HUD BAR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full mt-8 p-4 sm:p-5 rounded-2xl bg-[#080e22]/90 border border-white/15 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] relative overflow-hidden font-mono"
          >
            {/* Top Glowing Laser Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 opacity-80" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
              {/* Box A: Overall Event Journey */}
              <div className="flex items-center space-x-3.5 sm:space-x-4 p-3.5 rounded-xl bg-white/[0.03] border border-cyan-500/30 text-left">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center shrink-0 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.25)]">
                  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] font-bold text-cyan-400 uppercase">
                    EVENT JOURNEY (MULTIPLE PHASES)
                  </div>
                  <div className="text-base sm:text-lg font-black text-white tracking-wide">
                    14 SEPTEMBER → 10 OCTOBER 2026
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Launch • Mentorship • Ideation • Sprint
                  </div>
                </div>
              </div>

              {/* Box B: Separately identified Grand Final */}
              <div className="flex items-center space-x-3.5 sm:space-x-4 p-3.5 rounded-xl bg-white/[0.03] border border-red-500/40 text-left">
                <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/40 flex items-center justify-center shrink-0 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] font-bold text-red-400 uppercase">
                    FINAL ROUND (ON-CAMPUS SPRINT)
                  </div>
                  <div className="text-base sm:text-lg font-black text-white tracking-wide flex items-center space-x-2">
                    <span>10 OCTOBER 2026</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-red-500/20 text-red-400 border border-red-500/40 font-bold uppercase">
                      GRAND FINAL
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Live Build, Hardware Lab, Jury Demos & Awards
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================================================================= */}
        {/* DESKTOP VIEW: CINEMATIC HORIZONTAL CONNECTED TIMELINE (lg & up)   */}
        {/* ================================================================= */}
        <div className="hidden lg:block relative mt-16 mb-8">
          {/* Continuous Glowing Connector Rail */}
          <div className="absolute top-[82px] left-8 right-8 h-[3px] bg-slate-800/90 z-0">
            {/* Animated Gradient Fill */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="origin-left h-full w-full bg-gradient-to-r from-cyan-400 via-sky-400 via-purple-500 to-red-500 shadow-[0_0_14px_rgba(56,189,248,0.8)]"
            />
          </div>

          {/* 5 Milestones Grid */}
          <div className="relative z-10 grid grid-cols-5 gap-5">
            {milestones.map((m, idx) => {
              const isFinal = m.isGrandFinal || idx === milestones.length - 1;
              const accentBorder = isFinal
                ? "border-red-500/70 hover:border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.35)]"
                : m.accent === "cyan"
                ? "border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                : m.accent === "blue"
                ? "border-sky-500/40 hover:border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                : m.accent === "purple"
                ? "border-purple-500/40 hover:border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                : "border-amber-500/40 hover:border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]";

              const nodeColor = isFinal
                ? "bg-red-500 border-red-300 text-white shadow-[0_0_20px_rgba(239,68,68,1)]"
                : m.accent === "cyan"
                ? "bg-cyan-500 border-cyan-200 text-[#02040a] shadow-[0_0_16px_rgba(34,211,238,0.9)]"
                : m.accent === "blue"
                ? "bg-sky-500 border-sky-200 text-[#02040a] shadow-[0_0_16px_rgba(56,189,248,0.9)]"
                : m.accent === "purple"
                ? "bg-purple-500 border-purple-200 text-white shadow-[0_0_16px_rgba(168,85,247,0.9)]"
                : "bg-amber-500 border-amber-200 text-[#02040a] shadow-[0_0_16px_rgba(245,158,11,0.9)]";

              return (
                <motion.div
                  key={m.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  {/* Top: Milestone Number Badge */}
                  <div className="mb-3 font-mono">
                    <span
                      className={`text-[11px] font-black tracking-[0.25em] px-2.5 py-0.5 rounded-full border ${
                        isFinal
                          ? "bg-red-500/20 text-red-400 border-red-500/40"
                          : "bg-white/[0.05] text-slate-300 border-white/15"
                      }`}
                    >
                      MILESTONE {m.number}
                    </span>
                  </div>

                  {/* Circular Node centered on the continuous track */}
                  <div className="relative my-2">
                    {/* Pulsing ring animation for live effect */}
                    <div
                      className={`absolute -inset-2 rounded-full animate-ping opacity-30 ${
                        isFinal ? "bg-red-500" : "bg-sky-400"
                      }`}
                    />
                    <div
                      className={`relative w-11 h-11 rounded-full border-2 flex items-center justify-center font-mono font-black text-sm transition-transform duration-300 group-hover:scale-110 ${nodeColor}`}
                    >
                      {isFinal ? "★" : m.number}
                    </div>
                  </div>

                  {/* Vertical Neon Stem connecting Node to Card */}
                  <div
                    className={`w-[2px] h-6 ${
                      isFinal
                        ? "bg-gradient-to-b from-red-500 to-transparent"
                        : "bg-gradient-to-b from-sky-400 to-transparent"
                    }`}
                  />

                  {/* Milestone Card */}
                  <div
                    className={`group relative w-full p-4 rounded-2xl bg-[#080e22]/90 backdrop-blur-md border transition-all duration-300 flex flex-col justify-between min-h-[260px] text-left select-none ${accentBorder}`}
                  >
                    {/* Cyber Corner Cuts */}
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-sky-400" />
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-red-500" />
                    <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-red-500" />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-sky-400" />

                    <div>
                      {/* Phase Label Pill */}
                      <div className="flex items-center justify-between mb-2 font-mono">
                        <span
                          className={`text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded ${
                            isFinal
                              ? "bg-red-500/20 text-red-300 border border-red-500/40"
                              : "bg-white/5 text-slate-300 border border-white/10"
                          }`}
                        >
                          {m.label}
                        </span>
                        {isFinal && (
                          <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                        )}
                      </div>

                      {/* Large High-Contrast Date Typography */}
                      <div className="mt-1 mb-3">
                        <div
                          className={`text-lg xl:text-xl font-black font-mono tracking-tight leading-tight uppercase ${
                            isFinal ? "text-amber-300 drop-shadow-[0_0_10px_rgba(252,211,77,0.5)]" : "text-white"
                          }`}
                        >
                          {m.date}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xs sm:text-sm font-black font-mono tracking-wide text-slate-100 uppercase leading-snug mb-2 group-hover:text-white transition-colors">
                        {m.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[11px] sm:text-xs text-slate-300 font-sans leading-relaxed">
                        {m.description}
                      </p>
                    </div>

                    {/* Bottom Status Footnote */}
                    <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[9px] font-mono font-bold text-slate-400 uppercase">
                      <span>{isFinal ? "GRAND FINALE" : `PHASE ${m.number}`}</span>
                      <span className={isFinal ? "text-red-400 font-black" : "text-sky-400"}>
                        {isFinal ? "🏆 CHAMPION" : "PROCEED →"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* MOBILE & TABLET VIEW: CLEAN VERTICAL TIMELINE (lg:hidden)        */}
        {/* ================================================================= */}
        <div className="block lg:hidden relative mt-10">
          {/* Vertical Glowing Continuous Line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-red-500 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />

          <div className="space-y-6 sm:space-y-8 pl-14 sm:pl-18">
            {milestones.map((m, idx) => {
              const isFinal = m.isGrandFinal || idx === milestones.length - 1;
              const accentBorder = isFinal
                ? "border-red-500/70 shadow-[0_0_25px_rgba(239,68,68,0.3)]"
                : "border-white/15 hover:border-sky-500/50";

              return (
                <motion.div
                  key={m.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col items-start"
                >
                  {/* Node on Vertical Track */}
                  <div className="absolute -left-14 sm:-left-18 top-3 flex items-center justify-center">
                    <div
                      className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center font-mono font-black text-xs sm:text-sm ${
                        isFinal
                          ? "bg-red-500 border-red-300 text-white shadow-[0_0_15px_rgba(239,68,68,1)]"
                          : "bg-cyan-500 border-cyan-200 text-[#02040a] shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                      }`}
                    >
                      {isFinal ? "★" : m.number}
                    </div>
                  </div>

                  {/* Milestone Card Container */}
                  <div
                    className={`w-full p-4 sm:p-5 rounded-2xl bg-[#080e22]/90 backdrop-blur-md border font-mono select-none relative overflow-hidden ${accentBorder}`}
                  >
                    {/* Header Row: Label & Milestone # */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[9px] sm:text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded ${
                          isFinal
                            ? "bg-red-500/20 text-red-300 border border-red-500/40"
                            : "bg-white/5 text-slate-300 border border-white/10"
                        }`}
                      >
                        {m.label}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">
                        MILESTONE {m.number}
                      </span>
                    </div>

                    {/* Large Date */}
                    <div
                      className={`text-base sm:text-xl font-black tracking-tight leading-tight uppercase mb-1.5 ${
                        isFinal ? "text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.5)]" : "text-white"
                      }`}
                    >
                      {m.date}
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-sm font-black tracking-wide text-slate-100 uppercase mb-2">
                      {m.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-300 font-sans leading-relaxed mb-3">
                      {m.description}
                    </p>

                    {/* Bottom Status */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase">
                      <span>{isFinal ? "FINAL ON-CAMPUS SPRINT" : "ONLINE & LAB GUIDANCE"}</span>
                      <span className={isFinal ? "text-red-400 font-black" : "text-cyan-400"}>
                        {isFinal ? "🏆 GRAND PRIZE" : "PROCEED →"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer Technical Note / Guidance Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center font-mono"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/10 text-[10px] sm:text-xs text-slate-400">
            <span className="text-emerald-400 font-bold">✓ HARDWARE & LAB ACCESS</span>
            <span className="text-slate-600">•</span>
            <span className="text-sky-400 font-bold">DEDICATED MENTORSHIP</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400 font-bold">SHIVALIK UNIVERSITY CAMPUS FINALS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonJourneyTimeline;
