"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const EventsHeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Force play on mount to ensure mobile browsers start playback immediately
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback (silent catch)
      });
    }
  }, []);

  const handleScrollToExplore = () => {
    const introSection = document.getElementById("events-intro");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[68vh] sm:h-[75vh] lg:h-[85vh] min-h-[480px] max-h-[920px] overflow-hidden bg-[#02040a] select-none flex items-center justify-center">
      {/* 1. CINEMATIC VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.webp"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      >
        <source src="/videos/Shivatech-all-event.mp4" type="video/mp4" />
      </video>

      {/* 2. ATMOSPHERIC OVERLAYS & NEON GLOWS */}
      {/* Dark Vignette & Deep Falloff Gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background: "radial-gradient(circle at center, transparent 35%, #02040a 95%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/25 to-black/50 pointer-events-none" />

      {/* Subtle Crimson Accent Glow (Top-Left) */}
      <div className="absolute -top-24 -left-24 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Electric-Blue Accent Glow (Bottom-Right) */}
      <div className="absolute -bottom-24 -right-24 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Cyber Grid Lines */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      {/* 3. MINIMAL EDITORIAL HERO CONTENT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center pt-8 sm:pt-12">
        {/* Fest Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-md mb-4 sm:mb-6 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.3em] text-red-400 uppercase">
            SHIVATECH 2026
          </span>
          <span className="text-white/30 text-xs">•</span>
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-slate-300 uppercase">
            OCTOBER 07–10
          </span>
        </motion.div>

        {/* Main Title: EVENTS */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-mono tracking-wider text-white uppercase drop-shadow-[0_0_40px_rgba(255,255,255,0.35)] leading-none"
        >
          EVENTS
        </motion.h1>

        {/* Subtitle: ENTER THE FUTURE */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base font-mono font-medium tracking-[0.35em] sm:tracking-[0.45em] text-sky-400 uppercase drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
        >
          ENTER THE FUTURE
        </motion.p>
      </div>

      {/* 4. SUBTLE SCROLL TO EXPLORE INDICATOR */}
      <motion.button
        onClick={handleScrollToExplore}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        aria-label="Scroll to explore events"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
      >
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.3em] text-slate-400 group-hover:text-white uppercase transition-colors mb-2">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 sm:w-6 sm:h-9 rounded-full border border-white/25 flex items-start justify-center p-1 group-hover:border-sky-400 transition-colors">
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 rounded-full bg-gradient-to-b from-red-500 to-sky-400"
          />
        </div>
      </motion.button>
    </section>
  );
};

export default EventsHeroVideo;
