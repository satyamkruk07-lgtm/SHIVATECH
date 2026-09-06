"use client";

import React, { useState, useRef, useCallback } from "react";
import { teamData, TeamMember } from "@/data/team";
import TeamCard from "./TeamCard";

export const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(2); // Start with Rishabh Verma (Center) or Satyam Kumar
  const total = teamData.length;

  const dragStartXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
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

  // Order team items so currentIndex is centered or in focus
  const getOrderedMembers = () => {
    return teamData.map((member, idx) => {
      return {
        member,
        idx,
        isCenter: idx === currentIndex,
      };
    });
  };

  const ordered = getOrderedMembers();

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-center selection:bg-none"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
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
      <div className="w-full flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 overflow-x-auto no-scrollbar py-6 px-12 sm:px-16">
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
  );
};

export default TeamCarousel;
