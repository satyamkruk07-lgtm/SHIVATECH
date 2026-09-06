"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ScheduleItem } from "@/data/schedule";
import ScheduleNode from "./ScheduleNode";

interface ScheduleRingProps {
  items: ScheduleItem[];
  selectedIndex: number;
  onSelectNode: (index: number) => void;
}

// Pre-calculated static ticks outside component to guarantee 100% identical SSR & client hydration output
const RADIAL_TICKS = Array.from({ length: 36 }).map((_, i) => {
  const tickAngle = (i * 10 * Math.PI) / 180;
  return {
    i,
    x1: Number((350 + 310 * Math.cos(tickAngle)).toFixed(2)),
    y1: Number((350 + 310 * Math.sin(tickAngle)).toFixed(2)),
    x2: Number((350 + 318 * Math.cos(tickAngle)).toFixed(2)),
    y2: Number((350 + 318 * Math.sin(tickAngle)).toFixed(2)),
    isAccent: i % 9 === 0,
  };
});

export default function ScheduleRing({
  items,
  selectedIndex,
  onSelectNode,
}: ScheduleRingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentRotation, setCurrentRotation] = useState<number>(0);
  const targetRotationRef = useRef<number>(0);
  const currentRotationRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);

  const isDraggingRef = useRef<boolean>(false);
  const dragStartAngleRef = useRef<number>(0);
  const dragStartRotationRef = useRef<number>(0);
  const lastPointerAngleRef = useRef<number>(0);
  const lastPointerTimeRef = useRef<number>(0);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Dynamic radial radius scaled for optimal clearance below header
  const [radius, setRadius] = useState<number>(230);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(160);
      } else if (window.innerWidth < 1024) {
        setRadius(200);
      } else {
        setRadius(240);
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // Compute angle step
  const totalNodes = items.length;
  const angleStep = totalNodes > 0 ? 360 / totalNodes : 0;

  // Align selected node to ~ -45 degrees (top-rightreadable position)
  const rotateToNode = useCallback(
    (index: number) => {
      const targetNodeAngle = index * angleStep;
      const desiredAngle = -45;
      let newTarget = desiredAngle - targetNodeAngle;

      const diff = ((newTarget - currentRotationRef.current + 180) % 360) - 180;
      targetRotationRef.current = currentRotationRef.current + diff;
    },
    [angleStep]
  );

  useEffect(() => {
    rotateToNode(selectedIndex);
  }, [selectedIndex, rotateToNode]);

  // Smooth Physics & Damping Loop
  useEffect(() => {
    let animationFrameId: number;

    const updatePhysics = () => {
      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.05) {
          targetRotationRef.current += velocityRef.current;
          velocityRef.current *= 0.92;
        } else {
          velocityRef.current = 0;
        }

        const lerpFactor = 0.12;
        currentRotationRef.current +=
          (targetRotationRef.current - currentRotationRef.current) * lerpFactor;
      }

      setCurrentRotation(currentRotationRef.current);
      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Pointer angle calculation
  const getPointerAngle = (clientX: number, clientY: number): number => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    return Math.atan2(dy, dx) * (180 / Math.PI);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);

    const angle = getPointerAngle(e.clientX, e.clientY);
    dragStartAngleRef.current = angle;
    dragStartRotationRef.current = currentRotationRef.current;
    lastPointerAngleRef.current = angle;
    lastPointerTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const angle = getPointerAngle(e.clientX, e.clientY);
    const deltaAngle = angle - dragStartAngleRef.current;

    targetRotationRef.current = dragStartRotationRef.current + deltaAngle;
    currentRotationRef.current = targetRotationRef.current;

    const now = performance.now();
    const dt = now - lastPointerTimeRef.current;
    if (dt > 0) {
      const dAngle = angle - lastPointerAngleRef.current;
      velocityRef.current = (dAngle / dt) * 16;
    }

    lastPointerAngleRef.current = angle;
    lastPointerTimeRef.current = now;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);

    const normRot = ((-currentRotationRef.current % 360) + 360) % 360;
    const closestIndex = Math.round(normRot / angleStep) % totalNodes;
    if (closestIndex >= 0 && closestIndex < totalNodes) {
      onSelectNode(closestIndex);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    const delta = e.deltaY > 0 ? 1 : -1;
    const nextIndex = (selectedIndex + delta + totalNodes) % totalNodes;
    onSelectNode(nextIndex);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] lg:w-[660px] lg:h-[660px] flex items-center justify-center select-none touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
    >
      {/* REALISTIC PROJECTED LIGHT SVG HOLOGRAPHIC RINGS (STATIONARY) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none filter drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]"
        viewBox="0 0 700 700"
        fill="none"
      >
        <defs>
          <radialGradient id="holoGlowRadial" cx="50%" cy="50%" r="50%">
            <stop offset="40%" stopColor="#040814" stopOpacity="0" />
            <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Soft Radial Holographic Light Glow */}
        <circle cx="350" cy="350" r="330" fill="url(#holoGlowRadial)" />

        {/* Outer Translucent Fine Luminous Ring */}
        <circle
          cx="350"
          cy="350"
          r="320"
          stroke="#38bdf8"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Segmented Crimson Light Arcs */}
        <circle
          cx="350"
          cy="350"
          r="305"
          stroke="#ef4444"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          strokeDasharray="140 210"
        />

        {/* Inner Cyan Guide Circle */}
        <circle
          cx="350"
          cy="350"
          r="230"
          stroke="#38bdf8"
          strokeOpacity="0.4"
          strokeWidth="1"
        />

        {/* Crosshair Accent Markers */}
        <line x1="350" y1="20" x2="350" y2="70" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="350" y1="630" x2="350" y2="680" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="20" y1="350" x2="70" y2="350" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="630" y1="350" x2="680" y2="350" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="1" />

        {/* Fine Radial Ticks around Ring */}
        {RADIAL_TICKS.map((t) => (
          <line
            key={t.i}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke={t.isAccent ? "#ef4444" : "#38bdf8"}
            strokeOpacity={t.isAccent ? 0.7 : 0.25}
            strokeWidth={t.isAccent ? 1.5 : 1}
          />
        ))}
      </svg>

      {/* ROTATING SCHEDULE RING CONTAINER */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {items.map((item, idx) => {
          const nodeAngleDeg = idx * angleStep + currentRotation;
          const rad = (nodeAngleDeg * Math.PI) / 180;

          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <ScheduleNode
              key={item.id}
              item={item}
              index={idx}
              totalNodes={totalNodes}
              x={x}
              y={y}
              angleDeg={nodeAngleDeg}
              isSelected={idx === selectedIndex}
              isHovered={idx === hoveredIndex}
              onClick={() => onSelectNode(idx)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          );
        })}
      </div>

      {/* STATIONARY CENTRAL HUB */}
      <div className="relative z-20 w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-[#040814]/85 border border-sky-400/40 backdrop-blur-2xl flex flex-col items-center justify-center p-4 text-center shadow-[0_0_40px_rgba(56,189,248,0.3),inset_0_0_25px_rgba(239,68,68,0.15)] pointer-events-none select-none">
        {/* Inner Glowing Ring */}
        <div className="absolute inset-1.5 rounded-full border border-red-500/25 animate-pulse" />

        {/* Central Spider Symbol */}
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-1.5 flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="text-red-500 filter drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]"
          >
            <ellipse cx="12" cy="13.5" rx="3" ry="4" fill="#040814" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="7" r="2.2" fill="#040814" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="12" cy="13.5" r="1.2" fill="#ef4444" className="animate-pulse" />
            <path d="M9 11 C 6 9, 4 6, 2 7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M15 11 C 18 9, 20 6, 22 7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 13 C 5 13, 3 12, 1 14" stroke="#ef4444" strokeWidth="1.5" />
            <path d="M15 13 C 19 13, 21 12, 23 14" stroke="#ef4444" strokeWidth="1.5" />
            <path d="M9 15 C 6 17, 4 19, 3 21" stroke="#38bdf8" strokeWidth="1.5" />
            <path d="M15 15 C 18 17, 20 19, 21 21" stroke="#38bdf8" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-base sm:text-lg lg:text-xl font-black tracking-widest text-white uppercase font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] leading-none">
          SHIVATECH
        </h2>
        <div className="text-xs sm:text-sm font-bold text-red-500 tracking-widest font-mono mb-1">
          2026
        </div>

        {/* Subtitle */}
        <div className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-sky-400 uppercase mb-2">
          EVENT TIMELINE
        </div>

        {/* Interaction Hint */}
        <div className="flex items-center space-x-1.5 text-[9px] sm:text-[10px] text-slate-300 font-mono tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/10">
          <span>←</span>
          <span className="uppercase text-[9px] font-bold text-slate-200">DRAG TO EXPLORE</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}
