"use client";

import { useRef } from "react";
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
      className="relative w-full min-h-screen bg-[#050914] text-white pt-32 pb-24 px-6 lg:px-12 overflow-hidden"
    >
      {/* Residual Mist matching the Hero Fog transition */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-[#050914] to-transparent pointer-events-none z-0" />
      
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15)_0%,transparent_70%)] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.15)_0%,transparent_70%)] mix-blend-screen" />
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(100vh-12rem)]">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
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
            <motion.div variants={textVariants} className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-red-500" />
              <span className="font-orbitron tracking-[0.3em] text-red-500 text-sm font-bold uppercase">
                The Story Begins
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={textVariants} className="mb-4">
              <h2 className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-md">
                SHIVATECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">2026</span>
              </h2>
            </motion.div>

            {/* Supporting Heading */}
            <motion.div variants={textVariants} className="mb-8">
              <h3 className="font-sans text-xl md:text-2xl text-white/80 tracking-wide font-light">
                WHERE TECHNOLOGY MEETS CREATIVITY
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p variants={textVariants} className="font-sans text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
              SHIVATECH is a celebration of technology, innovation, creativity and competitive spirit, bringing students together to learn, build, compete and create.
            </motion.p>

            {/* CTA Button */}
            <motion.button 
              variants={textVariants}
              className="group relative px-8 py-4 font-orbitron font-bold tracking-widest text-sm overflow-hidden rounded-sm transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/5 border border-white/20 group-hover:border-red-500/50 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 text-white group-hover:text-white transition-colors drop-shadow-md">
                DISCOVER SHIVATECH
              </span>
            </motion.button>
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
