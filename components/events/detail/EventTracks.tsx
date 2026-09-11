"use client";

import React from "react";
import { motion } from "framer-motion";

interface EventTracksProps {
  title?: string;
  tracks: string[];
  accentColor?: "crimson" | "blue" | "emerald" | "purple";
  badgeText?: string;
}

const trackIcons: Record<string, string> = {
  "AI & Machine Learning": "🧠",
  "Artificial Intelligence & Machine Learning": "🧠",
  "Web & Mobile Applications": "📱",
  Cybersecurity: "🛡️",
  "IoT & Embedded Systems": "🔌",
  "Robotics & Automation": "🤖",
  "Drone Technology": "🛸",
  "Smart Campus": "🏫",
  "Sustainable Technology": "🌱",
  "Sustainable Development": "🌱",
  "Healthcare Technology": "🏥",
  FinTech: "💳",
  AgriTech: "🌾",
  "Smart Agriculture": "🌾",
  "Assistive Technology": "🦾",
  "Clean Energy": "⚡",
  "Electric Mobility": "🚗",
  "Rural Innovation": "🏡",
  EdTech: "📚",
  "Women & Child Safety": "🛡️",
  "Defence & Security": "⚔️",
  "Waste Management": "♻️",
  "Water Management": "💧",
  "Climate & Environment": "🌍",
  "Smart Cities": "🏙️",
  "Industry 4.0": "🏭",
};

export const EventTracks: React.FC<EventTracksProps> = ({
  title = "PROPOSED TRACKS & DOMAINS",
  tracks,
  accentColor = "crimson",
  badgeText = "INNOVATION FOCUS",
}) => {
  const isCrimson = accentColor === "crimson";
  const isBlue = accentColor === "blue";
  const isEmerald = accentColor === "emerald";

  const borderColor = isCrimson
    ? "group-hover:border-red-500/50"
    : isBlue
    ? "group-hover:border-sky-500/50"
    : isEmerald
    ? "group-hover:border-emerald-500/50"
    : "group-hover:border-purple-500/50";

  const dotColor = isCrimson
    ? "bg-red-400"
    : isBlue
    ? "bg-sky-400"
    : isEmerald
    ? "bg-emerald-400"
    : "bg-purple-400";

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 pb-4 border-b border-white/10 gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase font-bold block mb-1.5">
              // {badgeText} ({tracks.length} AREAS)
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-mono tracking-tight text-white uppercase">
              {title}
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-sm">
            Teams may develop solutions addressing real-world problem statements within these proposed challenge domains.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 font-mono">
          {tracks.map((track, idx) => {
            const icon = trackIcons[track] || "💡";
            const trackNumber = (idx + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={track}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                className={`group relative p-4 sm:p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 ${borderColor} transition-all duration-300 flex items-start space-x-3.5`}
              >
                {/* Track Icon */}
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                  {icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] text-slate-500 font-bold">
                      TRACK {trackNumber}
                    </span>
                    <span className={`w-1 h-1 rounded-full ${dotColor}`} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-slate-100 transition-colors leading-snug">
                    {track}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventTracks;
