"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const FunActivitiesHero: React.FC = () => {
  const scrollToActivities = () => {
    const el = document.getElementById("activities-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#02040a] font-mono pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* 1. Atmospheric Ambient Glows (Vibrant Magenta & Cyan for Fun & Games) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. HUD Badges and Breadcrumbs */}
      <div className="absolute top-28 left-6 sm:left-12 z-10 hidden sm:flex items-center space-x-2 text-[10px] tracking-[0.3em] text-slate-400 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        <span>FESTIVAL ARENA // SPECIAL EDITION</span>
      </div>
      <div className="absolute top-28 right-6 sm:right-12 z-10 hidden sm:flex items-center space-x-2 text-[10px] tracking-[0.3em] text-cyan-400 uppercase">
        <span>STATUS: CONFIRMED</span>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
      </div>

      {/* 3. Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link
            href="/events"
            className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors group px-3.5 py-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02]"
          >
            <span className="text-purple-400 group-hover:-translate-x-1 transition-transform">←</span>
            <span>BACK TO ALL EVENTS</span>
          </Link>
        </motion.div>

        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
        >
          <span className="px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-purple-300 bg-purple-500/10 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            CREATIVE & ESPORTS ZONE
          </span>
          <span className="px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            2 EXCLUSIVE ACTIVITIES
          </span>
        </motion.div>

        {/* Main Title: FUN ACTIVITIES & GAMES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mb-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] font-orbitron leading-tight">
            FUN ACTIVITIES <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              & GAMES
            </span>
          </h1>
          {/* Subtle Glow Accent Divider */}
          <div className="w-48 sm:w-72 h-1 mx-auto mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
        </motion.div>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-[0.15em] sm:tracking-[0.25em] text-slate-200 uppercase font-orbitron max-w-3xl mb-5"
        >
          &quot;Where creativity meets competition.&quot;
        </motion.p>

        {/* Registration Fee Reminder Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/40 text-xs sm:text-sm font-mono font-bold text-pink-300 tracking-wider uppercase shadow-[0_0_25px_rgba(236,72,153,0.25)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            <span>REGISTRATION FEE — ₹50 / PER PERSON</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/register?event=fun-activities-and-games"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold tracking-[0.2em] text-xs sm:text-sm uppercase text-white bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_35px_rgba(168,85,247,0.4)] border border-purple-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>REGISTER NOW (₹50 / PERSON)</span>
            <span className="text-cyan-300">→</span>
          </Link>

          <button
            onClick={scrollToActivities}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>EXPLORE THE 2 ACTIVITIES</span>
            <span className="text-cyan-300">↓</span>
          </button>

          <Link
            href="/events"
            className="w-full sm:w-auto py-4 px-6 rounded-xl font-semibold tracking-wider text-xs uppercase text-slate-400 hover:text-white border border-white/15 hover:border-white/30 bg-white/[0.02] transition-all flex items-center justify-center"
          >
            <span>← ALL EVENTS</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FunActivitiesHero;
