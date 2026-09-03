"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroBackground from "./HeroBackground";
import HeroLayers from "./HeroLayers";
import HeroCharacter from "./HeroCharacter";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";
import ParticleField from "./ParticleField";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Handle Resize and Mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Mouse Parallax
  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Dynamically dampen mouse parallax as user scrolls down
      // Uses the ScrollTrigger id to check progress without triggering React renders on scroll
      let multiplier = 1;
      const st = ScrollTrigger.getById("hero-scroll");
      if (st) {
        // Fade out mouse effect entirely by 50% scroll
        multiplier = Math.max(0, 1 - st.progress * 2);
      }

      const x = ((e.clientX / window.innerWidth) * 2 - 1) * multiplier;
      const y = ((e.clientY / window.innerHeight) * 2 - 1) * multiplier;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile, prefersReducedMotion]);

  // Handle GSAP ScrollTrigger
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "hero-scroll",
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%", // Exactly one viewport height so About section aligns perfectly
          scrub: 1,
          pin: true,
          pinSpacing: false, // Critical: Allows AboutSection to scroll up underneath the Hero
        }
      });

      // We'll use a total timeline duration of 100 to map percentages directly to time.
      const T = 100;
      
      // PHASE A: Content exits (0% -> 30%)
      tl.to(".layer-content", {
        yPercent: -20,
        scale: 0.9,
        opacity: 0,
        ease: "power1.in",
        duration: 30
      }, 0);

      // PHASE B, C, D: Depth / Camera push (0% -> 60%)
      tl.to(backgroundRef.current, { scale: 1.05, duration: 60, ease: "power1.inOut" }, 0);
      tl.to(".layer-back-buildings", { yPercent: 5, duration: 60, ease: "power1.inOut" }, 0);
      tl.to(".layer-front-buildings", { yPercent: -10, scale: 1.05, duration: 60, ease: "power1.inOut" }, 0);
      tl.to(".layer-web", { scale: 1.1, yPercent: -5, duration: 60, ease: "power1.inOut" }, 0);
      tl.to(".layer-character", { scale: 1.02, yPercent: -2, duration: 60, ease: "power1.inOut" }, 0);

      // PHASE E & F: Mist enters and Hero fades out to reveal About underneath (40% -> 90%)
      tl.to(".layer-transition-fog", {
        opacity: 1,
        ease: "power1.inOut",
        duration: 20
      }, 40);

      // Fade out the physical city layers to reveal the About section scrolling up underneath!
      tl.to([".layer-back-buildings", ".layer-front-buildings", ".layer-web", ".layer-character", ".layer-particles", backgroundRef.current], {
        opacity: 0,
        duration: 40,
        ease: "power1.inOut"
      }, 50);

      // PHASE G: Mist fades away to fully reveal About (80% -> 100%)
      tl.to(".layer-transition-fog", {
        opacity: 0,
        ease: "power1.inOut",
        duration: 20
      }, 80);

    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, [prefersReducedMotion, isMobile]);

  // Apply dampening to mouse parallax
  const parallaxProps = {
    x: isMobile || prefersReducedMotion ? 0 : mousePos.x,
    y: isMobile || prefersReducedMotion ? 0 : mousePos.y,
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-hidden bg-transparent z-[10] text-white selection:bg-red-500/30"
    >
      <HeroBackground ref={backgroundRef} mouseParallax={parallaxProps} />
      <HeroLayers ref={layersRef} mouseParallax={parallaxProps} />
      <HeroCharacter ref={characterRef} mouseParallax={parallaxProps} />
      
      {/* Keeping particle field independent and lightweight */}
      <ParticleField />
      
      <HeroContent ref={contentRef} mouseParallax={parallaxProps} />
      <ScrollIndicator />
      
      {/* Cinematic Scroll Transition Mist */}
      <div className="layer-transition-fog absolute inset-0 z-[100] opacity-0 pointer-events-none flex flex-col justify-end">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05)_0%,transparent_60%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05)_0%,transparent_60%)] mix-blend-screen" />
        
        {/* Subtle noise/texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      </div>
    </section>
  );
}
