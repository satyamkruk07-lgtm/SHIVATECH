"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const QuantumCTA: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono text-center overflow-hidden border-t border-white/5">
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/events/quantum-drift/hero.jpg"
          alt="Quantum Drift Arena Final CTA Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/90 to-[#02040a]" />
        
        {/* Accent Dual Glows */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/15 rounded-full blur-[140px]" />
      </div>

      {/* 2. CTA CONTENT CONTAINER */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Technical Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-[0.25em] uppercase text-red-400 bg-red-500/10 border border-red-500/30 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>ARENA REGISTRATION // 09 OCTOBER 2026</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-orbitron leading-tight mb-4"
        >
          READY TO ENTER <br />
          <span className="bg-gradient-to-r from-red-500 via-rose-400 to-sky-400 bg-clip-text text-transparent">
            THE DRIFT?
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-extrabold tracking-[0.25em] text-slate-300 uppercase mb-8"
        >
          <span>FOUR PHASES</span>
          <span className="text-red-500">•</span>
          <span>ONE ARENA</span>
          <span className="text-sky-400">•</span>
          <span>ONE FINAL CHAMPION</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs sm:text-sm text-slate-400 max-w-lg font-sans leading-relaxed mb-10"
        >
          Compete with your self-built or purchased robotic car on 09 October 2026 at the Shivalik University Robotics Arena.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/register?event=quantum-drift"
            className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold tracking-[0.2em] text-xs sm:text-sm uppercase text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-[0_0_35px_rgba(239,68,68,0.5)] border border-red-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            REGISTER NOW →
          </Link>

          <Link
            href="/events"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 transition-all duration-200"
          >
            ← BACK TO EVENTS
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default QuantumCTA;
