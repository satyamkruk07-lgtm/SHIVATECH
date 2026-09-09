"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryItem } from "@/data/gallery";

interface GalleryCardProps {
  item: GalleryItem;
  position: "far-left" | "left" | "center" | "right" | "far-right";
  isCenter: boolean;
  onClick: () => void;
  onOpenPhotoModal: (item: GalleryItem) => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
  item,
  position,
  isCenter,
  onClick,
  onOpenPhotoModal,
}) => {
  // Slot positioning & visual hierarchy styles
  const getSlotStyles = () => {
    switch (position) {
      case "far-left":
        return {
          x: "-170%",
          scale: 0.66,
          opacity: 0.35,
          zIndex: 5,
          filter: "brightness(0.5) contrast(0.9)",
        };
      case "left":
        return {
          x: "-92%",
          scale: 0.83,
          opacity: 0.65,
          zIndex: 15,
          filter: "brightness(0.7) contrast(0.95)",
        };
      case "center":
        return {
          x: "0%",
          scale: 1.08,
          opacity: 1.0,
          zIndex: 30,
          filter: "brightness(1) contrast(1)",
        };
      case "right":
        return {
          x: "92%",
          scale: 0.83,
          opacity: 0.65,
          zIndex: 15,
          filter: "brightness(0.7) contrast(0.95)",
        };
      case "far-right":
        return {
          x: "170%",
          scale: 0.66,
          opacity: 0.35,
          zIndex: 5,
          filter: "brightness(0.5) contrast(0.9)",
        };
    }
  };

  const slotStyle = getSlotStyles();

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCenter) {
      onOpenPhotoModal(item);
    } else {
      onClick();
    }
  };

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[210px] h-[300px] xs:w-[240px] xs:h-[340px] sm:w-[280px] sm:h-[390px] md:w-[320px] md:h-[440px] cursor-pointer pointer-events-auto select-none"
      animate={{
        x: slotStyle.x,
        scale: slotStyle.scale,
        opacity: slotStyle.opacity,
        zIndex: slotStyle.zIndex,
        filter: slotStyle.filter,
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleCardClick}
    >
      <div
        className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-300 group ${
          isCenter
            ? "border-2 border-red-500/80 shadow-[0_0_40px_rgba(239,68,68,0.45),0_0_20px_rgba(56,189,248,0.35)] bg-[#040814]"
            : "border border-white/15 hover:border-red-500/50 hover:opacity-85 shadow-[0_0_25px_rgba(0,0,0,0.8)] bg-[#040814]"
        }`}
      >
        {/* 1. ACTUAL PHOTOGRAPH (Always visible on all cards) */}
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 80vw, 400px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={isCenter}
        />

        {/* 2. ATMOSPHERIC GRADIENTS */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#02050e] via-black/25 to-transparent transition-opacity duration-300 ${
            isCenter ? "opacity-85" : "opacity-90"
          }`}
        />

        {/* 3. TOP SCI-FI NEON BORDER (Only prominent on center card) */}
        {isCenter && (
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-red-500 via-white to-sky-400 z-20" />
        )}

        {/* 4. TOP-LEFT CATEGORY BADGE */}
        <div className="absolute top-3 left-3 z-20 font-mono">
          <span
            className={`px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md transition-all ${
              isCenter
                ? "bg-[#040814]/85 border border-sky-400/50 text-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.3)]"
                : "bg-black/60 border border-white/20 text-slate-300"
            }`}
          >
            {item.category}
          </span>
        </div>

        {/* 5. BOTTOM METADATA OVERLAY */}
        {isCenter ? (
          // Center Card Full Details
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-[#040814] via-[#040814]/90 to-transparent font-mono text-white z-20">
            <div className="text-[9px] sm:text-[10px] text-red-500 font-bold tracking-[0.25em] uppercase mb-1">
              {item.event} • SHIVATECH 2026
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-black tracking-wider uppercase drop-shadow-md leading-tight mb-1">
              {item.title}
            </h3>
            <p className="text-[10px] sm:text-[11px] text-slate-300 font-sans line-clamp-2 leading-relaxed mb-2">
              {item.description}
            </p>
            <div className="inline-flex items-center space-x-1.5 text-[10px] text-sky-400 font-bold tracking-wider group-hover:text-white transition-colors">
              <span>CLICK TO ENLARGE</span>
              <span>🔍</span>
            </div>
          </div>
        ) : (
          // Side Card Compact Preview Title
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent font-mono text-white z-20">
            <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase line-clamp-1 text-slate-200">
              {item.title}
            </h4>
            <span className="text-[9px] text-red-400 tracking-wider uppercase opacity-80">
              TAP TO FOCUS
            </span>
          </div>
        )}

        {/* Tech Corner Accents for Center Card */}
        {isCenter && (
          <>
            <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-red-500 pointer-events-none" />
            <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-sky-400 pointer-events-none" />
            <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-sky-400 pointer-events-none" />
            <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-red-500 pointer-events-none" />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default GalleryCard;
