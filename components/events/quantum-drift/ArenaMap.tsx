"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const arenaZones = [
  {
    id: "zone-1",
    code: "ZONE 01",
    title: "ROBO SOCCER",
    type: "TURF ARENA",
    tagline: "High-Agility Maneuvering & Ball Control",
    coords: "NW SECTOR",
    accent: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
    glow: "rgba(16,185,129,0.3)",
  },
  {
    id: "zone-2",
    code: "ZONE 02",
    title: "ROBO WAR",
    type: "COMBAT PIT",
    tagline: "Reinforced Hazard & Clashing Ring",
    coords: "SE SECTOR",
    accent: "text-red-400 border-red-500/40 bg-red-500/10",
    glow: "rgba(239,68,68,0.3)",
  },
  {
    id: "zone-3",
    code: "ZONE 03",
    title: "ROBO RACE",
    type: "HIGH-SPEED CIRCUIT",
    tagline: "Grand Finale Speed & Drifting Track",
    coords: "SW SECTOR",
    accent: "text-amber-300 border-amber-500/40 bg-amber-500/10",
    glow: "rgba(245,158,11,0.3)",
  },
];

export const ArenaMap: React.FC = () => {
  const [activeZone, setActiveZone] = useState<string>("zone-1");

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/5 overflow-hidden">
      {/* Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="flex items-center space-x-2 text-xs tracking-[0.3em] uppercase text-sky-400 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span>SECTION 04 // FACILITY LAYOUT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-orbitron">
            THE ARENA
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3 font-sans tracking-wide">
            THREE CHALLENGES. ONE ARENA.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-sky-400 to-red-500 rounded-full mt-6" />
        </div>

        {/* 1. TACTICAL ARENA BLUEPRINT VISUAL CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#030612] shadow-[0_0_50px_rgba(0,0,0,0.8)] mb-8"
        >
          {/* Top HUD Status Bar */}
          <div className="p-4 sm:p-5 bg-black/60 border-b border-white/10 flex items-center justify-between text-xs backdrop-blur-md">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="font-bold tracking-[0.2em] text-white uppercase">
                QUANTUM DRIFT // ARENA BLUEPRINT
              </span>
            </div>
            <div className="hidden sm:flex items-center space-x-6 text-[11px] text-slate-400">
              <span>FACILITY: SHIVALIK TECH LAB</span>
              <span>GRID: 3 CONNECTED ZONES</span>
              <span className="text-sky-400">STATUS: READY</span>
            </div>
          </div>

          {/* Blueprint Visual Representation */}
          <div className="relative w-full aspect-[16/9] min-h-[300px] sm:min-h-[420px] lg:min-h-[500px]">
            <Image
              src="/events/quantum-drift/arena-concept.jpg"
              alt="Quantum Drift Arena Map Blueprint"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center opacity-85"
            />
            {/* Blueprint Grid Lines Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent pointer-events-none" />

            {/* Central Arena Conflux Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-black/80 border border-sky-400/50 shadow-[0_0_25px_rgba(56,189,248,0.35)] backdrop-blur-md text-center pointer-events-none">
              <span className="text-[10px] tracking-[0.25em] text-red-400 font-bold block">
                CENTRAL NEXUS
              </span>
              <span className="text-xs sm:text-sm font-black tracking-widest text-white uppercase font-orbitron">
                QUANTUM DRIFT
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2. INTERACTIVE ZONE CARDS STRIP */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {arenaZones.map((zone) => {
            const isSelected = activeZone === zone.id;

            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`p-5 rounded-xl text-left font-mono transition-all duration-300 relative border ${
                  isSelected
                    ? "bg-white/[0.08] border-white/40 shadow-lg scale-[1.02]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
                style={{
                  boxShadow: isSelected ? `0 0 25px ${zone.glow}` : undefined,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black tracking-wider uppercase border ${zone.accent}`}>
                    {zone.code}
                  </span>
                  <span className="text-[10px] text-slate-500 tracking-wider uppercase">
                    {zone.coords}
                  </span>
                </div>

                <h4 className="text-base font-black tracking-tight text-white uppercase font-orbitron mb-1">
                  {zone.title}
                </h4>

                <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase block mb-2">
                  {zone.type}
                </span>

                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {zone.tagline}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArenaMap;
