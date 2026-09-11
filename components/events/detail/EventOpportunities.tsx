"use client";

import React from "react";
import { motion } from "framer-motion";

interface EventOpportunitiesProps {
  opportunities: string[];
}

export const EventOpportunities: React.FC<EventOpportunitiesProps> = ({ opportunities }) => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl p-6 sm:p-10 bg-gradient-to-br from-blue-950/20 via-[#060b18] to-[#02040a] border border-blue-500/30 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-mono tracking-[0.25em] text-sky-400 uppercase font-bold block mb-2">
                // POST-EVENT VENTURE ACCELERATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white uppercase mb-3">
                SPECIAL OPPORTUNITIES & INCUBATION
              </h3>
              <p className="text-xs sm:text-sm font-mono text-slate-300">
                Promising ideas emerging from the Ideathon may be considered for incubation, capital backing, and mentorship by the Centre for Business Incubation & Innovation (CBII).
              </p>
            </div>

            {/* Opportunities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 font-mono text-xs mb-10">
              {opportunities.map((opp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-sky-500/40 transition-all flex items-start space-x-3 text-slate-200"
                >
                  <span className="text-sky-400 font-bold shrink-0 mt-0.5">✦</span>
                  <span className="leading-relaxed font-sans">{opp}</span>
                </motion.div>
              ))}
            </div>

            {/* Innovation Pipeline (from PDF Section 4.1 & 18) */}
            <div className="pt-6 border-t border-white/10 font-mono">
              <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-bold block mb-3">
                VENTURE COMMERCIALISATION PIPELINE:
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-sky-300">
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">Idea</span>
                <span>→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">Mentorship</span>
                <span>→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">Prototype</span>
                <span>→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">Incubation</span>
                <span>→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">Funding</span>
                <span>→</span>
                <span className="px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-200 border border-sky-500/40">Market Launch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOpportunities;
