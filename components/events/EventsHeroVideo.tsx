"use client";

import React, { useRef, useEffect } from "react";

export const EventsHeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Force play on mount to ensure browsers start playback immediately
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback (silent catch)
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[85vh] min-h-[420px] max-h-[960px] overflow-hidden bg-[#02040a] select-none">
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

      {/* 2. COMPACT WATERMARK COVER (Only the size of the watermark in the bottom-right corner) */}
      <div className="absolute bottom-[10%] sm:bottom-[12%] lg:bottom-[13%] right-[5%] sm:right-[7%] lg:right-[8%] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#02040a]/95 blur-[6px] pointer-events-none" />

      {/* 3. MINIMAL BOTTOM EDGE BLEND */}
      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-14 bg-gradient-to-t from-[#02040a] to-transparent pointer-events-none" />
    </section>
  );
};

export default EventsHeroVideo;
