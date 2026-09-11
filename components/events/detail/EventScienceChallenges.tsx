"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScienceChallenge } from "@/data/events";

interface EventScienceChallengesProps {
  challenges: ScienceChallenge[];
}

export const EventScienceChallenges: React.FC<EventScienceChallengesProps> = ({ challenges }) => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-purple-400 uppercase font-bold block mb-1.5">
            // COMPETITIVE CHALLENGE TRACKS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-mono tracking-tight text-white uppercase mb-3">
            CHAMPIONSHIP ARENA CHALLENGES
          </h2>
          <p className="text-xs sm:text-sm font-mono text-slate-400">
            Four specialized competitions testing speed, scientific reasoning, hardware engineering, and venture pitching.
          </p>
        </div>

        {/* 4 Cards 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 font-mono">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-purple-950/25 via-[#070b18] to-[#03050e] border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.06)] group hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-purple-400 px-2.5 py-1 rounded bg-purple-500/15 border border-purple-500/30">
                    EVENT {challenge.number} // {challenge.tag}
                  </span>
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {challenge.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-black text-white tracking-wide group-hover:text-purple-200 transition-colors mb-0.5">
                  {challenge.title}
                </h3>
                <span className="text-xs text-purple-400 font-bold block mb-3">
                  {challenge.subtitle}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 font-sans font-normal leading-relaxed mb-6">
                  {challenge.description}
                </p>
              </div>

              {/* Format Footer */}
              <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-purple-300/90 font-semibold">
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span>{challenge.format}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventScienceChallenges;
