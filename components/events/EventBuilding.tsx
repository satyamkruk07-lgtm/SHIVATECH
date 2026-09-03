"use client";

import { EventData } from "@/data/events";

interface EventBuildingProps {
  ev: EventData;
  isActive: boolean;
  isPassed: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export default function EventBuilding({ ev, isActive, isPassed, onClick }: EventBuildingProps) {
  return (
    <div
      className="absolute top-[10%] left-1/2 w-[80vw] md:w-[40vw] h-[70vh] md:h-[80vh] flex flex-col items-center justify-center transition-opacity duration-1000 cursor-pointer"
      style={{
        transform: `translateX(calc(-50% + ${ev.position.x}vw)) translateZ(${ev.position.z}px)`,
        opacity: isPassed ? 0 : 1,
        pointerEvents: isPassed ? "none" : "auto",
      }}
      onClick={onClick}
    >
      <div className="relative w-full h-full group flex flex-col items-center justify-end">
        {/* Building 3D Asset */}
        <img 
          src={ev.image} 
          alt={ev.title}
          className="w-full h-full object-contain object-bottom drop-shadow-[0_0_50px_rgba(37,99,235,0.2)] transition-transform duration-700 group-hover:scale-105 mix-blend-screen pointer-events-none"
        />
        
        {/* Signage in front */}
        <div 
          className={`absolute bottom-[10%] text-center p-6 border border-white/10 bg-black/60 backdrop-blur-md rounded-xl transform transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.8)] pointer-events-none ${isActive ? 'scale-110 border-blue-500/50 shadow-[0_0_40px_rgba(37,99,235,0.4)]' : 'group-hover:scale-105 group-hover:border-white/30'}`}
        >
          <div className="text-blue-400 font-orbitron text-xs md:text-sm tracking-[0.3em] mb-1">{ev.category}</div>
          <div className="text-white font-orbitron text-2xl md:text-4xl font-bold tracking-wider">{ev.title}</div>
        </div>
        
        {/* Active Glow */}
        {isActive && (
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full -z-10 mix-blend-screen pointer-events-none" />
        )}
      </div>
    </div>
  );
}
