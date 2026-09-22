"use client";

import React from "react";
import { motion } from "framer-motion";

export const EventsFinalCTA: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#02040a] text-center overflow-hidden border-t border-white/[0.06]">
      {/* Central Red-Blue Cyber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[280px] bg-gradient-to-r from-red-600/10 via-sky-600/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Top Tag */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.3em] text-red-400 uppercase px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 mb-4"
        >
          // SHIVATECH 2026 FESTIVAL
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight text-white uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-4 leading-tight"
        >
          IMAGINE. INNOVATE. BUILD. IMPACT.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base font-sans text-slate-300 max-w-xl leading-relaxed"
        >
          Join over 1,000+ student innovators, 100+ teams, industry experts, and venture leaders across 5 power-packed days at Shivalik University.
        </motion.p>
      </div>
    </section>
  );
};

export default EventsFinalCTA;
