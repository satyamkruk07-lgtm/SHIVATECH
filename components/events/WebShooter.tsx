"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WebShooterProps {
  isShooting: boolean;
  target: { x: number; y: number };
  onComplete: () => void;
}

export default function WebShooter({ isShooting, target, onComplete }: WebShooterProps) {
  const [windowSize, setWindowSize] = useState({ w: 1000, h: 800 });

  useEffect(() => {
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    const handleResize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isShooting) return null;

  // Start point is bottom center
  const startX = windowSize.w / 2;
  const startY = windowSize.h;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-[60]">
      {/* Main web line */}
      <motion.line
        x1={startX}
        y1={startY}
        x2={target.x}
        y2={target.y}
        stroke="rgba(255, 255, 255, 0.8)"
        strokeWidth="3"
        strokeDasharray="5 5"
        initial={{ pathLength: 0, opacity: 1 }}
        animate={{ pathLength: 1, opacity: [1, 1, 0] }}
        transition={{ 
          pathLength: { duration: 0.3, ease: "easeOut" },
          opacity: { duration: 0.6, times: [0, 0.8, 1], ease: "easeIn" }
        }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 300);
        }}
      />
      {/* Target impact flare */}
      <motion.circle
        cx={target.x}
        cy={target.y}
        r="2"
        fill="#fff"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 15, opacity: 0 }}
        transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
      />
    </svg>
  );
}
