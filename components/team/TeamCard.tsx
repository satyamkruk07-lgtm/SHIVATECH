"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
  isCenter?: boolean;
  onClick?: () => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  member,
  isCenter = false,
  onClick,
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -8, scale: isCenter ? 1.07 : 1.03 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-[210px] h-[330px] sm:w-[225px] sm:h-[360px] md:w-[240px] md:h-[385px] rounded-2xl overflow-hidden cursor-pointer select-none transition-all duration-300 flex flex-col justify-between p-2.5 ${
        isCenter
          ? "bg-[#080e22]/90 border-t-2 border-l-2 border-red-500 border-b-2 border-r-2 border-sky-400 shadow-[0_0_35px_rgba(239,68,68,0.5),0_0_25px_rgba(56,189,248,0.4)] z-20 scale-105"
          : "bg-[#050917]/75 border-t border-l border-red-500/50 border-b border-r border-sky-400/50 shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:border-red-500/80 hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]"
      }`}
    >
      {/* 1. Cyber Corner Tech Cut Notches */}
      <div
        className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${
          isCenter ? "border-red-500" : "border-red-500/70"
        } z-20`}
      />
      <div
        className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${
          isCenter ? "border-sky-400" : "border-sky-400/70"
        } z-20`}
      />
      <div
        className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${
          isCenter ? "border-sky-400" : "border-sky-400/70"
        } z-20`}
      />
      <div
        className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${
          isCenter ? "border-red-500" : "border-red-500/70"
        } z-20`}
      />

      {/* 2. Top Portion: Team Member Natural Portrait Photo */}
      <div className="relative w-full h-[58%] rounded-xl overflow-hidden bg-[#030612] border border-white/10 group">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          priority
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105 brightness-95 contrast-105"
        />

        {/* Subtle Gradient Fade at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080e22] via-transparent to-transparent opacity-80" />
      </div>

      {/* 3. Bottom Portion: Name, Designation & Role Description */}
      <div className="relative z-10 px-1 py-1 flex flex-col justify-end font-mono">
        {/* Name */}
        <h3 className="text-xs sm:text-sm md:text-base font-black tracking-wider text-white uppercase drop-shadow-sm leading-tight">
          {member.name}
        </h3>

        {/* Designation */}
        <div className="text-[10px] sm:text-[11px] font-bold text-red-500 tracking-[0.2em] uppercase mt-0.5 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]">
          {member.role}
        </div>

        {/* Short Role Description */}
        <p className="text-[9px] sm:text-[10px] text-slate-300/90 font-sans tracking-tight line-clamp-1 mt-1">
          {member.description}
        </p>

        {/* Social Icons Row */}
        <div className="flex items-center space-x-3 mt-2.5 pt-1.5 border-t border-white/10 text-slate-400">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
              title="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
              </svg>
            </a>
          )}
          {member.socials.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
              title="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          )}
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="GitHub"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
            </a>
          )}
          {member.socials.email && (
            <a
              href={member.socials.email}
              className="hover:text-red-400 transition-colors"
              title="Email"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
