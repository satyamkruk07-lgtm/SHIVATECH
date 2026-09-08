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
        className="absolute inset-0 w-full h-full object-cover object-[center_30%] scale-[1.04] pointer-events-none"
      >
        <source src="/videos/Shivatech-all-event.mp4" type="video/mp4" />
      </video>

      {/* 2. EXTENDED SEAMLESS BOTTOM BLACK BLEND (Hides watermark completely) */}
      <div className="absolute bottom-0 left-0 right-0 h-36 sm:h-48 lg:h-64 bg-gradient-to-t from-[#02040a] from-20% via-[#02040a]/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 sm:w-[420px] h-44 sm:h-60 bg-gradient-to-tl from-[#02040a] from-30% via-[#02040a]/85 to-transparent pointer-events-none" />
    </section>
  );
};

export default EventsHeroVideo;
