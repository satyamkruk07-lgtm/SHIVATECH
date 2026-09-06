"use client";

import React from "react";
import Image from "next/image";

interface MaskFaceProps {
  category?: string;
  isHovered?: boolean;
}

export const MaskFace: React.FC<MaskFaceProps> = ({ isHovered = false }) => {
  return (
    <div className="relative w-full h-full bg-[#040814] rounded-2xl overflow-hidden flex flex-col items-center justify-between p-3 border border-red-500/50 shadow-[inset_0_0_40px_rgba(239,68,68,0.3),0_0_20px_rgba(56,189,248,0.2)] select-none group">
      {/* Carbon Texture Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Atmospheric Rim Lights */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-red-600/25 rounded-full blur-3xl" />

      {/* Background Web Rays */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
        viewBox="0 0 300 400"
        fill="none"
      >
        <path d="M150 0 V400 M0 200 H300 M0 0 L300 400 M300 0 L0 400" stroke="#ef4444" strokeWidth="0.75" strokeDasharray="4 4" />
        <ellipse cx="150" cy="200" rx="100" ry="140" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.4" fill="none" />
      </svg>

      {/* FULL COVER REALISTIC SPIDER MASK (USER'S REMOVEBG IMAGE) */}
      <div className="relative z-10 w-full h-[84%] flex items-center justify-center pt-1">
        <Image
          src="/gallery/spider_mask_v3.png"
          alt="Spider-Man Mask"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-contain transition-transform duration-500 filter ${
            isHovered
              ? "scale-110 drop-shadow-[0_0_30px_rgba(239,68,68,0.95)]"
              : "scale-105 drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]"
          }`}
        />
      </div>

      {/* Mask Footer Information Overlay */}
      <div className="relative z-10 w-full pt-1 pb-0.5 text-center font-mono bg-gradient-to-t from-[#040814] via-[#040814]/80 to-transparent">
        <div className="text-[10px] sm:text-xs font-black text-red-500 tracking-[0.25em] uppercase drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]">
          HIDDEN MEMORY
        </div>
        <div className="text-[9px] text-sky-400/90 font-bold tracking-widest uppercase mt-0.5">
          SWIPE / SLIDE TO REVEAL
        </div>
      </div>

      {/* Tech Corner Accents */}
      <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-red-500/80" />
      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-sky-400/80" />
      <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-sky-400/80" />
      <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-red-500/80" />
    </div>
  );
};

export default MaskFace;
