"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useInView } from "framer-motion";

export default function AboutVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion || window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  const panelVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={panelVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full flex flex-col sm:flex-row gap-3.5 lg:gap-4 items-stretch"
    >
      {/* 1. PRIMARY SHIVALIK CAMPUS VISUAL BOX */}
      <div className="relative flex-1 min-w-[260px] h-[320px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden group shadow-[0_0_35px_rgba(239,68,68,0.25),0_0_25px_rgba(56,189,248,0.2)] border border-red-500/40">
        {/* Campus Photograph with Parallax */}
        <div 
          className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * -8}px, 0)`,
          }}
        >
          <Image
            src="/images/shivalik_campus.webp"
            alt="Shivalik University Dehradun Campus"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center brightness-95 contrast-105"
          />

          {/* Ambient Dark Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/40 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-900/30 via-transparent to-sky-900/30 mix-blend-overlay" />
        </div>

        {/* Cyber Corner Tech Accents */}
        <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-red-500 z-20" />
        <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-sky-400 z-20" />
        <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-sky-400 z-20" />
        <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-red-500 z-20" />

        {/* Bottom Floating Badge: SHIVALIK UNIVERSITY */}
        <div className="absolute bottom-3 left-3 right-3 z-20 p-3 rounded-xl bg-[#040814]/90 border border-white/15 backdrop-blur-md flex items-center justify-between font-mono shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-500">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
            </div>
            <div>
              <div className="text-[9px] font-bold text-red-500 tracking-[0.2em] uppercase">
                CAMPUS & VENUE
              </div>
              <div className="text-xs font-black text-white tracking-wider uppercase">
                SHIVALIK UNIVERSITY
              </div>
            </div>
          </div>

          <div className="hidden lg:inline-flex px-2 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-[9px] font-bold text-sky-400 tracking-widest uppercase">
            DEHRADUN
          </div>
        </div>
      </div>

      {/* 2. RIGHT SIDE: 2 LOGO CARDS (UNIVERSITY LOGO & ACM LOGO) */}
      <div className="w-full sm:w-[160px] md:w-[185px] flex flex-row sm:flex-col gap-3.5 lg:gap-4 justify-between">
        
        {/* CARD 1: UNIVERSITY LOGO */}
        <div className="relative flex-1 rounded-2xl bg-[#060b19]/90 border border-red-500/40 backdrop-blur-xl p-3 flex flex-col justify-between items-center shadow-[0_0_25px_rgba(239,68,68,0.2)] hover:border-red-500 transition-all duration-300 group">
          {/* Tech Corner Accents */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-red-500" />
          <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-red-500" />

          {/* Top Label */}
          <div className="w-full flex items-center justify-between font-mono mb-2">
            <span className="text-[9px] font-bold tracking-widest text-red-400 uppercase">
              ORGANISER
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
          </div>

          {/* High Contrast Logo Display Box */}
          <div className="relative w-full h-[85px] sm:h-[105px] bg-white rounded-xl p-2 flex items-center justify-center shadow-inner group-hover:scale-102 transition-transform">
            <Image
              src="/images/university_logo.png"
              alt="Shivalik University Logo"
              fill
              sizes="180px"
              className="object-contain p-2"
            />
          </div>

          {/* Footer Label */}
          <div className="w-full text-center mt-2 font-mono">
            <div className="text-[10px] sm:text-[11px] font-black text-white tracking-wider uppercase leading-tight">
              SHIVALIK
            </div>
            <div className="text-[8px] text-slate-400 tracking-widest uppercase">
              UNIVERSITY
            </div>
          </div>
        </div>

        {/* CARD 2: ACM LOGO */}
        <div className="relative flex-1 rounded-2xl bg-[#060b19]/90 border border-sky-400/40 backdrop-blur-xl p-3 flex flex-col justify-between items-center shadow-[0_0_25px_rgba(56,189,248,0.2)] hover:border-sky-400 transition-all duration-300 group">
          {/* Tech Corner Accents */}
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-sky-400" />
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-sky-400" />

          {/* Top Label */}
          <div className="w-full flex items-center justify-between font-mono mb-2">
            <span className="text-[9px] font-bold tracking-widest text-sky-400 uppercase">
              CHAPTER
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
          </div>

          {/* High Contrast Logo Display Box */}
          <div className="relative w-full h-[85px] sm:h-[105px] bg-white rounded-xl p-2 flex items-center justify-center shadow-inner group-hover:scale-102 transition-transform">
            <Image
              src="/images/acm_logo_cropped.png"
              alt="ACM Student Chapter Logo"
              fill
              sizes="180px"
              className="object-contain p-1.5"
            />
          </div>

          {/* Footer Label */}
          <div className="w-full text-center mt-2 font-mono">
            <div className="text-[10px] sm:text-[11px] font-black text-white tracking-wider uppercase leading-tight">
              ACM CHAPTER
            </div>
            <div className="text-[8px] text-slate-400 tracking-widest uppercase">
              SHIVALIK CHAPTER
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
