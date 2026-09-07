"use client";

import React from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/gallery";

interface PhotoFaceProps {
  item: GalleryItem;
  onClick?: () => void;
}

export const PhotoFace: React.FC<PhotoFaceProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-full h-full bg-[#040814] rounded-2xl overflow-hidden border border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.35),0_0_20px_rgba(56,189,248,0.3)] group cursor-pointer select-none"
    >
      {/* High Quality Photograph */}
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={item.id === "gal-01"}
      />

      {/* Atmospheric Vignette & Sci-Fi Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-black/20 to-transparent opacity-90" />

      {/* Glassmorphic Top Category Badge */}
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#040814]/80 border border-white/20 backdrop-blur-md font-mono">
        <span className="text-[10px] font-extrabold tracking-widest text-sky-400 uppercase">
          {item.category}
        </span>
      </div>

      {/* Bottom Metadata Banner */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-[#040814] via-[#040814]/90 to-transparent font-mono text-white">
        <div className="text-[10px] text-red-500 font-bold tracking-[0.25em] uppercase mb-1">
          {item.event} • SHIVATECH 2026
        </div>
        <h3 className="text-base sm:text-lg font-black tracking-wider uppercase drop-shadow-md leading-tight mb-1">
          {item.title}
        </h3>
        <p className="text-[11px] text-slate-300 font-sans line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* View HD Hint */}
        <div className="mt-2.5 inline-flex items-center space-x-1.5 text-[10px] text-sky-400 font-bold tracking-wider group-hover:text-white transition-colors">
          <span>CLICK TO ENLARGE</span>
          <span>🔍</span>
        </div>
      </div>

      {/* Cyber Corner Highlights */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-white to-sky-400" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-sky-400" />
    </div>
  );
};

export default PhotoFace;
