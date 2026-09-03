"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
  name: string;
  href: string;
  isActive: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  name,
  href,
  isActive,
  onHoverStart,
  onHoverEnd,
  onClick,
}) => {
  return (
    <Link
      href={href}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onClick}
      className={`group relative text-sm lg:text-base font-mono font-bold tracking-[0.22em] uppercase py-2 px-2.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md ${
        isActive
          ? "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          : "text-white/80 hover:text-white hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
      }`}
    >
      <motion.span className="inline-block transition-transform duration-200 group-hover:-translate-y-[1px]">
        {name}
      </motion.span>

      {/* Active State Indicator (Glowing red line + web connection + electric blue accent) */}
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        >
          {/* Web Connection Detail */}
          <div className="w-[1.5px] h-2 bg-cyan-400 opacity-90" />
          {/* Glowing Red Line */}
          <div className="w-full min-w-[34px] h-[3px] rounded-full bg-gradient-to-r from-red-500 via-white to-blue-500 shadow-[0_0_12px_#ef4444,0_0_8px_#3b82f6]" />
        </motion.div>
      )}

      {/* Hover Underline (Thin web-like underline) */}
      {!isActive && (
        <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500/90 to-blue-500/90 transition-all duration-300 group-hover:w-full opacity-90 shadow-[0_0_8px_#ef4444]" />
      )}
    </Link>
  );
};

export default NavLink;
