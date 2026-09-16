"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface QuantumHeroProps {
  onExploreClick?: () => void;
}

export const QuantumHero: React.FC<QuantumHeroProps> = ({ onExploreClick }) => {
  const scrollToExplore = () => {
    if (onExploreClick) {
      onExploreClick();
      return;
    }
    const el = document.getElementById("quantum-concept");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#02040a] font-mono pt-20 pb-16">
      {/* 1. CINEMATIC BACKGROUND WITH DEPTH & LIGHTWEIGHT PARALLAX */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/events/quantum-drift/hero.jpg"
          alt="Quantum Drift Arena"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Cinematic Vignette & Radial Atmospheric Glow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/70 to-[#02040a]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02040a]/90 via-transparent to-[#02040a]/90" />
        
        {/* Subtle Dual-color Arena Accent Glows (Crimson & Electric Blue) */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[140px]" />

        {/* Technical Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* 2. HUD CORNER BRACKETS & METADATA OVERLAYS */}
      <div className="absolute top-28 left-6 sm:left-12 z-10 hidden sm:flex items-center space-x-2 text-[10px] tracking-[0.3em] text-slate-500 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span>ARENA SECTOR // LIVE 2026</span>
      </div>
      <div className="absolute top-28 right-6 sm:right-12 z-10 hidden sm:flex items-center space-x-2 text-[10px] tracking-[0.3em] text-sky-400 uppercase">
        <span>GRID LATENCY: 0.04ms</span>
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
      </div>

      {/* 3. HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6"
        >
          <span className="px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-red-400 bg-red-500/10 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
            ROBOTICS ARENA CHAMPIONSHIP
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-sky-300 bg-sky-500/10 border border-sky-500/25">
            09 OCTOBER 2026
          </span>
        </motion.div>

        {/* Main Title: QUANTUM DRIFT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-3"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] font-orbitron">
            QUANTUM <span className="bg-gradient-to-r from-red-500 via-rose-400 to-sky-400 bg-clip-text text-transparent">DRIFT</span>
          </h1>
          {/* Subtle underglow line */}
          <div className="w-3/4 max-w-md h-0.5 mx-auto mt-2 bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
        </motion.div>

        {/* Subheading: BUILD • DRIVE • SURVIVE */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-[0.35em] sm:tracking-[0.45em] text-slate-200 uppercase mb-4"
        >
          BUILD <span className="text-red-500">•</span> DRIVE <span className="text-sky-400">•</span> SURVIVE
        </motion.h2>

        {/* Small supporting label: 3 PHASES • 1 FINAL CHAMPION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span>3 PHASES</span>
          <span className="text-slate-600">•</span>
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          <span>1 FINAL CHAMPION</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/register?event=quantum-drift"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold tracking-[0.2em] text-xs sm:text-sm uppercase text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-[0_0_35px_rgba(239,68,68,0.4)] border border-red-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2 group"
          >
            <span>REGISTER NOW</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <button
            onClick={scrollToExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.1)] transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>EXPLORE THE ARENA</span>
            <span className="text-sky-400">↓</span>
          </button>
        </motion.div>

        {/* Quick Spec Highlights Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 w-full max-w-3xl pt-6 border-t border-white/10"
        >
          <div className="flex flex-col items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="text-[10px] text-slate-500 tracking-wider uppercase">DATE</span>
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">09 OCT 2026</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="text-[10px] text-slate-500 tracking-wider uppercase">CHALLENGES</span>
            <span className="text-xs sm:text-sm font-bold text-red-400 tracking-wide">3 PHASES</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="text-[10px] text-slate-500 tracking-wider uppercase">VEHICLE TYPE</span>
            <span className="text-xs sm:text-sm font-bold text-sky-400 tracking-wide">BUILT / PURCHASED</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="text-[10px] text-slate-500 tracking-wider uppercase">OUTCOME</span>
            <span className="text-xs sm:text-sm font-bold text-amber-300 tracking-wide">1 CHAMPION</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuantumHero;
