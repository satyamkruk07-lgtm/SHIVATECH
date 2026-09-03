"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; z: number; speed: number; size: number }[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = window.innerWidth < 768 ? 50 : 150;
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * 1000,
          speed: Math.random() * 2 + 1,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      // Create a trailing effect by filling with semi-transparent black
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;

      particles.forEach((p) => {
        // Move particle closer to camera
        p.z -= p.speed * 2;

        // If particle passes camera, reset it far away
        if (p.z <= 0) {
          p.z = 1000;
          p.x = Math.random() * width - centerX;
          p.y = Math.random() * height - centerY;
        }

        // Project 3D coordinates to 2D screen
        const perspective = 800 / p.z;
        const screenX = centerX + p.x * perspective;
        const screenY = centerY + p.y * perspective;
        
        // Calculate size based on depth
        const radius = Math.max(0.1, p.size * perspective);

        // Calculate opacity based on depth (fade in from distance)
        const alpha = Math.min(1, (1000 - p.z) / 500);

        // Draw particle
        ctx.beginPath();
        ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
        
        // Subtle red/blue coloring based on position
        if (p.x < 0) {
          ctx.fillStyle = `rgba(220, 38, 38, ${alpha})`; // Red left
        } else {
          ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`; // Blue right
        }
        
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="layer-particles absolute inset-0 z-[5] pointer-events-none mix-blend-screen opacity-80"
    />
  );
}
