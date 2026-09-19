"use client";

import React from "react";
import { motion } from "framer-motion";

export const FAQHero: React.FC = () => {
  return (
    <section className="relative w-full pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono overflow-hidden">
      {/* Background Neon Lighting Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[250px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold tracking-[0.25em] text-red-400 uppercase mb-6 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>SHIVA INNOVEX / FAQ</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-orbitron leading-[1.08] mb-6 drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]"
        >
          FREQUENTLY ASKED <br />
          <span className="bg-gradient-to-r from-red-500 via-rose-400 to-sky-400 bg-clip-text text-transparent">
            QUESTIONS
          </span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-300 font-sans max-w-2xl leading-relaxed tracking-wide mb-8"
        >
          Everything you need to know before participating in SHIVA INNOVEX events.
        </motion.p>

        {/* Technical decorative dividing line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-32 h-1 bg-gradient-to-r from-red-500 via-white/80 to-sky-400 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.4)]"
        />
      </div>
    </section>
  );
};

export default FAQHero;
