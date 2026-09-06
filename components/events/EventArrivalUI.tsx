"use client";

import React, { useState, useEffect } from "react";
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
  const [dismissedEventId, setDismissedEventId] = useState<string | null>(null);

  const { activeEvent, activeEventIndex, isArrivalRange } = sequenceState;

  // Auto-reset manual dismissal when scrolling out of arrival range so card appears next time
  useEffect(() => {
    if (!isArrivalRange) {
      setDismissedEventId(null);
    }
  }, [isArrivalRange]);

  const displayIndex = (activeEventIndex + 1).toString().padStart(2, "0");
  const totalEvents = "04";

  return (
    <>
      {/* 1. Left-Side Vertical Serial Events Navigation Panel (Desktop / Tablet) */}
      <div className="hidden sm:block fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
        <div className="bg-[#040814]/85 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 sm:p-5 shadow-[0_0_40px_rgba(0,0,0,0.8),0_0_20px_rgba(239,68,68,0.15)] flex flex-col w-[160px] sm:w-[210px] text-white">
          {/* Top Sci-Fi Border Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-white to-blue-500 opacity-70 rounded-t-2xl" />

          {/* Heading */}
          <div className="border-b border-white/10 pb-2 mb-3 font-mono">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-red-500 uppercase block">
              EVENTS NAME
            </span>
          </div>

          {/* Vertical Serial List (Click scrolls camera directly to event arrival) */}
          <div className="flex flex-col space-y-2 font-mono">
            {eventsSequenceData.map((evt, idx) => {
              const isActive = activeEventIndex === idx;

              const handleEventClick = () => {
                setDismissedEventId(null);
                const segmentWidth = 0.25;
                const arrivalRatio = (evt.arrival.startFrame - evt.minFrame) / (evt.frameCount - 1);
                const targetProgress = idx * segmentWidth + segmentWidth * arrivalRatio;

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

      {/* 1B. Mobile Floating Events Bottom Selector Bar with Number AND Event Name */}
      <div className="sm:hidden fixed bottom-3 left-2.5 right-2.5 z-30 pointer-events-auto">
        <div className="bg-[#040814]/92 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_20px_rgba(239,68,68,0.2)]">
          {/* Active Event Current Status Bar */}
          <div className="flex items-center justify-between px-2 pb-1.5 mb-1.5 border-b border-white/10 font-mono text-[10px]">
            <span className="text-slate-400 tracking-wider">EVENTS:</span>
            <span className="text-red-400 font-bold tracking-widest uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              {activeEvent.title}
            </span>
          </div>

          {/* Horizontal scrollable event buttons with Number + Name */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar font-mono py-0.5">
            {eventsSequenceData.map((evt, idx) => {
              const isActive = activeEventIndex === idx;

              const handleEventClick = () => {
                setDismissedEventId(null);
                const segmentWidth = 0.25;
                const arrivalRatio = (evt.arrival.startFrame - evt.minFrame) / (evt.frameCount - 1);
                const targetProgress = idx * segmentWidth + segmentWidth * arrivalRatio;

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
                  className={`shrink-0 py-1.5 px-2.5 rounded-xl flex items-center space-x-1.5 transition-all text-xs ${
                    isActive
                      ? "bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-white/30"
                      : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                  }`}
                >
                  <span className={`text-[10px] font-bold ${isActive ? "text-cyan-200" : "text-red-400"}`}>
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
                    {evt.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* DEV-ONLY SEQUENCE DEBUG OVERLAY (Hidden in production) */}
      {process.env.NODE_ENV !== "production" && (
        <div className="fixed top-16 right-3 sm:top-20 sm:right-6 z-40 bg-[#040814]/90 backdrop-blur-md border border-red-500/50 text-white font-mono text-xs p-2.5 rounded-xl pointer-events-none select-none shadow-[0_0_20px_rgba(239,68,68,0.3)]">
          <div className="text-red-500 font-extrabold tracking-widest uppercase text-[10px] mb-1">
            DEV SEQUENCE DEBUG
          </div>
          <div className="flex items-center space-x-2 text-[11px] mb-0.5">
            <span className="text-slate-400">EVENT:</span>
            <span className="text-white font-bold">{activeEvent.title}</span>
          </div>
          <div className="flex items-center space-x-2 text-[11px] mb-0.5">
            <span className="text-slate-400">FRAME:</span>
            <span className="text-cyan-400 font-bold">
              {sequenceState.frameNumber} / {activeEvent.maxFrame}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-[10px]">
            <span className="text-slate-400">PROGRESS:</span>
            <span className="text-red-400 font-bold">
              {(sequenceState.eventProgress * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      )}

      {/* 2. Detailed Event Arrival Modal/Card (Appears on arrival, disappears on scroll) */}
      <AnimatePresence mode="wait">
        {isArrivalRange && dismissedEventId !== activeEvent.id && (
          <motion.div
            key={`arrival-detail-card-${activeEvent.id}`}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1.0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-6 pointer-events-none"
          >
            <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-[#050b18]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_0_80px_rgba(239,68,68,0.25)] text-white p-5 sm:p-8 pointer-events-auto select-none">
              {/* Top sci-fi border highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-white to-blue-500 opacity-70" />

              {/* Close (X) Button */}
              <button
                onClick={() => setDismissedEventId(activeEvent.id)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/20 text-white/60 hover:text-white hover:bg-white/15 flex items-center justify-center transition-colors text-base"
                aria-label="Close detail card"
              >
                ✕
              </button>

              {/* Header Label */}
              <div className="mb-3 font-mono">
                <span className="text-xs font-bold text-red-500 tracking-[0.25em] uppercase">
                  EVENT {displayIndex} / {totalEvents} • {activeEvent.category}
                </span>
              </div>

              {/* Event Title */}
              <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-white mb-3 drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] uppercase font-mono">
                {activeEvent.title}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                {activeEvent.description}
              </p>

              {/* Event Metadata Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6 bg-white/5 border border-white/10 p-3.5 sm:p-4 rounded-xl font-mono">
                <div>
                  <div className="text-slate-400 text-[9px] sm:text-[10px] tracking-widest uppercase mb-1">DATE</div>
                  <div className="text-xs sm:text-sm font-bold text-white">OCT 12-14, 2026</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[9px] sm:text-[10px] tracking-widest uppercase mb-1">VENUE</div>
                  <div className="text-xs sm:text-sm font-bold text-white uppercase">MAIN AUDITORIUM</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[9px] sm:text-[10px] tracking-widest uppercase mb-1">PRIZE POOL</div>
                  <div className="text-xs sm:text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
                    ₹50,000
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 font-mono">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(239, 68, 68, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push(`/register?event=${activeEvent.id}`)}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold text-xs sm:text-sm tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.35)] transition-all text-center uppercase"
                >
                  REGISTER FOR {activeEvent.title}
                </motion.button>
                <button
                  onClick={() => setDismissedEventId(activeEvent.id)}
                  className="px-5 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white font-bold text-xs sm:text-sm tracking-widest transition-colors uppercase"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventArrivalUI;
