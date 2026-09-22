"use client";

import React from "react";
import { motion } from "framer-motion";

export const FunActivitiesAbout: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/5 overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-18">
          <div className="flex items-center space-x-2 text-xs tracking-[0.3em] uppercase text-cyan-400 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>SECTION 02 // FESTIVAL EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-orbitron">
            ABOUT THE ACTIVITIES
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full mt-6" />
        </div>

        {/* Informational Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] via-[#040817] to-black border border-white/15 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
        >
          {/* Subtle Cyber Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="text-3xl mb-4">🎨 ⚔️</span>

            <p className="text-base sm:text-lg lg:text-xl font-sans text-slate-200 leading-relaxed text-center mb-8">
              <strong className="text-white font-bold">FUN ACTIVITIES & GAMES</strong> brings together creative and competitive activities where students can participate, have fun and showcase their skills.
            </p>

            {/* 2-Pillar Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full text-left">
              {/* Pillar 1 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-purple-500/25 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 text-sm font-bold">
                    01
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase font-orbitron">
                    CREATIVE EXPRESSION
                  </h4>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Celebrate individual and collaborative artistic vision through safe, vibrant Web of Colour and living canvas creations.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-cyan-500/25 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-sm font-bold">
                    02
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase font-orbitron">
                    DYNAMIC ARENA CLASHES
                  </h4>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Step into the battle arena for fast-paced, high-intensity Beyblade showdowns testing launch precision, endurance, and tactical timing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FunActivitiesAbout;
