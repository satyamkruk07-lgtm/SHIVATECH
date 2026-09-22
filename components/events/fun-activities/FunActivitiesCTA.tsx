"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const FunActivitiesCTA: React.FC = () => {
  const scrollToActivities = () => {
    const el = document.getElementById("activities-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/5 overflow-hidden text-center">
      {/* Ambient Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase font-bold mb-3">
          // JOIN SHIVA INNOVEX 2026
        </span>

        {/* Heading: READY TO PLAY? */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase mb-4 leading-tight font-orbitron drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]"
        >
          READY TO PLAY?
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base font-sans text-slate-300 max-w-xl leading-relaxed mb-5"
        >
          Choose your activity and be part of the fun at SHIVA INNOVEX.
        </motion.p>

        {/* Registration Fee Reminder Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs sm:text-sm font-mono font-bold text-pink-300 tracking-wider uppercase shadow-[0_0_20px_rgba(236,72,153,0.2)]">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            <span>REGISTRATION FEE — ₹50 / PER PERSON</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 font-mono w-full sm:w-auto"
        >
          <Link
            href="/register?event=fun-activities-and-games"
            className="w-full sm:w-auto py-4 px-10 rounded-xl font-bold tracking-widest text-xs sm:text-sm uppercase text-center text-white bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>REGISTER NOW (₹50 / PERSON) →</span>
          </Link>

          <button
            onClick={scrollToActivities}
            className="w-full sm:w-auto py-4 px-8 rounded-xl font-semibold tracking-wider text-xs sm:text-sm uppercase text-center text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/15 transition-all duration-200 cursor-pointer"
          >
            <span>VIEW ACTIVITIES ↓</span>
          </button>

          <Link
            href="/events"
            className="w-full sm:w-auto py-4 px-6 rounded-xl font-semibold tracking-wider text-xs uppercase text-center text-slate-400 hover:text-white border border-white/15 hover:border-white/30 bg-white/[0.02] transition-all duration-200"
          >
            <span>← ALL EVENTS</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FunActivitiesCTA;
