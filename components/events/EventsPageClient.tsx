"use client";

import React, { useState } from "react";
import { eventsList, EventItem } from "@/data/events";
import EventsHeroVideo from "./EventsHeroVideo";
import EventsIntro from "./EventsIntro";
import EventItemSection from "./EventItemSection";
import EventDetailsModal from "./EventDetailsModal";
import EventsFinalCTA from "./EventsFinalCTA";
import Footer from "@/components/Footer";

export const EventsPageClient: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const handleViewEvent = (event: EventItem) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      {/* 1. CINEMATIC VIDEO HERO */}
      <EventsHeroVideo />

      {/* 2. EVENTS INTRO */}
      <EventsIntro />

      {/* 3–6. FOUR CINEMATIC EVENT SECTIONS */}
      {/* 3. HACKNATION 2.0 (01) */}
      {/* 4. IDEATHON (02) */}
      {/* 5. SHIVATECH (03 - Flagship) */}
      {/* 6. SCIENCE CHAMPIONSHIP (04) */}
      <div className="relative w-full bg-[#02040a]">
        {eventsList.map((event) => (
          <EventItemSection
            key={event.id}
            event={event}
            onViewEvent={handleViewEvent}
          />
        ))}
      </div>

      {/* 7. FINAL CTA */}
      <EventsFinalCTA />

      {/* 8. FOOTER */}
      <Footer />

      {/* EVENT DETAILS VIEW MODAL */}
      <EventDetailsModal
        event={selectedEvent}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default EventsPageClient;
