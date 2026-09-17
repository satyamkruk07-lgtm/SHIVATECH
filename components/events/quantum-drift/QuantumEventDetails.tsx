"use client";

import React from "react";
import { motion } from "framer-motion";

export const QuantumEventDetails: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/5 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 text-xs tracking-[0.3em] uppercase text-sky-400 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span>SECTION 06 // OFFICIAL PARAMETERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-orbitron">
            EVENT DETAILS
          </h2>

          <p className="text-sm text-slate-400 max-w-xl mt-3 font-sans tracking-wide">
            Official competition specifications and participation parameters for Quantum Drift.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-sky-400 to-red-500 rounded-full mt-6" />
        </div>

        {/* 4 Premium Metadata Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Prize Pool */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-amber-500/10 via-white/[0.02] to-black border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.1)] relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-amber-400 uppercase">
                PRIZE POOL
              </span>
              <span className="text-xl">🏆</span>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black font-orbitron tracking-tight text-white group-hover:text-amber-300 transition-colors">
                UPTO ₹35,000
              </div>
              <p className="text-xs text-slate-400 font-sans mt-2">
                Championship rewards & tournament pool
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-amber-400/80">
              <span>TOTAL REWARD POOL</span>
              <span>// REWARD</span>
            </div>
          </motion.div>

          {/* Card 2: Registration Fee (Visually paired with Team Size) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-red-500/15 via-white/[0.02] to-black border border-red-500/40 hover:border-red-500/70 transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.15)] relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-red-400 uppercase">
                REGISTRATION FEE
              </span>
              <span className="text-xl">💳</span>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black font-orbitron tracking-tight text-red-400 group-hover:text-red-300 transition-colors">
                ₹300 / TEAM
              </div>
              <p className="text-xs text-slate-300 font-sans mt-2 font-medium">
                Fixed entry fee for the entire team
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-red-400/90 font-bold">
              <span>NOT PER MEMBER</span>
              <span>₹300 PER TEAM</span>
            </div>
          </motion.div>

          {/* Card 3: Team Size (Adjacent to Fee for instant understanding) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-sky-500/10 via-white/[0.02] to-black border border-sky-500/30 hover:border-sky-500/60 transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.1)] relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-sky-400 uppercase">
                TEAM SIZE
              </span>
              <span className="text-xl">👥</span>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black font-orbitron tracking-tight text-white group-hover:text-sky-300 transition-colors">
                1–4 MEMBERS
              </div>
              <p className="text-xs text-slate-400 font-sans mt-2">
                Solo pilot or squad of up to 4 members
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-sky-400/80">
              <span>FLEXIBLE SQUAD</span>
              <span>1 TO 4 PILOTS</span>
            </div>
          </motion.div>

          {/* Card 4: Event Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-emerald-500/10 via-white/[0.02] to-black border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.1)] relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">
                EVENT DATE
              </span>
              <span className="text-xl">📅</span>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black font-orbitron tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                09 OCTOBER 2026
              </div>
              <p className="text-xs text-slate-400 font-sans mt-2">
                Main Robotics Arena, Shivalik University
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-emerald-400/80">
              <span>DAY 3 ARENA</span>
              <span>// SCHEDULED</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuantumEventDetails;
