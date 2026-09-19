"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const FAQCTA: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/10 overflow-hidden text-center">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Small Label */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-bold tracking-[0.25em] text-red-400 uppercase mb-5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>DIRECT SUPPORT & DISCOVERY</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-orbitron mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
          STILL HAVE QUESTIONS?
        </h2>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl leading-relaxed mb-10">
          Explore the complete event details before participating.
        </p>

        {/* 2 Buttons: EXPLORE EVENTS and CONTACT US */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/events"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold tracking-[0.18em] text-xs sm:text-sm uppercase text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-[0_0_35px_rgba(239,68,68,0.4)] border border-red-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>EXPLORE EVENTS</span>
            <span>→</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold tracking-[0.18em] text-xs sm:text-sm uppercase text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>CONTACT US</span>
            <span className="text-sky-400">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQCTA;
