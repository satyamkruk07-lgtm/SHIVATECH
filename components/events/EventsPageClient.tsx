"use client";

import React from "react";
import { eventsList } from "@/data/events";
import EventsHeroVideo from "./EventsHeroVideo";
import EventsIntro from "./EventsIntro";
import EventLandingCard from "./EventLandingCard";
import EventsFinalCTA from "./EventsFinalCTA";
import Footer from "@/components/Footer";

export const EventsPageClient: React.FC = () => {
  return (
    <>
      {/* 1. CINEMATIC VIDEO HERO */}
      <EventsHeroVideo />

      {/* 2. EVENTS INTRO ("OUR EVENTS" - Explore innovation, technology...) */}
      <EventsIntro />

      {/* 3. FOUR PREMIUM EVENT BLOCKS */}
      {/* 01 — HACKNATION 2.0 */}
      {/* 02 — IDEATHON */}
      {/* 03 — DEPARTMENTAL TECHNICAL EVENTS */}
      {/* 04 — NEXT-GEN HACKATHON */}
      <div className="relative w-full bg-[#02040a] py-8 sm:py-12 space-y-4">
        {eventsList.map((event, index) => (
          <EventLandingCard
            key={event.id}
            event={event}
            index={index}
          />
        ))}
      </div>

      {/* 4. FINAL FESTIVAL CTA */}
      <EventsFinalCTA />

      {/* 5. EXISTING FOOTER */}
      <Footer />
    </>
  );
};

export default EventsPageClient;
