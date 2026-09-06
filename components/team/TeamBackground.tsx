"use client";

import React from "react";
import Image from "next/image";

interface TeamBackgroundProps {
  mouseX?: number;
  mouseY?: number;
}

export const TeamBackground: React.FC<TeamBackgroundProps> = ({
  mouseX = 0,
  mouseY = 0,
}) => {
  // Parallax offsets
  const bgX = mouseX * 12;
  const bgY = mouseY * 8;
  const charX = mouseX * 22;
  const charY = mouseY * 12;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#02050e]">
      {/* 1. Primary Full-Screen High-Res City Backdrop */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out scale-105"
        style={{
          transform: `translate3d(${bgX}px, ${bgY}px, 0) scale(1.05)`,
        }}
      >
        <Image
          src="/images/team/team_custom_bg.png"
          alt="Cinematic Custom Team Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85 brightness-95 contrast-105"
        />
      </div>

      {/* 2. Spider-Man Figure on Distant Rooftop (Right Side) */}
      <div
        className="absolute bottom-6 right-2 sm:right-8 w-64 sm:w-80 h-96 sm:h-[480px] opacity-40 transition-transform duration-700 ease-out pointer-events-none mix-blend-screen"
        style={{
          transform: `translate3d(${-charX}px, ${-charY}px, 0)`,
        }}
      >
        <Image
          src="/images/hero/character.png"
          alt="Spider-Man Rooftop"
          fill
          sizes="320px"
          className="object-contain object-bottom drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]"
        />
      </div>

      {/* 3. Atmospheric Gradients & Dark Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02050e]/85 via-[#02050e]/50 to-[#02050e] opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#02050e]/70 via-transparent to-[#02050e]/70" />

      {/* 4. Red & Electric Blue Neon Atmospheric Spotlights */}
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-red-600/30 blur-[120px] transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${charX}px, ${charY}px, 0)`,
        }}
      />
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-sky-500/25 blur-[130px] transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${-charX}px, ${-charY}px, 0)`,
        }}
      />

      {/* 5. Subtle Spider-Web Grid Background Rays */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 mix-blend-screen"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="1000" y2="1000" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="6 6" />
        <line x1="1000" y1="0" x2="0" y2="1000" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="6 6" />
        <circle cx="500" cy="500" r="300" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="4 8" fill="none" />
        <circle cx="500" cy="500" r="450" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="4 8" fill="none" />
      </svg>
    </div>
  );
};

export default TeamBackground;
