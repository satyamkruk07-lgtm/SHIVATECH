"use client";

import React, { useEffect, useState } from "react";

interface EventsLoaderProps {
  isLoading: boolean;
}

export const EventsLoader: React.FC<EventsLoaderProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(12);
  const [shouldRender, setShouldRender] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      setIsFading(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 700); // 700ms fade out transition
      return () => clearTimeout(timer);
    }

    // Simulate progress increments until initial frames load
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 92) return prev;
        const inc = Math.floor(Math.random() * 15) + 5;
        return Math.min(92, prev + inc);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#02040a] transition-opacity duration-700 pointer-events-none ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Sci-fi background grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#02040a] to-[#02040a] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Main branding & loader info */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">
        {/* Glow pill badge */}
        <div className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.25)]">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 font-semibold">
            SYSTEM INITIALIZING
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 font-mono">
            SHIVATECH
          </h1>
          <p className="text-sm sm:text-base font-mono tracking-[0.25em] text-cyan-400/80 uppercase">
            ENTERING THE WEB...
          </p>
        </div>

        {/* Progress bar container */}
        <div className="w-64 sm:w-80 space-y-3">
          <div className="h-1.5 w-full bg-cyan-950/60 rounded-full overflow-hidden border border-cyan-500/20 p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-300 rounded-full transition-all duration-200 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-xs font-mono tracking-widest text-cyan-400/90">
            <span>LOADING CITY</span>
            <span className="font-bold text-cyan-300">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsLoader;
