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
    <section className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[85vh] min-h-[420px] max-h-[900px] overflow-hidden bg-[#02040a] select-none flex items-center justify-center">
      {/* 1. CINEMATIC VIDEO BACKGROUND (Clean video without text overlay) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.webp"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none brightness-[0.95]"
      >
        <source src="/videos/Shivatech-all-event.mp4" type="video/mp4" />
      </video>

      {/* 2. SUBTLE GRADIENT BLEND (For seamless page integration) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-[#02040a]/40 pointer-events-none" />

      {/* 3. SUBTLE SCROLL INDICATOR AT BOTTOM (Minimal icon only, zero text) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none select-none"
      >
        <div className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center p-1 bg-black/40 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          />
        </div>
      </motion.div>

      {/* 4. BOTTOM FADE BLEND */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-[#02040a] to-transparent pointer-events-none" />
    </section>
  );
};

export default EventsHeroVideo;
