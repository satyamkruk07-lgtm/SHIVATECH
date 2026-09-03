"use client";

import { forwardRef } from "react";

interface HeroCharacterProps {
  mouseParallax: { x: number; y: number };
}

const HeroCharacter = forwardRef<HTMLDivElement, HeroCharacterProps>(
  ({ mouseParallax }, ref) => {
    return (
      <div 
        ref={ref} 
        className="absolute inset-0 z-[6] pointer-events-none flex items-end justify-start pb-0"
      >
        <div 
          className="layer-character relative w-[90%] md:w-[60%] lg:w-[50%] max-w-[900px] h-full"
          style={{
            transform: `translate(${mouseParallax.x * -30}px, ${mouseParallax.y * -5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Character Image */}
          <img 
            src="/images/hero/character.png" 
            alt="Hero Character" 
            className="absolute bottom-[-10%] md:bottom-[-15%] left-[5%] w-full h-[110%] object-contain object-bottom drop-shadow-[0_10px_40px_rgba(220,38,38,0.5)] animate-[float-character_8s_ease-in-out_infinite]"
          />
          {/* Subtle rim light / glow behind character for separation */}
          <div className="absolute bottom-0 left-[10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.2)_0%,transparent_60%)] -z-10 mix-blend-screen" />
          <div className="absolute bottom-[20%] left-[30%] w-[40%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.2)_0%,transparent_60%)] -z-10 mix-blend-screen" />
        </div>
      </div>
    );
  }
);

HeroCharacter.displayName = "HeroCharacter";

export default HeroCharacter;
