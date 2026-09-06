"use client";

import React from "react";
import { motion } from "framer-motion";

interface Sponsor {
  name: string;
  category: "TITLE" | "GOLD" | "PARTNER";
  logoText: string;
  subText: string;
  color: string;
}

const sponsorsList: Sponsor[] = [
  {
    name: "NVIDIA",
    category: "TITLE",
    logoText: "NVIDIA",
    subText: "Official AI & GPU Computing Partner",
    color: "from-emerald-400 to-green-500",
  },
  {
    name: "GOOGLE CLOUD",
    category: "TITLE",
    logoText: "Google Cloud",
    subText: "Cloud Infrastructure Partner",
    color: "from-blue-400 to-red-500",
  },
  {
    name: "MICROSOFT",
    category: "TITLE",
    logoText: "Microsoft",
    subText: "Developer Ecosystem Partner",
    color: "from-sky-400 to-blue-600",
  },
  {
    name: "INTEL",
    category: "GOLD",
    logoText: "intel",
    subText: "Hardware & Semiconductor Partner",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "RED BULL",
    category: "GOLD",
    logoText: "RedBull",
    subText: "Official Energy Partner",
    color: "from-red-500 to-yellow-400",
  },
  {
    name: "RAZER",
    category: "GOLD",
    logoText: "RAZER",
    subText: "Gaming & Esports Partner",
    color: "from-green-400 to-emerald-600",
  },
  {
    name: "GITHUB",
    category: "PARTNER",
    logoText: "GitHub",
    subText: "Open Source Partner",
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "VERCEL",
    category: "PARTNER",
    logoText: "▲ Vercel",
    subText: "Deployment & Web Partner",
    color: "from-slate-200 to-white",
  },
  {
    name: "AWS",
    category: "PARTNER",
    logoText: "AWS",
    subText: "Cloud & Startup Partner",
    color: "from-amber-400 to-orange-500",
  },
];

export default function SponsorsSection() {
  return (
    <section className="relative w-full bg-[#030612] text-white py-24 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-white/10 select-none">
      {/* Ambient Cyber Neon Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3">
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
            SHIVATECH 2026 PARTNERS
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase mb-2">
          OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-sky-400 drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]">SPONSORS</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-slate-400 uppercase max-w-2xl mb-12">
          POWERED BY INDUSTRY LEADERS & INNOVATORS
        </p>

        {/* Title Sponsors Category */}
        <div className="w-full mb-12">
          <div className="text-[11px] font-mono font-bold text-red-500 tracking-[0.3em] uppercase mb-6 flex items-center justify-center space-x-3">
            <div className="h-[1px] w-12 bg-red-500/50" />
            <span>TITLE SPONSORS</span>
            <div className="h-[1px] w-12 bg-red-500/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorsList
              .filter((s) => s.category === "TITLE")
              .map((sponsor) => (
                <motion.div
                  key={sponsor.name}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative p-6 sm:p-8 rounded-2xl bg-[#080d22]/80 border border-red-500/40 backdrop-blur-xl shadow-[0_0_25px_rgba(239,68,68,0.2)] hover:border-red-500 hover:shadow-[0_0_35px_rgba(239,68,68,0.5)] flex flex-col items-center justify-center group"
                >
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-red-500" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-sky-400" />

                  <span className={`text-2xl sm:text-3xl font-black font-mono tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${sponsor.color} drop-shadow-md group-hover:scale-105 transition-transform`}>
                    {sponsor.logoText}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase mt-2">
                    {sponsor.subText}
                  </span>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Gold & Partners Grid */}
        <div className="w-full mb-12">
          <div className="text-[11px] font-mono font-bold text-sky-400 tracking-[0.3em] uppercase mb-6 flex items-center justify-center space-x-3">
            <div className="h-[1px] w-12 bg-sky-400/50" />
            <span>GOLD & ECOSYSTEM PARTNERS</span>
            <div className="h-[1px] w-12 bg-sky-400/50" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sponsorsList
              .filter((s) => s.category !== "TITLE")
              .map((sponsor) => (
                <motion.div
                  key={sponsor.name}
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ duration: 0.25 }}
                  className="p-4 rounded-xl bg-[#060a1a]/70 border border-white/10 hover:border-sky-400/60 backdrop-blur-md flex flex-col items-center justify-center group"
                >
                  <span className={`text-lg sm:text-xl font-bold font-mono tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${sponsor.color}`}>
                    {sponsor.logoText}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 tracking-tight mt-1 line-clamp-1">
                    {sponsor.subText}
                  </span>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-4 inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <span className="text-xs font-mono text-slate-300 font-bold uppercase tracking-wider">
            WANT TO PARTNER WITH SHIVATECH 2026?
          </span>
          <a
            href="mailto:sponsors@shivatech2026.com"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-mono text-xs font-bold tracking-wider uppercase hover:from-red-500 hover:to-sky-500 transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          >
            BECOME A SPONSOR →
          </a>
        </div>
      </div>
    </section>
  );
}
