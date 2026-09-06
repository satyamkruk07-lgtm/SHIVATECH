"use client";

import React from "react";
import RadialSchedule from "./RadialSchedule";
import ParticleField from "../ParticleField";
import WebOverlay from "../WebOverlay";

export default function ScheduleScene() {
  return (
    <main className="relative min-h-screen w-full bg-[#02050e] text-white overflow-x-hidden selection:bg-red-600 selection:text-white">
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

      {/* MAIN RADIAL SCHEDULE INTERACTION SCENE */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        <RadialSchedule />
      </div>

      {/* BOTTOM PAGE CONTINUATION FOOTER */}
      <section className="relative z-10 py-12 px-4 border-t border-white/10 bg-[#02050e]/95 backdrop-blur-xl text-center select-none">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-500 mb-3 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
          <h4 className="text-sm font-mono font-bold tracking-widest text-slate-300 uppercase mb-1">
            SHIVATECH 2026 SCHEDULE TIMELINE
          </h4>
          <p className="text-xs text-slate-400 max-w-md">
            All event timings are subject to slight real-time adjustments. Stay synced with live updates via the SHIVATECH App.
          </p>
        </div>
      </section>
    </main>
  );
}
