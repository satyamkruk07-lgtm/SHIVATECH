"use client";

import React from "react";
import { motion } from "framer-motion";

interface Coordinator {
  id: string;
  code: string;
  name: string;
  role: string;
  phone?: string;
  accent: "crimson" | "cyan";
}

const coordinators: Coordinator[] = [
  {
    id: "coord-1",
    code: "COORDINATOR 01",
    name: "Kumar Satyam",
    role: "EVENT COORDINATOR",
    phone: "7060550243",
    accent: "crimson",
  },
  {
    id: "coord-2",
    code: "COORDINATOR 02",
    name: "Srishti Raj",
    role: "EVENT COORDINATOR",
    accent: "cyan",
  },
];

export const QuantumCoordinators: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-80 h-80 bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 text-xs tracking-[0.3em] uppercase text-red-400 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>SECTION 07 // DIRECT CONTACT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-orbitron">
            EVENT COORDINATORS
          </h2>

          <p className="text-sm text-slate-400 max-w-xl mt-3 font-sans tracking-wide">
            Have questions regarding Quantum Drift rules, arena specifications, or scheduling? Connect directly with our event leads.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-sky-400 to-red-500 rounded-full mt-6" />
        </div>

        {/* 2 Coordinator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {coordinators.map((coord, idx) => {
            const isCrimson = coord.accent === "crimson";

            return (
              <motion.div
                key={coord.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] via-[#040814] to-black border backdrop-blur-xl relative group transition-all duration-300 shadow-xl ${
                  isCrimson
                    ? "border-red-500/30 hover:border-red-500/60 shadow-[0_0_30px_rgba(239,68,68,0.1)]"
                    : "border-sky-500/30 hover:border-sky-500/60 shadow-[0_0_30px_rgba(56,189,248,0.1)]"
                }`}
              >
                {/* Top Code Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`px-3 py-1 rounded-md text-[10px] font-black tracking-widest uppercase border ${
                      isCrimson
                        ? "bg-red-500/15 border-red-500/30 text-red-400"
                        : "bg-sky-500/15 border-sky-500/30 text-sky-400"
                    }`}
                  >
                    {coord.code}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="flex items-center space-x-5 mb-6">
                  {/* Clean Generic Person / Coordinator Profile Icon */}
                  <div
                    className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl border-2 flex items-center justify-center relative shadow-lg ${
                      isCrimson
                        ? "border-red-500/50 bg-red-950/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.25)]"
                        : "border-sky-500/50 bg-sky-950/30 text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                    }`}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>

                  {/* Name and Role */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-orbitron tracking-tight">
                      {coord.name}
                    </h3>
                    <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase block mt-1">
                      {coord.role}
                    </span>
                  </div>
                </div>

                {/* Direct Phone or Coordinator Status */}
                {coord.phone ? (
                  <div className="pt-5 border-t border-white/10">
                    <span className="text-[10px] text-slate-500 tracking-wider uppercase block mb-1">
                      DIRECT PHONE / WHATSAPP
                    </span>
                    <a
                      href={`tel:${coord.phone}`}
                      className={`inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-xl border transition-all text-xs sm:text-sm font-bold tracking-wider ${
                        isCrimson
                          ? "bg-red-500/10 hover:bg-red-500/20 text-white hover:text-red-300 border-red-500/30 hover:border-red-500/60"
                          : "bg-sky-500/10 hover:bg-sky-500/20 text-white hover:text-sky-300 border-sky-500/30 hover:border-sky-500/60"
                      }`}
                    >
                      <span className="text-base">☎</span>
                      <span>{coord.phone}</span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest pl-1 font-mono">
                        (TAP TO CALL)
                      </span>
                    </a>
                  </div>
                ) : (
                  <div className="pt-5 border-t border-white/10">
                    <span className="text-[10px] text-slate-500 tracking-wider uppercase block mb-1">
                      COORDINATOR STATUS
                    </span>
                    <div
                      className={`inline-flex items-center space-x-2 px-3.5 py-2.5 rounded-xl border text-xs font-bold tracking-wider ${
                        isCrimson
                          ? "bg-red-500/10 text-red-300 border-red-500/30"
                          : "bg-sky-500/10 text-sky-300 border-sky-500/30"
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>OFFICIAL EVENT COORDINATOR</span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuantumCoordinators;
