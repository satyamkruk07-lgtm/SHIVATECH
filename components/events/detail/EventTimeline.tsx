"use client";

import React from "react";
import { motion } from "framer-motion";

interface EventTimelineProps {
  title?: string;
  subtitle?: string;
  steps: string[];
  accentColor?: "crimson" | "blue" | "emerald" | "purple";
}

export const EventTimeline: React.FC<EventTimelineProps> = ({
  title = "EXECUTION STRUCTURE & STAGES",
  subtitle = "STEP-BY-STEP PARTICIPANT PROGRESSION",
  steps,
  accentColor = "crimson",
}) => {
  const isCrimson = accentColor === "crimson";
  const isBlue = accentColor === "blue";
  const isEmerald = accentColor === "emerald";

  const activeColor = isCrimson
    ? "border-red-500/40 text-red-400 bg-red-500/10 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
    : isBlue
    ? "border-sky-500/40 text-sky-400 bg-sky-500/10 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
    : isEmerald
    ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
    : "border-purple-500/40 text-purple-400 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.2)]";

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase font-bold block mb-1.5">
            // {subtitle}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-mono tracking-tight text-white uppercase">
            {title}
          </h2>
        </div>

        {/* Process Flow Grid / Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
          {steps.map((step, index) => {
            const stepNum = (index + 1).toString().padStart(2, "0");
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`relative p-5 rounded-2xl bg-white/[0.03] border transition-all duration-300 flex flex-col justify-between ${
                  isLast ? activeColor : "border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-500">
                      PHASE {stepNum}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[10px] font-bold text-slate-300">
                      {index + 1}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wide mb-2 leading-snug">
                    {step}
                  </h3>
                </div>

                {/* Bottom Status / Arrow indicator */}
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400 uppercase font-semibold">
                  <span>{isLast ? "FINAL STAGE" : "MILESTONE"}</span>
                  <span>{isLast ? "★ COMPLETE" : "→ NEXT"}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
