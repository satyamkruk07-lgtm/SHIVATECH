"use client";

import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#02040a] border-t border-white/10 text-white font-mono overflow-hidden">
      {/* Background Neon Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Sci-Fi Emblem & Divider */}
        <div className="w-full flex items-center justify-center space-x-4 mb-10">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-red-500/50 to-red-500" />
          <div className="relative w-10 h-10 flex items-center justify-center text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.9)]">
            <svg
              className="w-8 h-8 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path d="M12 2L15 8L20 9L16 14L17 20L12 17L7 20L8 14L4 9L9 8L12 2Z" />
              <circle cx="12" cy="12" r="3" fill="#ef4444" />
            </svg>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-sky-400/50 to-sky-400" />
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <span className="text-xl sm:text-2xl font-black tracking-widest text-white uppercase drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
              SHIVATECH 2026
            </span>
            <span className="text-xs text-red-400 font-bold tracking-[0.25em] uppercase mt-1">
              SHIVALIK UNIVERSITY ACM STUDENT CHAPTER
            </span>
            <p className="text-xs text-slate-400 font-sans mt-3 max-w-md leading-relaxed">
              Official annual technology festival bringing together brilliant minds, innovators, developers and future leaders across 5 power-packed days.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-xs">
            <span className="text-white/40 tracking-[0.25em] uppercase mb-1 font-bold">
              NAVIGATION
            </span>
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">
              HOME
            </Link>
            <Link href="/events" className="text-red-400 font-bold hover:text-red-300 transition-colors">
              EVENTS
            </Link>
            <Link href="/schedule" className="text-slate-300 hover:text-white transition-colors">
              SCHEDULE
            </Link>
            <Link href="/gallery" className="text-slate-300 hover:text-white transition-colors">
              GALLERY
            </Link>
            <Link href="/team" className="text-slate-300 hover:text-white transition-colors">
              OUR TEAM
            </Link>
          </div>

          {/* Portal Links */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-xs">
            <span className="text-white/40 tracking-[0.25em] uppercase mb-1 font-bold">
              PORTAL
            </span>
            <Link href="/register" className="text-sky-400 font-bold hover:text-sky-300 transition-colors">
              REGISTER NOW ↗
            </Link>
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              UNSTOP PLATFORM ↗
            </a>
            <span className="text-slate-500 text-[11px] pt-1">
              DEHRADUN, UTTARAKHAND
            </span>
          </div>
        </div>

        {/* Bottom Tagline, Credits & Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div className="tracking-[0.25em] uppercase text-center md:text-left">
            DIFFERENT SKILLS <span className="text-red-500 font-bold mx-1">/</span> ONE VISION
          </div>

          <div className="text-center tracking-wider text-slate-300 font-medium py-1.5 px-4 rounded-full bg-white/[0.04] border border-white/10 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            Designed and developed by - <span className="text-white font-bold">Kumar Satyam</span>{" "}
            <span className="text-red-400 font-semibold">( Graphic Head ACM )</span>
          </div>

          <div className="text-center md:text-right tracking-wider text-slate-500">
            © 2026 SHIVATECH. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
