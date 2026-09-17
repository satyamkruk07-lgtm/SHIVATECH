"use client";

import React from "react";
import { EventItem } from "@/data/events";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuantumHero from "./QuantumHero";
import QuantumConcept from "./QuantumConcept";
import QuantumPhaseGrid from "./QuantumPhaseGrid";
import QualificationTimeline from "./QualificationTimeline";
import QuantumRobotChoice from "./QuantumRobotChoice";
import ArenaMap from "./ArenaMap";
import QuantumEventDetails from "./QuantumEventDetails";
import QuantumSummary from "./QuantumSummary";
import QuantumCoordinators from "./QuantumCoordinators";
import QuantumRulebook from "./QuantumRulebook";
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

      {/* 3. EVENT OVERVIEW */}
      <QuantumConcept />

      {/* 4. THE THREE PHASES */}
      <QuantumPhaseGrid phases={phases} />

      {/* 5. THE QUALIFICATION JOURNEY */}
      <QualificationTimeline />

      {/* 6. YOUR ROBOT. YOUR CHOICE. */}
      <QuantumRobotChoice />

      {/* 7. THE ARENA */}
      <ArenaMap />

      {/* 8. EVENT DETAILS (Metadata Cards) */}
      <QuantumEventDetails />

      {/* 8.5 EVENT SUMMARY (Detailed Specifications Table) */}
      <QuantumSummary />

      {/* 9. EVENT COORDINATORS */}
      <QuantumCoordinators />

      {/* 10. OFFICIAL RULEBOOK */}
      <QuantumRulebook />

      {/* 11. FINAL REGISTRATION CTA */}
      <QuantumCTA />

      {/* 12. FESTIVAL FOOTER */}
      <Footer />
    </main>
  );
};

export default QuantumDriftPage;
