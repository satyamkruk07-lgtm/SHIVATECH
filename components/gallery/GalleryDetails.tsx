"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryItem } from "@/data/gallery";

interface GalleryDetailsProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const GalleryDetails: React.FC<GalleryDetailsProps> = ({
  item,
  onClose,
  onPrev,
  onNext,
}) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto">
        {/* Backdrop Blur Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/85 backdrop-blur-2xl cursor-pointer"
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#040814] border border-white/20 rounded-3xl shadow-[0_0_90px_rgba(239,68,68,0.3)] overflow-hidden text-white z-10 flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Top Sci-Fi Border Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-white to-sky-400 z-20" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white/70 hover:text-white hover:bg-red-600/50 flex items-center justify-center transition-colors text-lg"
            aria-label="Close photo details"
          >
            ✕
          </button>

          {/* Left Column: Full Enlarged Photograph */}
          <div className="relative w-full md:w-3/5 h-[300px] sm:h-[380px] md:h-[500px] bg-black">
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Right Column: Detailed Memory Information */}
          <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between font-mono bg-[#050b18]/90">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold text-red-500 tracking-[0.25em] uppercase">
                  {item.category}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white mb-2 leading-tight drop-shadow-md">
                {item.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="border-t border-white/10 my-4" />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between space-x-3 pt-2">
              <button
                onClick={onPrev}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold tracking-wider uppercase transition-colors text-center"
              >
                ← PREVIOUS
              </button>
              <button
                onClick={onNext}
                className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all text-center"
              >
                NEXT →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GalleryDetails;
