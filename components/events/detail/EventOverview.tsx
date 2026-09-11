"use client";

import React from "react";
import { motion } from "framer-motion";
import { EventItem } from "@/data/events";

interface EventOverviewProps {
  event: EventItem;
}

export const EventOverview: React.FC<EventOverviewProps> = ({ event }) => {
  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Column: Heading & Core Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-4"
          >
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>OFFICIAL EVENT PROPOSAL DETAILS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black font-mono tracking-tight text-white uppercase leading-tight">
              EXECUTIVE OVERVIEW & OBJECTIVES
            </h2>

            <p className="text-xs sm:text-sm font-mono text-slate-400 tracking-wider">
              {event.tagline}
            </p>

            {/* Schedule Breakdown Box if present */}
            {event.fullDateSchedule && event.fullDateSchedule.length > 0 && (
              <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
                <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 font-bold uppercase block mb-2">
                  EVENT TIMELINE IN SHIVATECH 2026:
                </span>
                <div className="space-y-2">
                  {event.fullDateSchedule.map((line, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 flex items-start space-x-2"
                    >
                      <span className="text-red-400 font-bold shrink-0">▸</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column: Source Description & Key Purposes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Primary Source Description */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xs font-mono tracking-[0.25em] text-red-400 font-extrabold uppercase mb-3">
                // EVENT DESCRIPTION (SOURCE DOCUMENT)
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-sans leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Key Purpose & Target Outcomes */}
            {event.purpose && event.purpose.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono tracking-[0.25em] text-white/50 uppercase font-bold">
                  CORE OBJECTIVES & PARTICIPANT VALUE
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
                  {event.purpose.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start space-x-3 text-xs sm:text-sm text-slate-300 leading-normal"
                    >
                      <span className="w-5 h-5 rounded-md bg-white/5 border border-white/15 flex items-center justify-center text-[10px] font-mono font-bold text-red-400 shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
