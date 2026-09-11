"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ParticipatingState } from "@/data/events";

interface EventParticipatingStatesProps {
  title?: string;
  states: ParticipatingState[];
}

const StateCard: React.FC<{ state: ParticipatingState; index: number }> = ({
  state,
  index,
}) => {
  const [imgError, setImgError] = useState(false);
  const stateNumber = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
      className="group relative rounded-xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.25)] flex flex-col"
    >
      {/* Image / Visual Container */}
      <div className="relative w-full aspect-[16/11] overflow-hidden bg-[#0a0d14]">
        {!imgError ? (
          <img
            src={state.imageUrl}
            alt={state.description}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-red-950/40 via-slate-900 to-[#050811] p-4 text-center">
            <span className="text-3xl mb-1">📍</span>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
              {state.description}
            </span>
          </div>
        )}

        {/* Ambient Overlay Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-black/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-red-950/10 group-hover:bg-transparent transition-colors pointer-events-none" />

        {/* State Index Tag */}
        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-red-400 tracking-wider">
          #{stateNumber}
        </div>

        {/* Location Pin Icon */}
        <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-[10px] opacity-75 group-hover:opacity-100 transition-opacity">
          📍
        </div>
      </div>

      {/* Card Info Banner */}
      <div className="p-3 sm:p-4 bg-gradient-to-b from-[#070b14] to-[#02040a] border-t border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center space-x-2 min-w-0">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:shadow-[0_0_8px_rgba(239,68,68,1)] transition-shadow shrink-0" />
          <h3 className="text-xs sm:text-sm font-black font-mono text-white tracking-wide truncate group-hover:text-red-300 transition-colors uppercase">
            {state.description}
          </h3>
        </div>
      </div>

      {/* Cyber Corner Accent */}
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500/60 pointer-events-none" />
    </motion.div>
  );
};

export const EventParticipatingStates: React.FC<EventParticipatingStatesProps> = ({
  title = "Past Participating States",
  states,
}) => {
  if (!states || states.length === 0) return null;

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 pb-4 border-b border-white/10 gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-red-400 uppercase font-bold block mb-1.5">
              // NATIONWIDE FOOTPRINT ({states.length}+ STATES & UTs)
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-mono tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              {title}
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md">
            Innovators, developers, and engineering teams from across the nation have competed at SHIVATECH Hackathons.
          </p>
        </div>

        {/* Responsive Grid of 16 States */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {states.map((state, idx) => (
            <StateCard key={state.id || idx} state={state} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventParticipatingStates;
