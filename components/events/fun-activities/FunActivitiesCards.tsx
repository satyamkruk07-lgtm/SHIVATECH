"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ActivityData {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  accent: "magenta" | "cyan";
  highlights: string[];
  moreDetails: string[];
}

const activities: ActivityData[] = [
  {
    id: "skin-artistry",
    number: "01",
    name: "SKIN ARTISTRY",
    tagline: "CREATIVE BODY & SKIN CANVAS",
    description:
      "Unleash your creativity through colors and transform skin into a canvas. Create unique artistic designs, patterns and visual expressions using skin-safe body paints.",
    image: "/events/fun-activities/skin-artistry.jpg",
    accent: "magenta",
    highlights: [
      "Creative body painting",
      "Individual artistic expression",
      "Unique designs and patterns",
      "Fun and interactive participation",
    ],
    moreDetails: [
      "Safe, certified skin-friendly body paints and application brushes provided at the activity station.",
      "Open to solo artists, duos, and collaborative model-painter participant pairs.",
      "Freeform creative themes encouraging abstract, cyber, cultural, or futuristic visual motifs.",
      "Live showcase and festival photo opportunities celebrating every completed design.",
    ],
  },
  {
    id: "beyblade-tournament",
    number: "02",
    name: "BEYBLADE TOURNAMENT",
    tagline: "HIGH-OCTANE ARENA CLASH",
    description:
      "Step into the arena and put your Beyblade skills to the test! Compete against other participants in exciting battles, outlast your opponents and prove your Beyblade mastery.",
    image: "/events/fun-activities/beyblade-tournament.jpg",
    accent: "cyan",
    highlights: [
      "Competitive Beyblade battles",
      "Knockout-style excitement",
      "Strategy and timing",
      "Challenge other participants",
      "Winner takes the arena",
    ],
    moreDetails: [
      "Tournament battles hosted in official circular battle dishes with high-visibility spectator boundaries.",
      "Fast-paced single-elimination tournament bracket leading to championship head-to-heads.",
      "Balanced launch timing, attack strategies, and stamina endurance determine each round winner.",
      "Open to beginner spinners and seasoned competitors looking to claim the festival arena crown.",
    ],
  },
];

export const FunActivitiesCards: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="activities-section"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#02040a] font-mono border-t border-white/5 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="flex items-center space-x-2 text-xs tracking-[0.3em] uppercase text-purple-400 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span>SECTION 01 // FEATURED ACTIVITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-orbitron">
            THE ACTIVITIES
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3 font-sans tracking-wide">
            Two distinct arenas of festival fun. Explore artistic expression or battle for tournament glory.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full mt-6" />
        </div>

        {/* 2 Large Premium Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {activities.map((act, idx) => {
            const isMagenta = act.accent === "magenta";
            const isExpanded = expandedId === act.id;

            const borderColors = isMagenta
              ? "border-purple-500/30 hover:border-pink-500/80 shadow-[0_0_35px_rgba(168,85,247,0.12)] hover:shadow-[0_0_45px_rgba(236,72,153,0.25)]"
              : "border-cyan-500/30 hover:border-cyan-400/80 shadow-[0_0_35px_rgba(6,182,212,0.12)] hover:shadow-[0_0_45px_rgba(6,182,212,0.25)]";

            const badgeStyles = isMagenta
              ? "text-pink-300 bg-pink-500/15 border-pink-500/40"
              : "text-cyan-300 bg-cyan-500/15 border-cyan-500/40";

            const buttonGradient = isMagenta
              ? "bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_25px_rgba(219,39,119,0.35)]"
              : "bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-sky-500 shadow-[0_0_25px_rgba(6,182,212,0.35)]";

            return (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative rounded-3xl overflow-hidden border ${borderColors} transition-all duration-500 group bg-[#040814] flex flex-col justify-between`}
              >
                {/* 1. VISUAL IMAGE BANNER */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black">
                  <Image
                    src={act.image}
                    alt={act.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-[#040814]/40 to-transparent" />

                  {/* Top Activity Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-md text-[11px] font-black tracking-[0.2em] uppercase border backdrop-blur-md ${badgeStyles}`}>
                      ACTIVITY {act.number}
                    </span>
                  </div>
                </div>

                {/* 2. CARD CONTENT */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tagline */}
                    <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400 block mb-1">
                      {act.tagline}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-orbitron tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                      {act.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                      {act.description}
                    </p>

                    {/* Highlights Section */}
                    <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2 text-[11px] font-black tracking-[0.2em] uppercase text-slate-400">
                          <span className={`w-1.5 h-1.5 rounded-full ${isMagenta ? "bg-pink-400" : "bg-cyan-400"}`} />
                          <span>EVENT HIGHLIGHTS</span>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase border ${badgeStyles}`}>
                          ₹50 / PERSON
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {act.highlights.map((h, i) => (
                          <li key={i} className="flex items-start space-x-2.5 text-xs text-slate-200 font-sans">
                            <span className={isMagenta ? "text-pink-400 font-bold" : "text-cyan-400 font-bold"}>
                              •
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expandable Overview Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-6 overflow-hidden"
                        >
                          <div className={`p-4 sm:p-5 rounded-2xl border ${isMagenta ? "bg-purple-950/20 border-purple-500/30" : "bg-cyan-950/20 border-cyan-500/30"}`}>
                            <span className={`text-[10px] font-black tracking-[0.2em] uppercase block mb-2.5 ${isMagenta ? "text-pink-300" : "text-cyan-300"}`}>
                              ACTIVITY OVERVIEW & GUIDELINES
                            </span>
                            <ul className="space-y-2 text-xs text-slate-300 font-sans">
                              {act.moreDetails.map((detail, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-white font-bold">✓</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Footer with Register & Details Buttons */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href={`/register?event=fun-activities-and-games&activity=${act.id}`}
                        className={`py-3 px-5 rounded-xl font-bold tracking-widest text-xs uppercase text-white ${buttonGradient} border border-white/20 transition-all flex items-center justify-center space-x-2 shadow-md hover:brightness-110 active:scale-95`}
                      >
                        <span>REGISTER (₹50)</span>
                        <span className="text-sm leading-none">→</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => toggleDetails(act.id)}
                        className="py-3 px-4 rounded-xl font-semibold tracking-wider text-xs uppercase text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/15 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                      >
                        <span>{isExpanded ? "HIDE DETAILS" : "VIEW DETAILS"}</span>
                        <span className="text-xs leading-none">{isExpanded ? "↑" : "↓"}</span>
                      </button>
                    </div>

                    <div className="flex items-center space-x-1.5 text-[11px] font-bold text-emerald-400 font-mono self-center sm:self-auto">
                      <span>●</span>
                      <span>ENTRY: ₹50 / PERSON</span>
                    </div>
                  </div>
                </div>

                {/* Tech HUD Corner Cuts */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/30 pointer-events-none" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/30 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/30 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/30 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FunActivitiesCards;
