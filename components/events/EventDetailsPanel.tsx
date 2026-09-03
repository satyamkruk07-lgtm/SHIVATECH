"use client";

import { motion, AnimatePresence } from "framer-motion";
import { EventData } from "@/data/events";

interface EventDetailsPanelProps {
  event: EventData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventDetailsPanel({ event, isOpen, onClose }: EventDetailsPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && event && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-[100] flex items-center justify-center p-4 md:p-8 pointer-events-auto"
        >
          {/* Backdrop blur */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-xl cursor-pointer" 
            onClick={onClose}
          />
          
          {/* Panel */}
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-[#050914] border border-white/10 rounded-lg shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left Graphic */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black flex items-center justify-center overflow-hidden border-r border-white/5">
              <img src={event.image} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen" alt="" />
              <div className="relative z-10 text-center p-8">
                <div className="text-red-500 font-orbitron text-sm tracking-[0.4em] mb-2">{event.category}</div>
                <div className="text-white font-orbitron text-4xl md:text-5xl font-bold tracking-wider">{event.title}</div>
              </div>
            </div>
            
            {/* Right Details */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between text-white font-sans">
              <div>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
                  {event.description}
                </p>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                  <div>
                    <div className="text-white/40 text-xs font-orbitron tracking-widest mb-1">DATE</div>
                    <div className="font-bold">{event.date}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-orbitron tracking-widest mb-1">TEAM SIZE</div>
                    <div className="font-bold">{event.teamSize}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-white/40 text-xs font-orbitron tracking-widest mb-1">PRIZE POOL</div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
                      {event.prize}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-auto">
                <button className="flex-1 py-4 bg-white/5 border border-white/20 font-orbitron font-bold tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm">
                  REGISTER
                </button>
                <button 
                  onClick={onClose}
                  className="px-6 py-4 border border-white/10 font-orbitron font-bold tracking-widest text-white/50 hover:text-white transition-colors rounded-sm"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
