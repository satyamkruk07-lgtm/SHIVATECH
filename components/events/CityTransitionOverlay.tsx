"use client";

import React, { useMemo } from "react";
import { GlobalSequenceState } from "@/data/events";

interface CityTransitionOverlayProps {
  sequenceState: GlobalSequenceState;
}

interface TransitionZone {
  index: number;
  fromEvent: string;
  toEvent: string;
  startProgress: number;
  endProgress: number;
  centerProgress: number;
  direction: "rtl" | "ltr"; // Right-to-Left or Left-to-Right
  accentColor: string;
  secondaryColor: string;
  sectorTag: string;
}

const TRANSITION_ZONES: TransitionZone[] = [
  {
    index: 1,
    fromEvent: "HACKNATION 2.0",
    toEvent: "IDEATHON",
    startProgress: 0.235,
    endProgress: 0.265,
    centerProgress: 0.25,
    direction: "rtl",
    accentColor: "#ef4444", // Crimson/Red
    secondaryColor: "#38bdf8", // Cyan
    sectorTag: "SECTOR 02 // IDEATHON DISTRICT",
  },
  {
    index: 2,
    fromEvent: "IDEATHON",
    toEvent: "SHIVATECH",
    startProgress: 0.485,
    endProgress: 0.515,
    centerProgress: 0.50,
    direction: "ltr",
    accentColor: "#38bdf8", // Sky blue
    secondaryColor: "#818cf8", // Indigo
    sectorTag: "SECTOR 03 // SHIVATECH EXPO ARENA",
  },
  {
    index: 3,
    fromEvent: "SHIVATECH",
    toEvent: "SCIENCE CHAMPIONSHIP",
    startProgress: 0.735,
    endProgress: 0.765,
    centerProgress: 0.75,
    direction: "rtl",
    accentColor: "#a855f7", // Purple
    secondaryColor: "#ef4444", // Red
    sectorTag: "SECTOR 04 // SCIENCE CHAMPIONSHIP COMPLEX",
  },
];

export const CityTransitionOverlay: React.FC<CityTransitionOverlayProps> = ({
  sequenceState,
}) => {
  const { globalProgress } = sequenceState;

  // Detect which transition zone is active
  const activeZone = useMemo(() => {
    return TRANSITION_ZONES.find(
      (zone) =>
        globalProgress >= zone.startProgress && globalProgress <= zone.endProgress
    );
  }, [globalProgress]);

  if (!activeZone) return null;

  // Normalized transition progress from 0.0 (start) to 1.0 (end)
  const range = activeZone.endProgress - activeZone.startProgress;
  const rawT = (globalProgress - activeZone.startProgress) / range;
  const t = Math.max(0, Math.min(1, rawT));

  // Occlusion progress: peaks at center (t = 0.5) where the skyscraper is dead-center
  // distanceFromCenter is 0 at center, 0.5 at edges
  const distanceFromCenter = Math.abs(t - 0.5);
  const occlusionStrength = Math.max(0, 1 - distanceFromCenter * 2.8); // 1.0 at center, drops to 0 by t ~0.15 and 0.85

  // Smooth cubic easing for continuous, fluid velocity without abrupt start/stop
  const smoothT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  // Skyscraper X translation:
  // For 'rtl': moves from +130% to -130%
  // For 'ltr': moves from -130% to +130%
  const sign = activeZone.direction === "rtl" ? 1 : -1;
  const translateX = (0.5 - smoothT) * 260 * sign; // at smoothT=0.5 -> 0vw

  // Parallax secondary building layer translation (moves faster across background)
  const secondaryTranslateX = (0.5 - smoothT) * 360 * sign;

  // Atmospheric fog opacity and drift
  const fogOpacity = Math.sin(t * Math.PI) * 0.85;
  const fogTranslateX = (t - 0.5) * 60; // in px

  // Speed lines & light streak opacity
  const speedLinesOpacity = Math.sin(t * Math.PI) * 0.65;

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-20 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. ATMOSPHERIC VOLUMETRIC MIST LAYERS (Rolls across camera before building wipe) */}
      <div
        className="absolute inset-0 w-full h-full will-change-[opacity,transform]"
        style={{ opacity: fogOpacity }}
      >
        {/* Low-altitude dense fog */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#02050e]/95 via-[#060e22]/60 to-transparent"
          style={{
            transform: `translate3d(${fogTranslateX}px, 0, 0)`,
          }}
        />

        {/* Ambient volumetric light cone matching incoming sector accent */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] rounded-full blur-[100px] opacity-25"
          style={{
            backgroundColor: activeZone.accentColor,
          }}
        />
      </div>

      {/* 2. CINEMATIC SPEED LINES & RAIN STREAKS */}
      <div
        className="absolute inset-0 w-full h-full will-change-[opacity]"
        style={{ opacity: speedLinesOpacity }}
      >
        <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`streak-grad-${activeZone.index}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor={activeZone.secondaryColor} stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <line x1="5%" y1="20%" x2="45%" y2="20%" stroke={`url(#streak-grad-${activeZone.index})`} strokeWidth="1.5" strokeDasharray="12 18" />
          <line x1="20%" y1="45%" x2="70%" y2="45%" stroke={`url(#streak-grad-${activeZone.index})`} strokeWidth="2" strokeDasharray="18 24" />
          <line x1="40%" y1="75%" x2="95%" y2="75%" stroke={`url(#streak-grad-${activeZone.index})`} strokeWidth="1.5" strokeDasharray="10 15" />
          <line x1="10%" y1="88%" x2="60%" y2="88%" stroke={`url(#streak-grad-${activeZone.index})`} strokeWidth="1" strokeDasharray="8 12" />
        </svg>
      </div>

      {/* 3. PARALLAX SECONDARY BACKGROUND ARCHITECTURE (Distant building passing by) */}
      <div
        className="absolute inset-y-0 w-[60vw] max-w-[700px] h-[120vh] -top-[10vh] opacity-60 pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(${secondaryTranslateX}vw, 0, 0)`,
          left: activeZone.direction === "rtl" ? "30vw" : "10vw",
        }}
      >
        <svg
          viewBox="0 0 500 1000"
          className="w-full h-full drop-shadow-[0_0_30px_rgba(0,0,0,0.9)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Slanted distant corporate spire */}
          <polygon points="120,0 380,80 440,1000 60,1000" fill="#040917" />
          {/* Distant window lattice */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="120"
              y1={150 + i * 65}
              x2="400"
              y2={150 + i * 65}
              stroke={activeZone.secondaryColor}
              strokeOpacity="0.12"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
          ))}
          {/* Vertical beacon line */}
          <line x1="260" y1="50" x2="260" y2="950" stroke={activeZone.accentColor} strokeOpacity="0.25" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 4. MAIN FOREGROUND MONOLITHIC SKYSCRAPER (The Physical Occlusion Wipe) */}
      {/* Width 140vw guarantees complete, seamless coverage of the viewport at t=0.5 */}
      <div
        className="absolute inset-y-0 w-[140vw] h-[120vh] -top-[10vh] pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(${translateX}vw, 0, 0)`,
          left: "-20vw",
        }}
      >
        <svg
          viewBox="0 0 1400 1200"
          preserveAspectRatio="none"
          className="w-full h-full drop-shadow-[0_0_60px_rgba(0,0,0,1)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dark futuristic metal facade gradient */}
            <linearGradient id={`skysc-facade-${activeZone.index}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#02040a" stopOpacity="0.98" />
              <stop offset="35%" stopColor="#050a19" />
              <stop offset="50%" stopColor="#081028" />
              <stop offset="70%" stopColor="#050917" />
              <stop offset="100%" stopColor="#010308" stopOpacity="0.98" />
            </linearGradient>

            {/* Glowing neon edge stripe */}
            <linearGradient id={`skysc-neon-${activeZone.index}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={activeZone.accentColor} stopOpacity="0.9" />
              <stop offset="50%" stopColor={activeZone.secondaryColor} stopOpacity="0.95" />
              <stop offset="100%" stopColor={activeZone.accentColor} stopOpacity="0.8" />
            </linearGradient>

            {/* Window Grid Pattern */}
            <pattern id={`window-grid-${activeZone.index}`} width="28" height="42" patternUnits="userSpaceOnUse">
              <rect x="4" y="6" width="8" height="14" fill="#38bdf8" fillOpacity="0.18" rx="1" />
              <rect x="16" y="6" width="8" height="14" fill="#ffffff" fillOpacity="0.12" rx="1" />
              <rect x="4" y="24" width="8" height="14" fill={activeZone.accentColor} fillOpacity="0.14" rx="1" />
              <rect x="16" y="24" width="8" height="14" fill="#38bdf8" fillOpacity="0.15" rx="1" />
            </pattern>
          </defs>

          {/* Primary Massive Skyscraper Core - Solid dark silhouette that acts as wipe */}
          <polygon
            points="
              150,0
              1250,0
              1380,1200
              20,1200
            "
            fill={`url(#skysc-facade-${activeZone.index})`}
          />

          {/* Cyberpunk Architectural Recessed Panel */}
          <polygon
            points="
              320,80
              1080,80
              1180,1140
              220,1140
            "
            fill="#030611"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="2"
          />

          {/* Window Clusters */}
          <rect
            x="360"
            y="120"
            width="680"
            height="960"
            fill={`url(#window-grid-${activeZone.index})`}
            opacity="0.85"
          />

          {/* Vertical Illuminated Laser Conduit (Left Edge) */}
          <line
            x1="320"
            y1="0"
            x2="220"
            y2="1200"
            stroke={`url(#skysc-neon-${activeZone.index})`}
            strokeWidth="6"
            className="drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]"
          />

          {/* Vertical Laser Conduit (Right Edge) */}
          <line
            x1="1080"
            y1="0"
            x2="1180"
            y2="1200"
            stroke={`url(#skysc-neon-${activeZone.index})`}
            strokeWidth="5"
            className="drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]"
          />

          {/* Center Spire Antenna Accent */}
          <line x1="700" y1="40" x2="700" y2="1160" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
          <circle cx="700" cy="180" r="4" fill={activeZone.accentColor} className="animate-ping" />
          <circle cx="700" cy="500" r="4" fill={activeZone.secondaryColor} />
          <circle cx="700" cy="850" r="4" fill={activeZone.accentColor} />

          {/* Structural Cross-Bracing Beams */}
          <line x1="320" y1="280" x2="1080" y2="480" stroke="rgba(255,255,255,0.04)" strokeWidth="2" />
          <line x1="1080" y1="280" x2="320" y2="480" stroke="rgba(255,255,255,0.04)" strokeWidth="2" />
          <line x1="280" y1="700" x2="1120" y2="900" stroke="rgba(255,255,255,0.04)" strokeWidth="2" />
          <line x1="1120" y1="700" x2="280" y2="900" stroke="rgba(255,255,255,0.04)" strokeWidth="2" />

          {/* Left Edge Bevel Shadow */}
          <polygon points="20,1200 150,0 220,0 120,1200" fill="#010206" opacity="0.9" />

          {/* Right Edge Bevel Shadow */}
          <polygon points="1250,0 1380,1200 1280,1200 1180,0" fill="#010206" opacity="0.9" />
        </svg>
      </div>

      {/* 5. CINEMATIC SECTOR TELEMETRY HUD OVERLAY (Flashes briefly during wipe) */}
      <div
        className="absolute top-28 sm:top-24 left-1/2 -translate-x-1/2 z-30 will-change-[transform,opacity]"
        style={{
          opacity: occlusionStrength > 0.4 ? Math.min(1, (occlusionStrength - 0.4) * 2.2) : 0,
          transform: `translate3d(-50%, ${(0.5 - smoothT) * 30}px, 0)`,
        }}
      >
        <div className="bg-[#040814]/90 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center space-x-3 shadow-[0_0_30px_rgba(0,0,0,0.8)] font-mono">
          <span
            className="w-2 h-2 rounded-full animate-ping"
            style={{ backgroundColor: activeZone.accentColor }}
          />
          <div className="flex flex-col text-left">
            <span className="text-[9px] tracking-widest text-slate-400 uppercase font-bold">
              TRANSIT CORRIDOR • CITY CAMERA VELOCITY
            </span>
            <span
              className="text-xs sm:text-sm font-black tracking-wider uppercase drop-shadow"
              style={{ color: activeZone.accentColor }}
            >
              {activeZone.sectorTag}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityTransitionOverlay;
