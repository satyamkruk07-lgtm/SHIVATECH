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
    hidden: { opacity: 0, scale: 0.94 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={panelVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full h-[360px] md:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden group shadow-[0_0_40px_rgba(239,68,68,0.25),0_0_30px_rgba(56,189,248,0.2)] border border-red-500/40"
    >
      {/* 1. Shivalik Campus Image */}
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
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center brightness-95 contrast-105"
        />

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/40 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/30 via-transparent to-sky-900/30 mix-blend-overlay" />
      </div>

      {/* 2. Cyber Corner Tech Accents */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-red-500 z-20" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-sky-400 z-20" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-sky-400 z-20" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-red-500 z-20" />

      {/* 3. Floating Overlay Badge: SHIVALIK UNIVERSITY */}
      <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-[#040814]/85 border border-white/15 backdrop-blur-md flex items-center justify-between font-mono shadow-[0_0_20px_rgba(0,0,0,0.8)]">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] font-bold text-red-500 tracking-[0.2em] uppercase">
              ORGANISER
            </div>
            <div className="text-xs sm:text-sm font-black text-white tracking-wider uppercase">
              SHIVALIK UNIVERSITY, DEHRADUN
            </div>
          </div>
        </div>

        <div className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-[10px] font-bold text-sky-400 tracking-widest uppercase">
          OFFICIAL HOST
        </div>
      </div>
    </motion.div>
  );
}
