"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

export default function AboutVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion || window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Very subtle parallax for the visual panel
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
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group"
    >
      {/* Glass Surface / Border */}
      <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl z-10 pointer-events-none transition-colors duration-500 group-hover:bg-white/[0.05] group-hover:border-white/20" />
      
      {/* Subtle Red/Blue Edge Lighting */}
      <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-red-500/0 via-red-500/50 to-red-500/0 z-20" />
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 z-20" />
      
      {/* Glow Behind */}
      <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1)_0%,transparent_50%)] z-0 blur-2xl pointer-events-none" />

      {/* Internal Visual Layers (with parallax) */}
      <div 
        className="absolute inset-[-10%] w-[120%] h-[120%] z-0"
        style={{
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Deep dark background */}
        <div className="absolute inset-0 bg-[#050914]" />

        {/* Existing Web Asset scaled and positioned abstractly */}
        <img 
          src="/images/hero/web-right.png" 
          alt="" 
          className="absolute top-[-20%] right-[-10%] w-[120%] opacity-40 mix-blend-screen"
        />

        {/* Existing Building Asset to maintain visual continuity */}
        <img 
          src="/images/hero/buildings-front.png" 
          alt="" 
          className="absolute bottom-[-10%] left-0 w-[150%] opacity-50 mix-blend-screen grayscale"
        />
        
        {/* Dynamic Lighting Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/30 via-transparent to-blue-900/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050914]" />
      </div>
    </motion.div>
  );
}
