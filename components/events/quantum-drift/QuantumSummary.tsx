"use client";

import React from "react";
import { motion } from "framer-motion";

const summarySpecs = [
  {
    label: "EVENT NAME",
    value: "QUANTUM DRIFT",
    highlight: "text-white",
  },
  {
    label: "DATE OF COMPETITION",
    value: "09 OCTOBER 2026",
    highlight: "text-red-400 font-bold",
  },
  {
    label: "CORE FORMAT",
    value: "THREE PROGRESSIVE PHASES",
    highlight: "text-sky-400 font-bold",
  },
  {
    label: "ELIGIBLE VEHICLES",
    value: "SELF-BUILT OR PURCHASED ROBOTIC CAR",
    highlight: "text-slate-200",
  },
  {
    label: "QUALIFICATION RULE",
    value: "PASS CURRENT PHASE TO ADVANCE",
    highlight: "text-emerald-400",
  },
  {
    label: "CHAMPIONSHIP STAGE",
    value: "PHASE 03 ROBO RACE",
    highlight: "text-amber-300 font-bold",
  },
];

export const QuantumSummary: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/5 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <div className="flex items-center space-x-2 text-xs tracking-[0.3em] uppercase text-red-400 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>SECTION 05 // TECHNICAL SPECIFICATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-orbitron">
            EVENT SUMMARY
          </h2>

          <p className="text-sm text-slate-400 max-w-xl mt-3 font-sans tracking-wide">
            Official parameters and progression structure for Quantum Drift.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-sky-400 to-red-500 rounded-full mt-6" />
        </div>

        {/* 1. HUD DATA GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-[#030612] overflow-hidden shadow-2xl relative"
        >
          {/* HUD Corner accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-400" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-400" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500" />

          <div className="divide-y divide-white/10">
            {summarySpecs.map((item, idx) => (
              <div
                key={item.label}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-slate-500">
                    // 0{idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm tracking-wider uppercase text-slate-400 font-semibold">
                    {item.label}
                  </span>
                </div>

                <div className={`text-sm sm:text-base tracking-wide uppercase ${item.highlight}`}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Progression Strip Footnote */}
          <div className="p-6 bg-black/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
              CONFIRMED PROGRESSION FLOW:
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-white tracking-wider">
              <span className="px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                ROBO SOCCER
              </span>
              <span className="text-slate-500">→</span>
              <span className="px-2.5 py-1 rounded bg-red-500/15 text-red-400 border border-red-500/30">
                ROBO WAR
              </span>
              <span className="text-slate-500">→</span>
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                ROBO RACE
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuantumSummary;
