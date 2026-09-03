"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center opacity-70">
      <span className="text-[10px] font-orbitron tracking-[0.3em] text-white/50 mb-2 uppercase">
        Scroll
      </span>
      <div className="w-[1px] h-16 bg-white/10 overflow-hidden relative">
        <motion.div
          className="w-full h-1/2 bg-gradient-to-b from-transparent via-white/80 to-transparent"
          animate={{ y: ["-100%", "200%"] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
