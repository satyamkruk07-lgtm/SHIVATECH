"use client";

import React from "react";
import { motion } from "framer-motion";

export const QuantumRobotChoice: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/5 overflow-hidden">
      {/* Ambience Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-18">
          <div className="flex items-center space-x-2 text-xs tracking-[0.3em] uppercase text-red-400 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>SECTION 04 // HARDWARE ELIGIBILITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-orbitron">
            YOUR ROBOT. YOUR CHOICE.
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-4 font-sans tracking-wide leading-relaxed">
            Bring your own self-built robotic car or compete with a purchased robotic car. Both are fully eligible to enter the Quantum Drift arena.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-sky-400 to-red-500 rounded-full mt-6" />
        </div>

        {/* 2 Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Self-Built Robotic Car */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-red-950/20 via-[#040814] to-black border border-red-500/30 hover:border-red-500/60 transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.1)] relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all" />
            
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-md text-[10px] font-black tracking-widest uppercase bg-red-500/15 border border-red-500/30 text-red-400">
                OPTION 01 // CUSTOM ENGINEERING
              </span>
              <span className="text-2xl">🛠️</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-orbitron mb-3">
              SELF-BUILT ROBOTIC CAR
            </h3>

            <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
              Design, fabricate, and wire your custom chassis from scratch. Tune gear ratios for the high-speed Robo Race, tailor motor torque for Robo Soccer, and reinforce armor for the Robo War combat finale.
            </p>

            <div className="space-y-2.5 pt-6 border-t border-white/10 text-xs font-sans">
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="text-red-400 font-bold">✓</span>
                <span>Complete custom chassis & structural freedom</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="text-red-400 font-bold">✓</span>
                <span>Optimized weight balance & offensive/defensive attachments</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="text-red-400 font-bold">✓</span>
                <span>Custom motor drivers, microcontrollers, or RF setups</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Purchased Robotic Car */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-sky-950/20 via-[#040814] to-black border border-sky-500/30 hover:border-sky-500/60 transition-all duration-300 shadow-[0_0_30px_rgba(56,189,248,0.1)] relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all" />

            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-md text-[10px] font-black tracking-widest uppercase bg-sky-500/15 border border-sky-500/30 text-sky-400">
                OPTION 02 // READY-TO-RUN
              </span>
              <span className="text-2xl">⚡</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-orbitron mb-3">
              PURCHASED ROBOTIC CAR
            </h3>

            <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
              Enter with an off-the-shelf robotics kit or pre-assembled RC/robotic platform. Perfect for drivers who want to focus on piloting maneuvers, aggressive ring control, and blistering race pace.
            </p>

            <div className="space-y-2.5 pt-6 border-t border-white/10 text-xs font-sans">
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="text-sky-400 font-bold">✓</span>
                <span>Commercially purchased kits & platforms 100% eligible</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="text-sky-400 font-bold">✓</span>
                <span>Focus entirely on driver tactics, reaction speed, and agility</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="text-sky-400 font-bold">✓</span>
                <span>No prior fabrication workshop experience required</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Equal Ground HUD Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase font-orbitron">
              FAIR ARENA STANDARDS
            </span>
          </div>
          <span className="text-xs text-slate-400 font-sans">
            Whether built or bought, every bot qualifies under identical knockout rules across all 3 phases.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default QuantumRobotChoice;
