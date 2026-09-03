"use client";

import { motion } from "framer-motion";

export default function WebOverlay() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 md:opacity-30 mix-blend-screen">
      <motion.svg
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1, rotate: [0, 2, -2, 0] }}
        transition={{
          opacity: { duration: 2, ease: "easeOut" },
          scale: { duration: 2, ease: "easeOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
        viewBox="0 0 100 100"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] md:w-[120vw] md:h-[120vh]"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.1"
      >
        {/* Subtle geometric web lines */}
        {[...Array(12)].map((_, i) => (
          <line
            key={`line-${i}`}
            x1="50"
            y1="50"
            x2={(50 + 50 * Math.cos((i * Math.PI) / 6)).toFixed(3)}
            y2={(50 + 50 * Math.sin((i * Math.PI) / 6)).toFixed(3)}
          />
        ))}
        {/* Concentric octagons simulating a modern web */}
        {[10, 20, 30, 40, 50].map((r, i) => (
          <polygon
            key={`poly-${i}`}
            points={Array.from({ length: 8 })
              .map((_, j) => {
                const angle = (j * Math.PI) / 4;
                return `${(50 + r * Math.cos(angle)).toFixed(3)},${(50 + r * Math.sin(angle)).toFixed(3)}`;
              })
              .join(" ")}
          />
        ))}
      </motion.svg>
    </div>
  );
}
