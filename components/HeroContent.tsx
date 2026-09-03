"use client";

import Link from "next/link";
import { forwardRef } from "react";

interface HeroContentProps {
  mouseParallax: { x: number; y: number };
}

const HeroContent = forwardRef<HTMLDivElement, HeroContentProps>(
  ({ mouseParallax }, ref) => {
    return (
      <div 
        ref={ref}
        className="absolute inset-0 z-[10] flex items-center justify-center pointer-events-none"
      >
        <div 
          className="layer-content text-center flex flex-col items-center pointer-events-auto mt-24"
          style={{
            transform: `translate(${mouseParallax.x * -10}px, ${mouseParallax.y * -10}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/80 mb-2 md:mb-0 uppercase drop-shadow-md">
            SHIVALIK COLLEGE OF ENGINEERING
            <br />
            PRESENTS
          </p>

          <div className="relative flex flex-col items-center justify-center">
            {/* Custom Web Behind Text */}
            <svg className="absolute w-[150%] h-[150%] max-w-[800px] opacity-40 text-red-600 -z-10" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="0.5">
              <path d="M100 50 L10 10 M100 50 L100 0 M100 50 L190 10 M100 50 L190 90 M100 50 L100 100 M100 50 L10 90 M100 50 L0 50 M100 50 L200 50" />
              <path d="M40 30 Q100 10 160 30 Q180 50 160 70 Q100 90 40 70 Q20 50 40 30 Z" />
              <path d="M70 40 Q100 30 130 40 Q140 50 130 60 Q100 70 70 60 Q60 50 70 40 Z" />
            </svg>
            
            <h1 className="font-orbitron font-black text-6xl md:text-8xl lg:text-[9rem] tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)] italic transform -skew-x-6 relative z-10">
              <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600 mix-blend-overlay blur-[3px]">
                SHIVATECH
              </span>
              <span className="absolute inset-0 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] z-[-1]">SHIVATECH</span>
              SHIVATECH
            </h1>

            <div className="absolute -bottom-4 md:-bottom-8 right-[5%] md:right-[15%] text-4xl md:text-6xl font-orbitron font-black tracking-widest text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)] italic transform -skew-x-12 z-20">
              2026
            </div>
          </div>

          <p className="text-xs md:text-sm font-semibold tracking-[0.4em] md:tracking-[0.6em] text-white mt-12 mb-8 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] flex items-center justify-center gap-4">
            RISE <span className="w-1.5 h-1.5 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span> CREATE <span className="w-1.5 h-1.5 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span> INNOVATE
          </p>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mt-4">
            {/* Register Now Link Button to /events */}
            <Link
              href="/events"
              className="group relative px-8 py-3 bg-black/60 backdrop-blur-md overflow-hidden rounded-[4px] border-2 border-red-600/80 hover:border-red-500 hover:bg-red-950/40 transition-all duration-300 pointer-events-auto flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]"
            >
              <span className="relative z-10 text-xs md:text-sm font-bold tracking-[0.1em] text-white drop-shadow-md">
                REGISTER NOW
              </span>
              <span className="text-red-500 font-bold group-hover:translate-x-1 transition-transform relative z-10">&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

HeroContent.displayName = "HeroContent";

export default HeroContent;
