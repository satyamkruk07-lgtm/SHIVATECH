"use client";

import React from "react";

interface NavbarWebAccentProps {
  activeHoverIndex: number | null;
}

export const NavbarWebAccent: React.FC<NavbarWebAccentProps> = ({ activeHoverIndex }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top subtle sci-fi border line with gradient pulse */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {/* Integrated web strand accents in left and right corners */}
      <svg
        className="absolute top-0 left-0 w-24 h-12 text-red-500/15"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L50 25 L100 0" stroke="currentColor" strokeWidth="0.75" />
        <path d="M0 0 L30 40 L60 0" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <path d="M20 10 Q 35 25 50 10" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      </svg>

      <svg
        className="absolute top-0 right-0 w-24 h-12 text-blue-500/15"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 0 L50 25 L0 0" stroke="currentColor" strokeWidth="0.75" />
        <path d="M100 0 L70 40 L40 0" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <path d="M80 10 Q 65 25 50 10" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      </svg>

      {/* Dynamic bottom web border glow on hover */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-blue-500/40 transition-opacity duration-500 ${
          activeHoverIndex !== null ? "opacity-100" : "opacity-30"
        }`}
      />
    </div>
  );
};

export default NavbarWebAccent;
