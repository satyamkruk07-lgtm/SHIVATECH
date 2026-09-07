"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { animate } from "framer-motion";

const statsData = [
  { id: 1, value: 5, label: "DAYS", prefix: "0", suffix: "" },
  { id: 2, value: 20, label: "EVENTS", prefix: "", suffix: "+" },
  { id: 3, value: 1000, label: "PARTICIPANTS", prefix: "", suffix: "+" },
  { id: 4, customText: "Upto 1.5 Lakh", label: "PRIZES" },
];

function Counter({
  to,
  prefix = "",
  suffix = "",
  customText,
  play,
}: {
  to?: number;
  prefix?: string;
  suffix?: string;
  customText?: string;
  play: boolean;
}) {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (to === undefined) return;
    if (play) {
      if (prefersReducedMotion) {
        setCount(to);
        return;
      }
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => {
          setCount(Math.round(val));
        },
      });
      return controls.stop;
    }
  }, [play, to, prefersReducedMotion]);

  if (customText) {
    return (
      <span className="text-xl min-[400px]:text-2xl sm:text-3xl md:text-3xl lg:text-4xl tracking-tight leading-tight block whitespace-normal">
        {customText}
      </span>
    );
  }

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsRow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 pt-16 border-t border-white/10"
    >
      {statsData.map((stat) => (
        <motion.div key={stat.id} variants={itemVariants} className="flex flex-col items-start md:items-center text-left md:text-center min-w-0">
          <div className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-2 max-w-full">
            <Counter
              to={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              customText={stat.customText}
              play={isInView}
            />
          </div>
          <div className="font-sans text-xs sm:text-sm md:text-base tracking-[0.2em] text-white/50 uppercase">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
