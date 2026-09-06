"use client";

import React from "react";

interface HolographicHandProps {
  mouseX?: number;
  mouseY?: number;
}

export default function HolographicHand({ mouseX = 0, mouseY = 0 }: HolographicHandProps) {
  // Subtle mouse parallax movement
  const offsetX = mouseX * 10;
  const offsetY = mouseY * 10;

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none"
      style={{
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* 1. Photorealistic Superhero Hand Image Layer */}
      <div className="relative w-full max-w-[1280px] h-full max-h-[850px] flex items-end justify-center">
        {/* Photorealistic Hand Asset */}
        <img
          src="/schedule/photorealistic_spider_hand.jpg"
          alt="Cinematic Superhero Hands"
          className="w-full h-full object-contain object-bottom filter drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] opacity-90 sm:opacity-95"
        />

        {/* 2. Projected Holographic Light Reflection Map on Hands */}
        {/* Cyan Projected Light Spill on Left Hand / Fingers */}
        <div
          className="absolute top-[20%] left-[22%] w-[320px] h-[320px] rounded-full bg-gradient-to-br from-cyan-400/40 via-sky-500/20 to-transparent blur-2xl pointer-events-none mix-blend-screen opacity-75 animate-pulse"
        />

        {/* Crimson Projected Light Spill on Right Hand / Fingers */}
        <div
          className="absolute top-[20%] right-[22%] w-[320px] h-[320px] rounded-full bg-gradient-to-bl from-red-500/40 via-red-600/20 to-transparent blur-2xl pointer-events-none mix-blend-screen opacity-75 animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Center Projected Holographic Back-Glow */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-sky-500/15 via-blue-600/10 to-red-500/15 blur-3xl opacity-80 pointer-events-none" />
      </div>
    </div>
  );
}
