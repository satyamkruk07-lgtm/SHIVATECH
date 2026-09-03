"use client";

import { forwardRef } from "react";

interface HeroLayersProps {
  mouseParallax: { x: number; y: number };
}

const HeroLayers = forwardRef<HTMLDivElement, HeroLayersProps>(
  ({ mouseParallax }, ref) => {
    return (
      <div ref={ref} className="absolute inset-[-15%] w-[130%] h-[130%] pointer-events-none">
        
        {/* Far Buildings (Z-index 1) */}
        <div 
          className="layer-back-buildings absolute inset-0 z-[1]"
          style={{
            transform: `translate(${mouseParallax.x * -20}px, ${mouseParallax.y * -20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute inset-0 bg-bottom bg-cover bg-no-repeat opacity-90 animate-[drift-buildings_25s_ease-in-out_infinite_alternate]" style={{ backgroundImage: "url('/images/hero/buildings-back.png')" }} />
        </div>

        {/* Middle Buildings / City Lights can be simulated if asset missing, but we'll stick to Z-index 2 */}
        
        {/* Fog / Atmospheric Depth (Z-index 3) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/40 to-transparent bottom-0 h-[70%] opacity-80 mix-blend-normal z-[3]" />
        
        {/* Front Buildings (Z-index 4) */}
        <div 
          className="layer-front-buildings absolute inset-0 z-[4]"
          style={{
            transform: `translate(${mouseParallax.x * -40}px, ${mouseParallax.y * -40}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute inset-0 bg-bottom bg-cover bg-no-repeat animate-[drift-buildings_20s_ease-in-out_infinite_alternate-reverse]" style={{ backgroundImage: "url('/images/hero/buildings-front.png')" }} />
        </div>

        {/* Webs (Z-index 5) */}
        <div 
          className="layer-web absolute inset-0 z-[5]"
          style={{
            transform: `translate(${mouseParallax.x * -60}px, ${mouseParallax.y * -60}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="/images/hero/web-left.png" 
            alt="Web Left" 
            className="absolute left-[12%] md:left-[15%] top-[10%] w-[45%] md:w-[35%] mix-blend-screen animate-[float-webs_10s_ease-in-out_infinite_alternate]"
          />
          <img 
            src="/images/hero/web-right.png" 
            alt="Web Right" 
            className="absolute right-[12%] md:right-[15%] top-[20%] w-[45%] md:w-[35%] mix-blend-screen animate-[float-webs_12s_ease-in-out_infinite_alternate-reverse]"
          />
        </div>
      </div>
    );
  }
);

HeroLayers.displayName = "HeroLayers";

export default HeroLayers;
