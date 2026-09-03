"use client";

import React, { useEffect, useRef, useState } from "react";

interface SpiderCursorProps {
  isHeaderHovered: boolean;
  activeHoverRect: DOMRect | null;
}

export const SpiderCursor: React.FC<SpiderCursorProps> = ({
  isHeaderHovered,
  activeHoverRect,
}) => {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const spiderRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const [webEndPos, setWebEndPos] = useState<{ x: number; y: number } | null>(null);

  // Mount check & touch/reduced-motion detection
  useEffect(() => {
    setMounted(true);
    const isTouch =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window);

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setEnabled(!isTouch && !reducedMotion);
  }, []);

  // Track exact mouse position inside header
  useEffect(() => {
    if (!enabled || !mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled, mounted]);

  // Ultra-responsive tracking loop locking spider to exact mouse coordinates
  useEffect(() => {
    if (!enabled || !mounted) return;

    let animId: number;

    const loop = () => {
      // Responsive tracking factor ensuring zero displacement
      const lerp = 0.5;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerp;

      if (spiderRef.current) {
        spiderRef.current.style.transform = `translate3d(${currentPos.current.x - 14}px, ${currentPos.current.y - 14}px, 0)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [enabled, mounted]);

  // SVG Web strand end point calculation for hovered nav link
  useEffect(() => {
    if (activeHoverRect) {
      setWebEndPos({
        x: activeHoverRect.left + activeHoverRect.width / 2,
        y: activeHoverRect.top + activeHoverRect.height / 2,
      });
    } else {
      setWebEndPos(null);
    }
  }, [activeHoverRect]);

  const isVisible = mounted && enabled && isHeaderHovered;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-150 ${
        isVisible ? "opacity-100" : "opacity-0 invisible"
      }`}
    >
      {/* Thin SVG Web Strand Connecting Spider (Exact Mouse) to Hovered Link Center */}
      {webEndPos && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line
            x1={currentPos.current.x}
            y1={currentPos.current.y}
            x2={webEndPos.x}
            y2={webEndPos.y}
            stroke="url(#headerSpiderWebGradient)"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            className="opacity-90 animate-pulse"
          />
          <defs>
            <linearGradient
              id="headerSpiderWebGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {/* Spider Cursor Icon (28px) Positioned Exactly at Cursor Tip */}
      <div
        ref={spiderRef}
        className={`fixed top-0 left-0 w-7 h-7 pointer-events-none z-[9999] transition-transform duration-150 ${
          activeHoverRect
            ? "scale-125 drop-shadow-[0_0_18px_rgba(239,68,68,0.95)]"
            : "drop-shadow-[0_0_12px_rgba(239,68,68,0.75)]"
        }`}
        style={{ willChange: "transform" }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Spider Body */}
          <ellipse
            cx="14"
            cy="16"
            rx="4"
            ry="5.5"
            fill="#050a16"
            stroke="#ef4444"
            strokeWidth="1.2"
          />
          <circle
            cx="14"
            cy="8.5"
            r="3"
            fill="#050a16"
            stroke="#3b82f6"
            strokeWidth="1.2"
          />
          {/* Pulsing Crimson Energy Core */}
          <circle
            cx="14"
            cy="16"
            r="1.5"
            fill="#ef4444"
            className="animate-ping opacity-90"
          />
          {/* Cyber Eyes */}
          <circle cx="12.8" cy="7.8" r="0.6" fill="#3b82f6" />
          <circle cx="15.2" cy="7.8" r="0.6" fill="#3b82f6" />

          {/* Legs */}
          <path
            d="M11 13.5 C 7.5 11, 4.5 7.5, 2 8.5"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M17 13.5 C 20.5 11, 23.5 7.5, 26 8.5"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M11 16 C 6.5 16, 3.5 14.5, 1 17.5"
            stroke="#ef4444"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M17 16 C 21.5 16, 24.5 14.5, 27 17.5"
            stroke="#ef4444"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M11 18.5 C 7.5 21, 5 23.5, 3.5 26"
            stroke="#3b82f6"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M17 18.5 C 20.5 21, 23 23.5, 24.5 26"
            stroke="#3b82f6"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SpiderCursor;
