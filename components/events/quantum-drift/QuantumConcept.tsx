"use client";

import React from "react";
import { motion } from "framer-motion";

export const QuantumConcept: React.FC = () => {
  return (
    <section
      id="quantum-concept"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/5 overflow-hidden"
    >
      {/* Background Lighting Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Technical Header Label */}
        <div className="flex items-center space-x-3 mb-8 sm:mb-12">
          <span className="w-2 h-2 bg-red-500 rounded-sm" />
          <span className="text-xs tracking-[0.3em] uppercase text-slate-400 font-bold">
            SECTION 01 // EVENT CORE CONCEPT
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-red-500/40 via-white/10 to-transparent" />
        </div>

        {/* 2-Column Desktop Layout / Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Large typography / Event Statement (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-4"
          >
            <div className="inline-flex items-center self-start px-3 py-1 rounded-md text-[11px] font-bold tracking-[0.25em] text-red-400 bg-red-500/10 border border-red-500/25 mb-1">
              09 OCTOBER 2026
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.05] font-orbitron">
              ONE CAR.
              <br />
              <span className="text-red-500">THREE PHASES.</span>
              <br />
              <span className="text-sky-400">ONE FINAL CHAMPION.</span>
            </h2>

            <p className="text-slate-400 text-xs sm:text-sm font-sans tracking-wide uppercase mt-2">
              THE ULTIMATE TEST OF DRIVING SKILL, VEHICLE RELIABILITY & COMBAT RESILIENCE
            </p>
          </motion.div>

          {/* RIGHT: Short Event Explanation (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 backdrop-blur-md relative overflow-hidden">
              {/* Technical corner marks */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500/50" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400/50" />

              <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed font-normal">
                Bring your own robotic car or use a purchased robotic car and compete through three progressive challenges. Clear one phase to advance to the next.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 tracking-widest uppercase block">PROGRESSION RULE</span>
                  <span className="text-xs font-bold text-white tracking-wider uppercase">KNOCKOUT ADVANCEMENT</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 tracking-widest uppercase block">PLATFORM</span>
                  <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">INDOOR ARENA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuantumConcept;
