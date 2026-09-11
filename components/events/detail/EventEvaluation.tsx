"use client";

import React from "react";
import { motion } from "framer-motion";
import { EvaluationParameter } from "@/data/events";

interface EventEvaluationProps {
  parameters: EvaluationParameter[];
}

export const EventEvaluation: React.FC<EventEvaluationProps> = ({ parameters }) => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          {/* Left Column: Heading & Summary */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <span className="text-[11px] font-mono tracking-[0.25em] text-red-400 uppercase font-bold">
              // SCORING CRITERIA
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-mono tracking-tight text-white uppercase leading-tight">
              EVALUATION PARAMETERS & WEIGHTAGE
            </h2>
            <p className="text-sm font-sans text-slate-400 leading-relaxed">
              Jury panels evaluate teams across 6 core technical and commercial parameters. All parameters combine to a 100% standardized score.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs text-slate-300">
              <span className="text-white font-bold block mb-1">TOTAL SCORING BENCHMARK: 100%</span>
              <p className="text-[11px] text-slate-400">
                Evaluation conducted through initial screening, mid-hackathon mentor checkpoints, prototype demo, and final stage pitch.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Parameter Bars */}
          <div className="lg:col-span-7 space-y-4 font-mono">
            {parameters.map((param, idx) => (
              <motion.div
                key={param.parameter}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-white tracking-wide">
                    {param.parameter}
                  </span>
                  <span className="font-mono font-black text-red-400 px-2.5 py-0.5 rounded bg-red-500/10 border border-red-500/25">
                    {param.weightage}
                  </span>
                </div>

                {/* Bar */}
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${param.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-red-600 via-red-500 to-amber-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventEvaluation;
