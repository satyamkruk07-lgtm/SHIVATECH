"use client";

import React from "react";
import RadialSchedule from "./RadialSchedule";
import ParticleField from "../ParticleField";
import WebOverlay from "../WebOverlay";

export default function ScheduleScene() {
  return (
    <main className="relative min-h-screen w-full bg-[#02050e] text-white overflow-x-hidden md:overflow-hidden selection:bg-red-600 selection:text-white">
      {/* ATMOSPHERIC BACKGROUND GRADIENTS & BLOOM */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Dark City Silhouette Texture Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/25 via-[#02050e] to-[#010308]" />

        {/* Top-Right Crimson Light Bloom */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-red-600/10 blur-[140px]" />

        {/* Bottom-Left Cyan Light Bloom */}
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[140px]" />

        {/* Cyber Grid Lines Effect */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#ef4444 1px, transparent 1px)`,
            backgroundSize: `40px 40px`,
            backgroundPosition: `0 0, 20px 20px`,
          }}
        />
      </div>

      {/* AMBIENT SPIDER WEB OVERLAY DECORATION */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <WebOverlay />
      </div>

      {/* AMBIENT PARTICLES */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-60">
        <ParticleField />
      </div>

      {/* MAIN SCHEDULE INTERACTION SCENE */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between overflow-y-auto md:overflow-hidden md:h-screen md:max-h-screen">
        <RadialSchedule />
      </div>
    </main>
  );
}
