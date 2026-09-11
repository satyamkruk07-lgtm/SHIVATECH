import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { eventsList, getEventBySlug } from "@/data/events";
import EventHero from "@/components/events/detail/EventHero";
import EventOverview from "@/components/events/detail/EventOverview";
import EventTracks from "@/components/events/detail/EventTracks";
import EventTimeline from "@/components/events/detail/EventTimeline";
import EventEvaluation from "@/components/events/detail/EventEvaluation";
import EventDepartments from "@/components/events/detail/EventDepartments";
import EventOpportunities from "@/components/events/detail/EventOpportunities";
import EventScienceChallenges from "@/components/events/detail/EventScienceChallenges";
import EventParticipatingStates from "@/components/events/detail/EventParticipatingStates";
import EventCTA from "@/components/events/detail/EventCTA";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [
    ...eventsList.map((event) => ({
      slug: event.slug,
    })),
    { slug: "science-championship" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found | SHIVATECH 2026",
    };
  }

  return {
    title: `${event.name} | SHIVATECH 2026`,
    description: event.description,
    openGraph: {
      title: `${event.name} | SHIVATECH 2026`,
      description: event.description,
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#02040a] relative overflow-x-hidden text-white">
      {/* 1. GLOBAL NAVBAR (With SHIVA INNOVEX brand) */}
      <Navbar />

      {/* 2. CINEMATIC EVENT HERO */}
      <EventHero event={event} />

      {/* 3. EXECUTIVE OVERVIEW & OBJECTIVES */}
      <EventOverview event={event} />

      {/* 4. TRACKS & DOMAINS (Hacknation & Ideathon) */}
      {event.tracks && event.tracks.length > 0 && (
        <EventTracks
          title={event.tracksTitle}
          tracks={event.tracks}
          accentColor={event.accentColor}
          badgeText={event.category}
        />
      )}

      {/* 4.1 PAST PARTICIPATING STATES (Hacknation 2.0 - directly below Proposed Technology Tracks) */}
      {event.participatingStates && event.participatingStates.length > 0 && (
        <EventParticipatingStates
          title={event.participatingStatesTitle || "Past Participating States"}
          states={event.participatingStates}
        />
      )}

      {/* 5. PROCESS & EXECUTION TIMELINE (Hacknation & Ideathon) */}
      {event.structure && event.structure.length > 0 && (
        <EventTimeline
          title={event.structureTitle}
          steps={event.structure}
          accentColor={event.accentColor}
        />
      )}

      {/* 6. EVALUATION PARAMETERS (Hacknation 2.0) */}
      {event.evaluation && event.evaluation.length > 0 && (
        <EventEvaluation parameters={event.evaluation} />
      )}

      {/* 7. DEPARTMENTAL TECHNICAL COMPETITIONS (Departmental Technical Events) */}
      {event.departments && event.departments.length > 0 && (
        <EventDepartments departments={event.departments} />
      )}

      {/* 8. INCUBATION & SPECIAL OPPORTUNITIES (Ideathon) */}
      {event.opportunities && event.opportunities.length > 0 && (
        <EventOpportunities opportunities={event.opportunities} />
      )}

      {/* 9. SCIENCE ARENA CHALLENGES (Science Championship) */}
      {event.scienceChallenges && event.scienceChallenges.length > 0 && (
        <EventScienceChallenges challenges={event.scienceChallenges} />
      )}

      {/* 10. REGISTRATION CALL TO ACTION */}
      <EventCTA event={event} />

      {/* 11. FESTIVAL FOOTER */}
      <Footer />
    </main>
  );
}
