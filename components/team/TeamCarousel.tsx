"use client";

import React, { useState, useRef, useCallback } from "react";
import { teamData, TeamMember } from "@/data/team";
import TeamCard from "./TeamCard";

export const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Start with Satyam Kumar (Team Leader)
  const [direction, setDirection] = useState<number>(0);
  const total = teamData.length;

  const dragStartXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Touch & Mouse Pointer Swiping
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const diffX = e.clientX - dragStartXRef.current;
    if (diffX > 40) {
      handlePrev();
    } else if (diffX < -40) {
      handleNext();
    }
  };

  const currentMember = teamData[currentIndex];

  // Order team items so currentIndex is centered or in focus for desktop
  const ordered = teamData.map((member, idx) => ({
    member,
    idx,
    isCenter: idx === currentIndex,
  }));

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 selection:bg-none"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {/* ========================================================================= */}
      {/* MOBILE DISPLAY: ONE PROMINENT FULL CARD WITH SWIPE & NEON CONTROLS (< md) */}
      {/* ========================================================================= */}
      <div className="md:hidden flex flex-col items-center justify-center w-full px-2 py-2">
        <div className="relative w-full max-w-[310px] flex items-center justify-center">
          {/* MOBILE LEFT ARROW */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 xs:-left-5 z-30 w-9 h-9 rounded-full bg-[#050917]/95 border border-sky-400/60 text-sky-400 hover:text-white flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.4)] active:scale-95 transition-transform"
            aria-label="Previous Team Member"
          >
            <svg className="w-4 h-4 fill-none stroke-currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* SINGLE FULL-SIZED MOBILE CARD */}
          <div className="w-full flex justify-center">
            <div className="relative w-[270px] xs:w-[290px] h-[430px] rounded-2xl overflow-hidden bg-[#080e22]/95 border-2 border-red-500/70 shadow-[0_0_35px_rgba(239,68,68,0.4),0_0_25px_rgba(56,189,248,0.3)] flex flex-col justify-between p-3.5 transition-all">
              {/* Cyber Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500 z-20" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400 z-20" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400 z-20" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500 z-20" />

              {/* Photo Area */}
              <div className="relative w-full h-[62%] rounded-xl overflow-hidden bg-[#030612] border border-white/10">
                {currentMember.image ? (
                  <img
                    src={currentMember.image}
                    alt={currentMember.name}
                    className="w-full h-full object-cover object-top brightness-95 contrast-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#080e22] to-[#030612] p-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-slate-300">
                      <span className="font-mono text-xl font-bold">
                        {currentMember.name
                          .split(" ")
                          .filter(Boolean)
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </span>
                    </div>
                    <span className="mt-2 text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">ACM MEMBER</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080e22] via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#040814]/85 border border-white/20 text-[10px] font-mono text-cyan-400 font-bold">
                  0{currentIndex + 1} / 0{total}
                </div>
              </div>

              {/* Text & Socials Area */}
              <div className="relative z-10 pt-2 flex flex-col font-mono">
                <h3 className="text-base xs:text-lg font-black tracking-wider text-white uppercase drop-shadow-sm leading-tight">
                  {currentMember.name}
                </h3>
                <div className="text-xs font-bold text-red-500 tracking-[0.2em] uppercase mt-1 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]">
                  {currentMember.role}
                </div>
                <p className="text-xs text-slate-300 font-sans tracking-tight line-clamp-2 mt-1">
                  {currentMember.description}
                </p>

                {/* Socials */}
                <div className="flex items-center space-x-4 mt-2.5 pt-2 border-t border-white/15 text-slate-300">
                  {currentMember.socials?.linkedin && (
                    <a
                      href={currentMember.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sky-400 flex items-center space-x-1 text-xs"
                      title="LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
                      </svg>
                      <span className="text-[10px]">LinkedIn</span>
                    </a>
                  )}
                  {currentMember.socials?.instagram && (
                    <a
                      href={currentMember.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-400 flex items-center space-x-1 text-xs"
                      title="Instagram"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                      <span className="text-[10px]">Instagram</span>
                    </a>
                  )}
                  {currentMember.socials?.github && (
                    <a
                      href={currentMember.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white flex items-center space-x-1 text-xs"
                      title="GitHub"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                      </svg>
                      <span className="text-[10px]">GitHub</span>
                    </a>
                  )}
                  {currentMember.socials?.email && (
                    <a
                      href={`mailto:${currentMember.socials.email}`}
                      className="hover:text-red-400 flex items-center space-x-1 text-xs"
                      title={`Email: ${currentMember.socials.email}`}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span className="text-[10px]">Email</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE RIGHT ARROW */}
          <button
            onClick={handleNext}
            className="absolute -right-3 xs:-right-5 z-30 w-9 h-9 rounded-full bg-[#050917]/95 border border-red-500/60 text-red-500 hover:text-white flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)] active:scale-95 transition-transform"
            aria-label="Next Team Member"
          >
            <svg className="w-4 h-4 fill-none stroke-currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* MOBILE PAGINATION DOTS */}
        <div className="flex items-center space-x-2.5 mt-4 pt-1">
          {teamData.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-7 h-2 bg-gradient-to-r from-red-500 to-blue-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]"
                  : "w-2 h-2 bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Go to ${m.name}`}
            />
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP DISPLAY: MULTI-CARD HORIZONTAL ROW (>= md)                        */}
      {/* ========================================================================= */}
      <div className="hidden md:flex relative w-full items-center justify-center">
        {/* LEFT NAVIGATION ARROW BUTTON */}
        <button
          onClick={handlePrev}
          className="absolute left-1 sm:left-3 md:left-6 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#050917]/90 border border-sky-400/60 text-sky-400 hover:text-white hover:border-red-500 hover:bg-red-500/20 flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] focus:outline-none"
          aria-label="Previous Team Member"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* HORIZONTAL TEAM CARDS ROW */}
        <div className="w-full flex items-center justify-center space-x-3 md:space-x-4 lg:space-x-5 overflow-x-auto no-scrollbar py-6 px-12 md:px-16 scroll-smooth snap-x snap-mandatory">
          {ordered.map(({ member, idx, isCenter }) => (
            <TeamCard
              key={member.id}
              member={member}
              isCenter={isCenter}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>

        {/* RIGHT NAVIGATION ARROW BUTTON */}
        <button
          onClick={handleNext}
          className="absolute right-1 sm:right-3 md:right-6 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#050917]/90 border border-red-500/60 text-red-500 hover:text-white hover:border-sky-400 hover:bg-sky-500/20 flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] focus:outline-none"
          aria-label="Next Team Member"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
