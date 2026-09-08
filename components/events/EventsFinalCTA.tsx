"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const EventsFinalCTA: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#02040a] via-[#050b18] to-[#02040a] overflow-hidden text-center border-b border-white/[0.06]">
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-r from-red-600/15 via-sky-500/15 to-red-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Cybernetic Accent Line */}
      <div className="w-full max-w-sm mx-auto flex items-center justify-center space-x-4 mb-6">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-red-500/60 to-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-red-500 to-sky-400 shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-sky-400/60 to-sky-400" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Label Tag */}
        <motion.span
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono font-bold tracking-[0.3em] text-red-400 uppercase mb-4"
        >
          SHIVATECH 2026 • REGISTRATION OPEN
        </motion.span>

        {/* Heading: READY TO ENTER THE FUTURE? */}
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono tracking-wider text-white uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.25)] leading-tight"
        >
          READY TO ENTER THE FUTURE?
        </motion.h2>

        {/* Subheading: Choose your event. Build. Compete. Create. */}
        <motion.p
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-5 text-sm sm:text-lg font-sans text-slate-300 tracking-wide max-w-xl leading-relaxed"
        >
          Choose your event. Build. Compete. Create.
        </motion.p>

        {/* Primary CTA Button: REGISTER NOW */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10"
        >
          <Link
            href="/register"
            className="group relative inline-flex items-center space-x-3 px-8 sm:px-12 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-sky-600 hover:from-red-500 hover:to-sky-500 text-white font-mono font-black text-sm sm:text-base uppercase tracking-widest shadow-[0_0_35px_rgba(239,68,68,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>REGISTER NOW</span>
            <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsFinalCTA;
