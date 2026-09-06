"use client";

import React from "react";

interface MaskFaceProps {
  category?: string;
  isHovered?: boolean;
}

export const MaskFace: React.FC<MaskFaceProps> = ({ isHovered = false }) => {
  return (
    <div className="relative w-full h-full bg-[#040814] rounded-2xl overflow-hidden flex flex-col items-center justify-center border border-red-500/30 shadow-[inset_0_0_30px_rgba(239,68,68,0.2)] select-none">
      {/* Carbon Texture Background Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Rim Light Bloom */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-red-600/25 rounded-full blur-2xl" />

      {/* Spider Web Pattern Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 300 400"
        fill="none"
      >
        <path d="M150 0 V400 M0 200 H300 M0 0 L300 400 M300 0 L0 400" stroke="#ef4444" strokeWidth="0.75" strokeDasharray="3 3" />
        <circle cx="150" cy="200" r="40" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.6" fill="none" />
        <circle cx="150" cy="200" r="80" stroke="#ef4444" strokeWidth="0.75" strokeOpacity="0.5" fill="none" />
        <circle cx="150" cy="200" r="130" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.4" fill="none" />
      </svg>

      {/* Central Abstract Sci-Fi Spider Mask Eyes */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Mask Eyes SVG */}
        <svg
          width="140"
          height="110"
          viewBox="0 0 140 110"
          fill="none"
          className={`filter transition-transform duration-500 ${
            isHovered ? "scale-110 drop-shadow-[0_0_20px_rgba(239,68,68,0.9)]" : "drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]"
          }`}
        >
          {/* Left Eye Contour */}
          <path
            d="M 20 25 Q 55 10 65 48 Q 50 85 10 60 Z"
            fill="#060c1d"
            stroke="#ef4444"
            strokeWidth="3.5"
          />
          <path
            d="M 25 30 Q 52 18 60 48 Q 47 75 18 56 Z"
            fill="url(#leftEyeGlow)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />

          {/* Right Eye Contour */}
          <path
            d="M 120 25 Q 85 10 75 48 Q 90 85 130 60 Z"
            fill="#060c1d"
            stroke="#ef4444"
            strokeWidth="3.5"
          />
          <path
            d="M 115 30 Q 88 18 80 48 Q 93 75 122 56 Z"
            fill="url(#rightEyeGlow)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />

          {/* Central Emblem Dot */}
          <circle cx="70" cy="55" r="3" fill="#ef4444" className="animate-ping" />

          {/* Gradients */}
          <defs>
            <linearGradient id="leftEyeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="rightEyeGlow" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>

        {/* Faint Mask Title Indicator */}
        <div className="mt-4 text-center font-mono">
          <div className="text-[10px] font-bold text-red-500 tracking-[0.3em] uppercase">
            HIDDEN MEMORY
          </div>
          <div className="text-[9px] text-sky-400/70 tracking-widest uppercase">
            MOVE TO CENTER TO REVEAL
          </div>
        </div>
      </div>

      {/* Tech Corner Accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-red-500/60" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-sky-400/60" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-sky-400/60" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-red-500/60" />
    </div>
  );
};

export default MaskFace;
