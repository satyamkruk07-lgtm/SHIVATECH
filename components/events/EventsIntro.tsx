"use client";

import React from "react";
import { motion } from "framer-motion";

export const EventsIntro: React.FC = () => {
  return (
    <section
      id="events-intro"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] text-center overflow-hidden border-b border-white/[0.06]"
    >
      {/* Subtle Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-red-600/[0.07] rounded-full blur-[120px] pointer-events-none" />

      {/* Cybernetic Accent Line */}
      <div className="w-full max-w-xs mx-auto flex items-center justify-center space-x-3 mb-6">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-red-500/60" />
        <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-sky-400/60" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Section Heading: OUR EVENTS */}
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl font-black font-mono tracking-wider text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          OUR EVENTS
        </motion.h2>

        {/* Subheading: Choose your challenge. Build what matters. */}
        <motion.p
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-sm sm:text-lg font-sans text-slate-400 tracking-wide max-w-xl leading-relaxed"
        >
          Choose your challenge. Build what matters.
        </motion.p>
      </div>
    </section>
  );
};

export default EventsIntro;
