"use client";

import React from "react";
import { GlobalSequenceState, eventsSequenceData } from "@/data/events";

interface EventDebugHUDProps {
  sequenceState: GlobalSequenceState;
}

export const EventDebugHUD: React.FC<EventDebugHUDProps> = ({ sequenceState }) => {
  const { activeEvent, activeEventIndex, frameNumber, eventProgress, globalProgress } = sequenceState;
  const totalEvents = eventsSequenceData.length;
  const displayIndex = (activeEventIndex + 1).toString().padStart(2, "0");
  const displayTotal = totalEvents.toString().padStart(2, "0");

  return (
    <div className="fixed top-24 left-6 z-40 pointer-events-none flex flex-col space-y-3 font-mono">
      {/* Sci-fi Event Card HUD */}
      <div className="bg-[#050b18]/80 border border-cyan-500/30 backdrop-blur-md px-4 py-3 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col space-y-1.5 min-w-[240px]">
        <div className="flex items-center justify-between text-xs tracking-widest text-cyan-400/80">
          <span className="font-semibold">EVENT {displayIndex} / {displayTotal}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40 text-cyan-300">
            {activeEvent.category}
          </span>
        </div>

        <h2 className="text-lg font-bold tracking-wider text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
          {activeEvent.title}
        </h2>

        {/* Event local progress bar */}
        <div className="w-full bg-cyan-950/50 h-1 rounded-full overflow-hidden border border-cyan-500/20">
          <div
            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full transition-all duration-75"
            style={{ width: `${Math.round(eventProgress * 100)}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[10px] text-cyan-400/60 pt-0.5">
          <span>FRAME: {frameNumber} / {activeEvent.maxFrame}</span>
          <span>PROG: {Math.round(globalProgress * 100)}%</span>
        </div>
      </div>
    </div>
  );
};

export default EventDebugHUD;
