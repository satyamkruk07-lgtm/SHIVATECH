"use client";

import React from "react";
import { EventItem } from "@/data/events";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuantumHero from "./QuantumHero";
import QuantumConcept from "./QuantumConcept";
import QuantumPhaseGrid from "./QuantumPhaseGrid";
import QualificationTimeline from "./QualificationTimeline";
import RobotChoice from "./RobotChoice";
import ArenaMap from "./ArenaMap";
import QuantumSummary from "./QuantumSummary";
import QuantumCTA from "./QuantumCTA";

interface QuantumDriftPageProps {
  event: EventItem;
}

export const QuantumDriftPage: React.FC<QuantumDriftPageProps> = ({ event }) => {
  const phases = event.quantumPhases || [];

  return (
    <main className="min-h-screen bg-[#02040a] relative overflow-x-hidden text-white font-mono selection:bg-red-500 selection:text-white">
      {/* 1. GLOBAL NAVBAR (With SHIVA INNOVEX brand) */}
      <Navbar />

      {/* 2. CINEMATIC HERO */}
      <QuantumHero />

      {/* 3. EVENT INTRO / CONCEPT */}
      <QuantumConcept />

      {/* 4. THE FOUR PHASES */}
      <QuantumPhaseGrid phases={phases} />

      {/* 5. THE QUALIFICATION JOURNEY */}
      <QualificationTimeline />

      {/* 6. YOUR ROBOT. YOUR CHOICE. */}
      <RobotChoice />

      {/* 7. THE ARENA */}
      <ArenaMap />

      {/* 8. EVENT SUMMARY */}
      <QuantumSummary />

      {/* 9. FINAL CTA */}
      <QuantumCTA />

      {/* 10. FESTIVAL FOOTER */}
      <Footer />
    </main>
  );
};

export default QuantumDriftPage;
