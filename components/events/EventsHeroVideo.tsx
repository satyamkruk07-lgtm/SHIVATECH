"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const EventsHeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback (silent catch)
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[88vh] min-h-[460px] max-h-[960px] overflow-hidden bg-[#02040a] select-none flex items-center justify-center">
      {/* 1. CINEMATIC VIDEO BACKGROUND (Optimized H.264, faststart streaming, zero watermark) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.webp"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none brightness-[0.75]"
      >
        <source src="/videos/Shivatech-all-event.mp4" type="video/mp4" />
      </video>

      {/* 2. ATMOSPHERIC OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-black/20 to-[#02040a]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#02040a_85%)] pointer-events-none" />

      {/* 3. MINIMAL HERO CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md mb-4 font-mono text-[11px] sm:text-xs font-bold tracking-[0.3em] text-red-400 uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>EVENTS</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-mono tracking-tight text-white uppercase drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-4"
        >
          EXPLORE THE EXPERIENCES
        </motion.h1>

        {/* Subtle Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-300 uppercase"
        >
          SHIVATECH 2026 // 5–9 OCTOBER 2026
        </motion.p>
      </div>

      {/* 4. SUBTLE SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 pointer-events-none select-none"
      >
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 sm:w-6 sm:h-9 rounded-full border border-white/30 flex items-start justify-center p-1 bg-black/30 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          />
        </div>
      </motion.div>

      {/* 5. BOTTOM FADE BLEND */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-[#02040a] to-transparent pointer-events-none" />
    </section>
  );
};

export default EventsHeroVideo;
