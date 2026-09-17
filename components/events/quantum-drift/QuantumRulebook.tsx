"use client";

import React from "react";
import { motion } from "framer-motion";

export const QuantumRulebook: React.FC = () => {
  const rulebookUrl = "/events/quantum-drift/Quantum_Drift_2026_Rulebook.pdf";

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/5 overflow-hidden">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 text-xs tracking-[0.3em] uppercase text-sky-400 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span>SECTION 08 // OFFICIAL DOCUMENTATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-orbitron">
            OFFICIAL RULEBOOK
          </h2>

          <p className="text-sm text-slate-400 max-w-xl mt-3 font-sans tracking-wide">
            QUANTUM DRIFT 2026 — Official Rules, Technical Guidelines & Arena Regulations.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-sky-400 to-red-500 rounded-full mt-6" />
        </div>

        {/* Premium Futuristic Document Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-white/[0.04] via-[#030612] to-black border border-sky-400/30 hover:border-sky-400/60 shadow-[0_0_50px_rgba(56,189,248,0.15)] relative group backdrop-blur-xl transition-all duration-300 border-l-4 border-l-red-500"
        >
          {/* Subtle Ambient Badge Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            {/* Left: Document Icon & Details */}
            <div className="flex items-start space-x-5 sm:space-x-6">
              {/* PDF Document Holographic Icon */}
              <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl bg-[#070d1e] border border-sky-400/40 flex flex-col items-center justify-between p-2.5 shadow-[0_0_25px_rgba(56,189,248,0.25)] flex-shrink-0 group-hover:scale-105 transition-transform">
                <div className="w-full flex justify-between items-center text-[9px] text-sky-400 font-mono">
                  <span>PDF</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                </div>
                {/* File Icon Graphic */}
                <svg
                  className="w-8 h-8 text-sky-300 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="px-2 py-0.5 rounded text-[8px] font-black uppercase bg-red-600 text-white tracking-wider">
                  OFFICIAL
                </span>
              </div>

              {/* Document Text Metadata */}
              <div>
                <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/25 text-sky-400 text-[10px] font-bold tracking-widest uppercase mb-2">
                  <span>DOCUMENT ID: QD-2026-RULEBOOK</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase font-orbitron tracking-tight">
                  QUANTUM DRIFT 2026 RULEBOOK
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-sans mt-2 max-w-xl leading-relaxed">
                  Contains certified arena measurements, match scoring rubrics, combat restrictions, qualification thresholds, and vehicle safety standards.
                </p>

                {/* Technical Meta Pills */}
                <div className="flex flex-wrap items-center gap-3 mt-4 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center space-x-1.5">
                    <span className="text-red-400">●</span>
                    <span>FORMAT: PDF</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <span className="text-sky-400">●</span>
                    <span>SIZE: ~390 KB</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <span className="text-emerald-400">●</span>
                    <span>STATUS: FINAL & CERTIFIED</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Action Buttons (View & Download) */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 w-full lg:w-auto flex-shrink-0">
              {/* View Rulebook Button */}
              <a
                href={rulebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold tracking-[0.2em] text-xs uppercase text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-[0_0_25px_rgba(239,68,68,0.35)] border border-red-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 text-center"
              >
                <span>VIEW RULEBOOK</span>
                <span className="text-sm">↗</span>
              </a>

              {/* Download Rulebook Button */}
              <a
                href={rulebookUrl}
                download="Quantum_Drift_2026_Rulebook.pdf"
                className="px-6 py-3.5 rounded-xl font-bold tracking-[0.2em] text-xs uppercase text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-sky-400/40 hover:border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 text-center"
              >
                <span>DOWNLOAD PDF</span>
                <span className="text-sky-400 text-sm">↓</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuantumRulebook;
