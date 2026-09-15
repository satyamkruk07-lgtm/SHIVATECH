"use client";

import React from "react";
import { motion } from "framer-motion";

export const RobotChoice: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/5 overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="flex items-center space-x-2 text-xs tracking-[0.3em] uppercase text-red-400 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>SECTION 04 // VEHICLE ELIGIBILITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-orbitron">
            YOUR ROBOT. YOUR CHOICE.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mt-3 font-sans tracking-wide font-medium">
            BUILD IT. BUY IT. BRING IT.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-sky-400 to-red-500 rounded-full mt-6" />
        </div>

        {/* Two Visual Panels with Center Divider */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 lg:gap-0 items-center">
          {/* PANEL 01: BUILD YOUR OWN (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-red-500/10 via-white/[0.03] to-[#040814] border border-red-500/30 hover:border-red-500/70 shadow-[0_0_35px_rgba(239,68,68,0.15)] transition-all duration-300 relative group overflow-hidden"
          >
            {/* Corner Bracket */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />

            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded text-xs font-black tracking-[0.25em] text-red-400 bg-red-500/15 border border-red-500/40 uppercase">
                PANEL 01
              </span>
              <span className="text-2xl">🛠️</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase font-orbitron mb-3">
              BUILD YOUR OWN
            </h3>

            <p className="text-base sm:text-lg font-bold text-red-400 font-mono tracking-wider uppercase mb-4">
              SELF-BUILT ROBOTIC CAR
            </p>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              Design, fabricate, code, and tune your custom autonomous or RC robotic vehicle. Built by your team to compete across all 4 arena phases.
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 tracking-wider uppercase">
              <span>VEHICLE CLASS: CUSTOM</span>
              <span className="text-red-400 font-bold">ELIGIBLE ✓</span>
            </div>
          </motion.div>

          {/* CENTER DIVIDER: ONE ARENA / ONE JOURNEY (1 col) */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center py-4 lg:py-0">
            <div className="hidden lg:block w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="px-4 py-3 rounded-xl bg-black/80 border border-white/20 text-center shadow-lg backdrop-blur-md my-2">
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-red-400 block uppercase whitespace-nowrap">
                ONE ARENA
              </span>
              <div className="w-6 h-0.5 bg-slate-700 mx-auto my-1" />
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-sky-400 block uppercase whitespace-nowrap">
                ONE JOURNEY
              </span>
            </div>
            <div className="hidden lg:block w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>

          {/* PANEL 02: BRING A PURCHASED ROBOT (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-sky-500/10 via-white/[0.03] to-[#040814] border border-sky-500/30 hover:border-sky-500/70 shadow-[0_0_35px_rgba(56,189,248,0.15)] transition-all duration-300 relative group overflow-hidden"
          >
            {/* Corner Bracket */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400" />

            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded text-xs font-black tracking-[0.25em] text-sky-400 bg-sky-500/15 border border-sky-500/40 uppercase">
                PANEL 02
              </span>
              <span className="text-2xl">⚡</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase font-orbitron mb-3">
              BRING A PURCHASED ROBOT
            </h3>

            <p className="text-base sm:text-lg font-bold text-sky-400 font-mono tracking-wider uppercase mb-4">
              PURCHASED ROBOTIC CAR
            </p>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              No fabrication facilities? Bring any commercially available or pre-assembled robotic car chassis and focus entirely on precision driving and tactical strategy.
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 tracking-wider uppercase">
              <span>VEHICLE CLASS: COMMERCIAL</span>
              <span className="text-sky-400 font-bold">ELIGIBLE ✓</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RobotChoice;
