"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SponsorsSection() {
  return (
    <section className="relative w-full bg-[#030612] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-white/10 select-none">
      {/* Ambient Cyber Neon Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-sky-400/30 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
            SHIVATECH 2026 OFFICIAL PARTNER
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight uppercase mb-3">
          OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-red-500 drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]">SPONSOR</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-slate-400 uppercase max-w-xl mb-12">
          POWERED BY OUR OFFICIAL PLATFORM PARTNER
        </p>

        {/* Single Featured Sponsor Showcase: Unstop */}
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl p-8 sm:p-12 rounded-3xl bg-[#080d22]/90 border border-sky-500/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(56,189,248,0.2),0_0_30px_rgba(239,68,68,0.15)] flex flex-col items-center justify-center group"
        >
          {/* Cyber Corner Tech Cut Notches */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />

          {/* Top Subtle Glow Line */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-70" />

          {/* Partner Role Pill */}
          <div className="mb-6 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/40 backdrop-blur-md">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
              OFFICIAL PLATFORM & COMMUNITY PARTNER
            </span>
          </div>

          {/* Official Unstop Logo Container (Placed directly above the Unstop Name) */}
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md bg-white/95 hover:bg-white rounded-2xl p-6 sm:p-8 flex items-center justify-center shadow-[0_0_35px_rgba(28,73,128,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.5)] transition-all duration-300 group-hover:scale-105 cursor-pointer"
            title="Visit Unstop"
          >
            <div className="relative w-56 sm:w-72 h-16 sm:h-20 flex items-center justify-center">
              <Image
                src="/sponsors/unstop-seeklogo.svg"
                alt="Unstop Official Logo"
                fill
                sizes="(max-width: 768px) 240px, 320px"
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Sponsor Name: Unstop */}
          <h3 className="text-2xl sm:text-4xl font-black font-mono tracking-widest text-white uppercase mt-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] group-hover:text-sky-300 transition-colors">
            UNSTOP
          </h3>

          {/* Tagline */}
          <div className="text-xs sm:text-sm font-mono text-red-400 font-bold tracking-[0.2em] uppercase mt-1">
            CONNECTING TALENT, COLLEGES & RECRUITERS
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-300 font-sans tracking-wide max-w-md text-center mt-3 leading-relaxed">
            India&apos;s leading platform for hackathons, coding contests, hiring challenges, and student opportunities empowering the next generation of innovators.
          </p>

          {/* Link Hint */}
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-sky-400 hover:text-white uppercase tracking-wider transition-colors"
          >
            <span>EXPLORE OPPORTUNITIES</span>
            <span>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
