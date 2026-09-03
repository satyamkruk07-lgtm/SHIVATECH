"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  GlobalSequenceState,
  eventsSequenceData,
  TOTAL_GLOBAL_FRAMES,
} from "@/data/events";

interface EventArrivalUIProps {
  sequenceState: GlobalSequenceState;
}

export const EventArrivalUI: React.FC<EventArrivalUIProps> = ({ sequenceState }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { activeEvent, activeEventIndex, isArrivalRange } = sequenceState;

  const displayIndex = (activeEventIndex + 1).toString().padStart(2, "0");
  const totalEvents = "04";

  return (
    <>
      {/* 1. Left-Side Vertical Serial Events Navigation Panel */}
      <div className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
        <div className="bg-[#040814]/85 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 sm:p-5 shadow-[0_0_40px_rgba(0,0,0,0.8),0_0_20px_rgba(239,68,68,0.15)] flex flex-col w-[160px] sm:w-[210px] text-white">
          {/* Top Sci-Fi Border Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-white to-blue-500 opacity-70 rounded-t-2xl" />

          {/* Heading */}
          <div className="border-b border-white/10 pb-2 mb-3 font-mono">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-red-500 uppercase block">
              EVENTS NAME
            </span>
          </div>

          {/* Vertical Serial List (Names Only - No Icons) */}
          <div className="flex flex-col space-y-2 font-mono">
            {eventsSequenceData.map((evt, idx) => {
              const isActive = activeEventIndex === idx;

              // Smooth scroll handler when clicking an event name
              const handleEventClick = () => {
                let accum = 0;
                for (let k = 0; k < idx; k++) {
                  accum += eventsSequenceData[k].frameCount;
                }
                const arrivalTargetFrame = accum + (evt.arrival.startFrame - evt.minFrame);
                const targetProgress = arrivalTargetFrame / TOTAL_GLOBAL_FRAMES;

                if (typeof window !== "undefined") {
                  const maxScroll =
                    document.documentElement.scrollHeight - window.innerHeight;
                  window.scrollTo({
                    top: maxScroll * targetProgress,
                    behavior: "smooth",
                  });
                }
              };

              return (
                <button
                  key={evt.id}
                  onClick={handleEventClick}
                  className={`group relative text-left py-2 px-2.5 sm:px-3 rounded-lg transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? "bg-gradient-to-r from-red-600/35 to-blue-600/35 border border-white/20 text-white shadow-[0_0_15px_rgba(239,68,68,0.35)]"
                      : "hover:bg-white/5 border border-transparent text-white/50 hover:text-white/90"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] tracking-widest text-cyan-400/90 font-bold uppercase mb-0.5">
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors ${
                        isActive
                          ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                          : ""
                      }`}
                    >
                      {evt.title}
                    </span>
                  </div>

                  {/* Active Indicator Pulse */}
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Floating Cinematic Event Arrival Card (Bottom-Right) */}
      <AnimatePresence mode="wait">
        {isArrivalRange && (
          <motion.div
            key={`card-${activeEvent.id}`}
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1.0 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-3 sm:right-6 md:right-10 md:bottom-12 z-30 w-[calc(100vw-24px)] max-w-[360px] sm:w-[400px] md:w-[440px] pointer-events-auto"
          >
            <div className="relative bg-[#040814]/85 backdrop-blur-xl border border-white/15 rounded-xl p-5 md:p-6 shadow-[0_0_50px_rgba(239,68,68,0.18),0_0_25px_rgba(59,130,246,0.18)] overflow-hidden">
              {/* Top sci-fi border highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-white to-blue-500 opacity-70" />

              {/* Card Header Label */}
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5 font-mono">
                <span className="text-xs tracking-widest text-red-400 font-semibold">
                  EVENT {displayIndex} / {totalEvents}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded border border-blue-500/30 bg-blue-950/40 text-blue-300 tracking-wider">
                  {activeEvent.category}
                </span>
              </div>

              {/* Event Title */}
              <h2 className="text-xl md:text-2xl font-bold tracking-wider text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                {activeEvent.title}
              </h2>

              {/* Event Description */}
              <p className="text-xs md:text-sm text-white/80 leading-relaxed mb-5 font-sans">
                {activeEvent.description}
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 font-mono">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(true)}
                  className="py-2.5 px-3 rounded bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider hover:border-red-400/50 transition-all text-center"
                >
                  VIEW EVENT
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.3 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(239, 68, 68, 0.6)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push(`/register?event=${activeEvent.id}`)}
                  className="py-2.5 px-3 rounded bg-gradient-to-r from-red-600 to-blue-600 text-white text-xs font-bold tracking-wider shadow-[0_0_15px_rgba(239,68,68,0.35)] transition-all text-center"
                >
                  REGISTER
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Cinematic View Event Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-auto"
          >
            {/* Backdrop Blur */}
            <div
              className="absolute inset-0 bg-black/75 backdrop-blur-xl cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Panel */}
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#050b18] border border-white/20 rounded-2xl shadow-[0_0_80px_rgba(239,68,68,0.25)] overflow-hidden text-white p-6 sm:p-8 z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono text-red-500 tracking-[0.3em] uppercase block mb-1">
                    EVENT {displayIndex} / {totalEvents} • {activeEvent.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-white">
                    {activeEvent.title}
                  </h2>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/20 text-white/60 hover:text-white hover:bg-white/15 flex items-center justify-center transition-colors text-lg"
                >
                  ✕
                </button>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 font-sans">
                {activeEvent.description}
              </p>

              {/* Event Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 bg-white/5 border border-white/10 p-4 rounded-xl font-mono">
                <div>
                  <div className="text-white/40 text-[10px] tracking-widest uppercase mb-1">DATE</div>
                  <div className="text-xs sm:text-sm font-semibold">OCT 12-14, 2026</div>
                </div>
                <div>
                  <div className="text-white/40 text-[10px] tracking-widest uppercase mb-1">VENUE</div>
                  <div className="text-xs sm:text-sm font-semibold">MAIN AUDITORIUM</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-white/40 text-[10px] tracking-widest uppercase mb-1">PRIZE POOL</div>
                  <div className="text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
                    ₹50,000
                  </div>
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="flex space-x-4 font-mono">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    router.push(`/register?event=${activeEvent.id}`);
                  }}
                  className="flex-1 py-3.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg text-white font-bold text-xs sm:text-sm tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:brightness-110 transition-all text-center"
                >
                  REGISTER
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3.5 border border-white/20 rounded-lg text-white/70 hover:text-white hover:bg-white/10 font-bold text-xs sm:text-sm tracking-widest transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventArrivalUI;
