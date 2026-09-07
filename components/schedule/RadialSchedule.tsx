"use client";

import React, { useState, useEffect, useCallback } from "react";
import { scheduleData, ScheduleItem } from "@/data/schedule";
import ScheduleRing from "./ScheduleRing";
import ScheduleHUD from "./ScheduleHUD";
import ScheduleDetails from "./ScheduleDetails";
import HolographicHand from "./HolographicHand";
import ScheduleCountdown from "./ScheduleCountdown";

export default function RadialSchedule() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [selectedIndex, setSelectedIndex] = useState<number>(2); // Hacknation 2.0 default

  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const currentDaySchedule = scheduleData.find((d) => d.dayNumber === activeDay) || scheduleData[0];
  const items: ScheduleItem[] = currentDaySchedule.items;

  const handleSelectDay = (day: number) => {
    setActiveDay(day);
    const dayItems = scheduleData.find((d) => d.dayNumber === day)?.items || [];
    const featuredIdx = dayItems.findIndex((it) => it.featured);
    setSelectedIndex(featuredIdx !== -1 ? featuredIdx : 0);
  };

  const handleSelectNode = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setSelectedIndex((prev) => (prev + 1) % items.length);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
      } else if (["1", "2", "3", "4", "5"].includes(e.key)) {
        handleSelectDay(Number(e.key));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const selectedItem = items[selectedIndex] || items[0];

  return (
    <div
      className="relative w-full h-full min-h-screen flex flex-col items-center justify-between overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 1. PHOTOREALISTIC SUPERHERO HAND LAYER (BEHIND UI) */}
      <HolographicHand mouseX={mouseOffset.x} mouseY={mouseOffset.y} />

      {/* 2. TOP CENTER PAGE TITLE & DAY SELECTOR */}
      <ScheduleHUD activeDay={activeDay} onSelectDay={handleSelectDay} />

      {/* 3. CENTRAL RADIAL INTERACTIVE HOLOGRAM */}
      <div className="relative z-10 my-auto py-4 sm:py-6">
        <ScheduleRing
          items={items}
          selectedIndex={selectedIndex}
          onSelectNode={handleSelectNode}
        />
      </div>

      {/* 4. BOTTOM-LEFT "STAY ON TRACK" LIVE COUNTDOWN TIMER PANEL */}
      <ScheduleCountdown />

      {/* 5. FLOATING EVENT DETAILS GLASS PANEL */}
      <ScheduleDetails item={selectedItem} />
    </div>
  );
}
