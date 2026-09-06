"use client";

import React from "react";

interface GalleryWebProps {
  activeCenterId: string;
}

export const GalleryWeb: React.FC<GalleryWebProps> = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 filter drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
      viewBox="0 0 1200 800"
      fill="none"
    >
      <defs>
        <radialGradient id="webCenterPulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#02050e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Web Glow */}
      <ellipse cx="600" cy="400" rx="350" ry="250" fill="url(#webCenterPulse)" />

      {/* Main Radial Web Strands */}
      <line x1="600" y1="400" x2="100" y2="100" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="600" y1="400" x2="1100" y2="100" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="600" y1="400" x2="100" y2="700" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="600" y1="400" x2="1100" y2="700" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="600" y1="400" x2="600" y2="50" stroke="#38bdf8" strokeWidth="1.2" />
      <line x1="600" y1="400" x2="600" y2="750" stroke="#38bdf8" strokeWidth="1.2" />

      {/* Concentric Web Arcs */}
      <ellipse cx="600" cy="400" rx="150" ry="100" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" fill="none" />
      <ellipse cx="600" cy="400" rx="280" ry="180" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="8 6" fill="none" />
      <ellipse cx="600" cy="400" rx="450" ry="280" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" fill="none" />
    </svg>
  );
};

export default GalleryWeb;
