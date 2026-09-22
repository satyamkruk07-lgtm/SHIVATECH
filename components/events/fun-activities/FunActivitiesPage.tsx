"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FunActivitiesHero from "./FunActivitiesHero";
import FunActivitiesCards from "./FunActivitiesCards";
import FunActivitiesAbout from "./FunActivitiesAbout";
import FunActivitiesCTA from "./FunActivitiesCTA";

export const FunActivitiesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#02040a] relative overflow-x-hidden text-white font-mono selection:bg-purple-600 selection:text-white">
      {/* 1. GLOBAL FESTIVAL NAVBAR */}
      <Navbar />

      {/* 2. CINEMATIC HERO */}
      <FunActivitiesHero />

      {/* 3. TWO PREMIUM EVENT CARDS (WEB OF COLOUR & BEYBLADE TOURNAMENT) */}
      <FunActivitiesCards />

      {/* 4. ABOUT THE ACTIVITIES SECTION */}
      <FunActivitiesAbout />

      {/* 5. FESTIVAL CTA */}
      <FunActivitiesCTA />

      {/* 6. FESTIVAL FOOTER */}
      <Footer />
    </main>
  );
};

export default FunActivitiesPage;
