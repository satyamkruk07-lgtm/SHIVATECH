"use client";

import { forwardRef, useRef, useEffect } from "react";

const HeroBackground = forwardRef<HTMLDivElement, { mouseParallax: { x: number; y: number } }>(
  ({ mouseParallax }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      const handleScroll = () => {
        if (!videoRef.current) return;
        if (window.scrollY > window.innerHeight * 1.3) {
          if (!videoRef.current.paused) videoRef.current.pause();
        } else {
          if (videoRef.current.paused) videoRef.current.play().catch(() => {});
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div 
        ref={ref}
        className="absolute inset-[-15%] w-[130%] h-[130%] z-0 will-change-transform"
        style={{
          transform: `translate(${mouseParallax.x * -15}px, ${mouseParallax.y * -15}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute inset-0 w-full h-full animate-[kenburns_20s_ease-in-out_infinite_alternate] will-change-transform">
          <div className="absolute inset-0 bg-[#050505]" />
          
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover mix-blend-screen opacity-60"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Atmospheric dark vignette centering the focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.85)_80%)] pointer-events-none" />
        
        {/* Additional cinematic color grading - red on left, blue on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-blue-900/30 mix-blend-overlay pointer-events-none" />
        
        {/* Top/bottom cinematic bars/fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none" />
      </div>
    );
  }
);

HeroBackground.displayName = "HeroBackground";

export default HeroBackground;
