"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface RegisterButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const RegisterButton: React.FC<RegisterButtonProps> = ({
  href = "/register",
  onClick,
  className = "",
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center px-7 py-3 text-sm font-mono font-black tracking-[0.24em] text-white uppercase rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${className}`}
    >
      {/* Background & Border Structure */}
      <div className="absolute inset-0 bg-[#040814]/90 backdrop-blur-xl border-2 border-red-500/50 group-hover:border-red-400 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.35),inset_0_0_12px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_35px_rgba(239,68,68,0.6),inset_0_0_20px_rgba(59,130,246,0.35)]" />

      {/* Light ray traveling around border on hover */}
      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
      </div>

      {/* Button Text */}
      <motion.span
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
        className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] group-hover:text-red-300 transition-colors"
      >
        REGISTER
      </motion.span>
    </Link>
  );
};

export default RegisterButton;
