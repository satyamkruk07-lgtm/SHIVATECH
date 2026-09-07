"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import AboutVisual from "./AboutVisual";
import StatsRow from "./StatsRow";

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const textVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#050914] text-white pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Residual Mist matching the Hero Fog transition */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-[#050914] to-transparent pointer-events-none z-0" />
      
      {/* Subtle Background Decoration (Hardware-accelerated, zero-lag CSS accents) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15)_0%,transparent_70%)] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.15)_0%,transparent_70%)] mix-blend-screen" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(100vh-12rem)]">
        
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-24">
          
          {/* Left Column: Content */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {/* Eyebrow */}
            <motion.div variants={textVariants} className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="h-[1px] w-8 sm:w-12 bg-red-500" />
              <span className="font-orbitron tracking-[0.2em] sm:tracking-[0.3em] text-red-500 text-xs sm:text-sm font-bold uppercase">
                ORGANISED BY SHIVALIK UNIVERSITY
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={textVariants} className="mb-3 sm:mb-4">
              <h2 className="font-orbitron text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-md">
                SHIVATECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">2026</span>
              </h2>
            </motion.div>

            {/* Supporting Heading */}
            <motion.div variants={textVariants} className="mb-3 sm:mb-4">
              <h3 className="font-sans text-lg sm:text-xl md:text-2xl text-white/80 tracking-wide font-light">
                WHERE TECHNOLOGY MEETS CREATIVITY
              </h3>
            </motion.div>

            {/* Organiser Badge Pill */}
            <motion.div variants={textVariants} className="mb-6 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase">
                OFFICIAL FEST OF SHIVALIK UNIVERSITY, DEHRADUN
              </span>
            </motion.div>

            {/* Description */}
            <motion.p variants={textVariants} className="font-sans text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              SHIVATECH 2026 is the 5-day annual technical festival proudly organized by Shivalik University, Dehradun. A grand celebration of technology, innovation, creativity and competitive spirit, bringing students together to learn, build, compete and create.
            </motion.p>

            {/* CTA Button: Connected to /events */}
            <motion.div variants={textVariants}>
              <Link 
                href="/events"
                className="group relative inline-flex items-center gap-2 px-8 py-4 font-orbitron font-bold tracking-widest text-sm overflow-hidden rounded-sm transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/5 border border-white/20 group-hover:border-red-500/50 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-white group-hover:text-white transition-colors drop-shadow-md">
                  DISCOVER SHIVATECH
                </span>
                <span className="relative z-10 text-red-500 font-bold group-hover:translate-x-1 transition-transform">
                  &gt;
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Panel */}
          <div className="w-full lg:w-1/2">
            <AboutVisual />
          </div>
          
        </div>

        {/* Statistics Row */}
        <StatsRow />

      </div>
    </section>
  );
}
