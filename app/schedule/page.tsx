import React from "react";
import Metadata from "next";
import Navbar from "@/components/Navbar";
import ScheduleScene from "@/components/schedule/ScheduleScene";

export const metadata = {
  title: "Schedule | SHIVATECH 2026",
  description:
    "Explore the official 2-day event schedule and holographic timeline for SHIVATECH 2026. Interactive radial schedule featuring Hacknation 2.0, Ideathon, Tech Talks, and Workshops.",
};

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <ScheduleScene />
    </>
  );
}
