"use client";

import { motion } from "framer-motion";
import { EventData } from "@/data/events";

interface EventHUDProps {
  currentEvent: EventData | null;
  totalEvents: number;
  currentIndex: number;
  onNavigate: (index: number) => void;
  onViewEvent: () => void;
  instructionVisible: boolean;
}

export default function EventHUD({ currentEvent, totalEvents, currentIndex, onNavigate, onViewEvent, instructionVisible }: EventHUDProps) {
  if (!currentEvent) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden text-white font-sans">
      
      {/* Top Left: Navigation / Progress */}
      <div className="absolute top-24 left-6 md:left-12 flex flex-col gap-2 pointer-events-auto">
        <div className="text-xs tracking-[0.3em] text-red-500 font-orbitron font-bold mb-2">CITY NAVIGATION</div>
        <div className="flex flex-col gap-1">
          {Array.from({ length: totalEvents }).map((_, i) => (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              className={`text-left text-xs font-orbitron tracking-widest transition-all duration-300 ${
                i === currentIndex ? "text-white opacity-100 scale-110 ml-2" : "text-white/30 opacity-50 hover:text-white/70"
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Left: Current Event Title */}
      <div className="absolute bottom-12 left-6 md:left-12">
        <motion.div 
          key={`title-${currentEvent.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-xs md:text-sm tracking-[0.3em] text-white/50 font-orbitron font-bold mb-2">
            EVENT {String(currentIndex + 1).padStart(2, '0')} / {String(totalEvents).padStart(2, '0')}
          </div>
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-md">
            {currentEvent.title}
          </h1>
          <div className="text-red-500 tracking-[0.4em] text-sm md:text-base font-orbitron mt-2">
            {currentEvent.category}
          </div>
        </motion.div>
      </div>

      {/* Bottom Right: Event Info & CTA */}
      <div className="absolute bottom-12 right-6 md:right-12 pointer-events-auto flex flex-col items-end text-right">
        <motion.div 
          key={`info-${currentEvent.id}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-sm mb-6 max-w-sm"
        >
          <div className="text-sm text-white/70 mb-4">{currentEvent.description}</div>
          <div className="grid grid-cols-2 gap-4 text-xs font-orbitron tracking-wider">
            <div>
              <div className="text-white/40 mb-1">DURATION</div>
              <div className="text-white">{currentEvent.date}</div>
            </div>
            <div>
              <div className="text-white/40 mb-1">TEAM</div>
              <div className="text-white">{currentEvent.teamSize}</div>
            </div>
            <div className="col-span-2 mt-2">
              <div className="text-white/40 mb-1">PRIZE POOL</div>
              <div className="text-red-400 text-lg font-bold">{currentEvent.prize}</div>
            </div>
          </div>
        </motion.div>

        <button 
          onClick={onViewEvent}
          className="group relative px-8 py-4 font-orbitron font-bold tracking-widest text-sm overflow-hidden rounded-sm transition-all duration-300 pointer-events-auto bg-white/5 border border-white/20 hover:border-blue-500/50"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-red-600/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white drop-shadow-md">
            [ VIEW EVENT ]
          </span>
        </button>
      </div>

      {/* Initial Instruction Overlay */}
      {instructionVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <div className="font-orbitron tracking-[0.4em] text-white/80 text-sm md:text-base bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10 animate-pulse">
            MOVE TO AIM • CLICK & HOLD TO SWING
          </div>
        </motion.div>
      )}

      {/* Crosshair / Reticle for Aiming (Fixed in center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <div className="w-12 h-12 border border-white/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-red-500 rounded-full" />
      </div>
      
    </div>
  );
}
