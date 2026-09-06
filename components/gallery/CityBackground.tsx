"use client";

import React from "react";
import ParticleField from "../ParticleField";
import WebOverlay from "../WebOverlay";

interface CityBackgroundProps {
  mouseX?: number;
  mouseY?: number;
}

export default function CityBackground({ mouseX = 0, mouseY = 0 }: CityBackgroundProps) {
  // Parallax translation for background depth
  const bgOffsetX = mouseX * -10;
  const bgOffsetY = mouseY * -10;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Full-Screen Cinematic City Skyline Background Image */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out scale-105"
        style={{
          transform: `translate3d(${bgOffsetX}px, ${bgOffsetY}px, 0) scale(1.05)`,
        }}
      >
        <img
          src="/gallery/city_skyline_rooftop.jpg"
          alt="Cinematic Futuristic City Skyline"
          className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1] saturate-[1.05]"
        />

        {/* Soft Environmental Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#02050e]/90 via-[#02050e]/30 to-[#010308]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-950/20 via-transparent to-[#010306]/70" />
      </div>

      {/* 2. Crimson & Cyan Ambient Neon Light Bloom */}
      <div className="absolute -top-24 left-10 w-[550px] h-[550px] rounded-full bg-cyan-500/15 blur-[150px]" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] rounded-full bg-red-600/15 blur-[160px]" />

      {/* 3. Cyber Grid Texture Layer */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#ef4444 1px, transparent 1px)`,
          backgroundSize: `48px 48px`,
          backgroundPosition: `0 0, 24px 24px`,
        }}
      />

      {/* 4. Ambient Web Overlay */}
      <div className="absolute inset-0 opacity-20">
        <WebOverlay />
      </div>

      {/* 5. Rain Particle Embers */}
      <div className="absolute inset-0 opacity-50">
        <ParticleField />
      </div>
    </div>
  );
}
