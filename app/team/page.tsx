import React from "react";
import { Metadata } from "next";
import TeamScene from "@/components/team/TeamScene";

export const metadata: Metadata = {
  title: "Team | SHIVATECH 2026",
  description: "Meet the visionary team behind SHIVATECH 2026 - The Annual Technical Festival.",
};

export default function TeamPage() {
  return <TeamScene />;
}
