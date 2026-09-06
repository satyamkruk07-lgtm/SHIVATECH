"use client";

import React from "react";
import ParticleField from "../ParticleField";
import WebOverlay from "../WebOverlay";

export default function GalleryAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Dark Navy / Black Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-950/20 via-[#02050e] to-[#010306]" />

      {/* 2. Top-Left & Bottom-Right Light Bloom (Cyan + Crimson) */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-sky-500/10 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full bg-red-600/10 blur-[150px]" />

      {/* 3. Cyber Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#ef4444 1px, transparent 1px)`,
          backgroundSize: `48px 48px`,
          backgroundPosition: `0 0, 24px 24px`,
        }}
      />

      {/* 4. Ambient Web Geometry Overlay */}
      <div className="absolute inset-0 opacity-30">
        <WebOverlay />
      </div>

      {/* 5. Drifting Particle Embers */}
      <div className="absolute inset-0 opacity-50">
        <ParticleField />
      </div>
    </div>
  );
}
