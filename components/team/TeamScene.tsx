"use client";

import React, { useState } from "react";
import TeamBackground from "./TeamBackground";
import TeamCard from "./TeamCard";
import { facultyCoordinators, studentCoordinators } from "@/data/team";

export default function TeamScene() {
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  return (
    <main
      className="relative w-full min-h-screen bg-[#02050e] text-white overflow-x-hidden selection:bg-red-600 selection:text-white pt-24 pb-20"
      onMouseMove={handleMouseMove}
    >
      {/* 1. CINEMATIC FUTURISTIC CITY SKYLINE & SPIDER ATMOSPHERE */}
      <TeamBackground mouseX={mouseOffset.x} mouseY={mouseOffset.y} />

      {/* 2. HERO / PAGE INTRODUCTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-8 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start max-w-3xl">
          {/* Cyber Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-red-500/30 backdrop-blur-md mb-3 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <svg className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" viewBox="0 0 24 24">
              <path d="M12 2a2 2 0 0 1 2 2v2.1c2.8.5 5 3 5 6 0 1.2-.4 2.3-1 3.2l2.8 2.8-1.4 1.4-2.7-2.7c-.8.6-1.7 1-2.7 1.2V20h-4v-2c-1 0-1.9-.4-2.7-1L4.3 19.7l-1.4-1.4 2.8-2.8C5.1 14.6 4.7 13.5 4.7 12.3c0-3 2.2-5.5 5-6V4a2 2 0 0 1 2.3-2z" />
            </svg>
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              SHIVATECH 2026 OFFICIAL CREW
            </span>
          </div>

          {/* Large Title: OUR TEAM */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-mono tracking-wider uppercase leading-tight drop-shadow-[0_0_30px_rgba(239,68,68,0.45)]">
            <span className="text-white">OUR </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-pink-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">
              TEAM
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-xs sm:text-sm font-mono font-bold tracking-[0.3em] text-slate-300 uppercase mt-2 mb-2">
            THE MINDS BEHIND THE MOVEMENT
          </div>

          {/* Short Description */}
          <p className="text-sm text-slate-300/80 font-sans tracking-wide max-w-xl leading-relaxed">
            A passionate coalition of faculty visionaries, student creators, engineers, and organizers working in sync to power SHIVATECH 2026.
          </p>
        </div>
      </div>

      {/* SECTION 1: FACULTY COORDINATORS */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-14 sm:mt-18">
        <div className="flex flex-col items-center sm:items-start mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              FACULTY LEADERSHIP
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono tracking-wider uppercase text-white drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            FACULTY <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">COORDINATORS</span>
          </h2>
          <div className="h-[2px] w-28 bg-gradient-to-r from-amber-400 to-transparent mt-2" />
        </div>

        {/* 3 Faculty Cards in balanced 3-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {facultyCoordinators.map((member) => (
            <TeamCard key={member.id} member={member} isFaculty={true} />
          ))}
        </div>
      </section>

      {/* SECTION 2: STUDENT COORDINATORS (Strictly 4 per row on desktop) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 sm:mt-24">
        <div className="flex flex-col items-center sm:items-start mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              EXECUTIVE & TECHNICAL COUNCIL
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono tracking-wider uppercase text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
            STUDENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-sky-400">COORDINATORS</span>
          </h2>
          <div className="h-[2px] w-28 bg-gradient-to-r from-red-500 to-transparent mt-2" />
        </div>

        {/* 10 Student Cards in 4-columns Grid: 4 in row 1, 4 in row 2, 2 in row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {studentCoordinators.map((member) => (
            <TeamCard key={member.id} member={member} isFaculty={false} />
          ))}
        </div>
      </section>

      {/* FOOTER DECORATION: SPIDER EMBLEM & TAGLINE */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-20 flex flex-col items-center justify-center text-center font-mono">
        <div className="w-full flex items-center justify-center space-x-4 mb-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-red-500/60 to-red-500" />
          <div className="relative w-8 h-8 flex items-center justify-center text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]">
            <svg className="w-7 h-7 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M12 2L15 8L20 9L16 14L17 20L12 17L7 20L8 14L4 9L9 8L12 2Z" />
              <circle cx="12" cy="12" r="3" fill="#ef4444" />
            </svg>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-sky-400/60 to-sky-400" />
        </div>
        <div className="text-[11px] sm:text-xs font-bold tracking-[0.35em] text-slate-300 uppercase">
          DIFFERENT SKILLS <span className="text-red-500 font-extrabold mx-1.5">/</span> ONE VISION
        </div>
      </div>
    </main>
  );
}
