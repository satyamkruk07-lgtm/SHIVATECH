import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { eventsList, getEventBySlug } from "@/data/events";
import EventHero from "@/components/events/detail/EventHero";
import HackathonJourneyTimeline from "@/components/events/detail/HackathonJourneyTimeline";
import EventOverview from "@/components/events/detail/EventOverview";
import EventTracks from "@/components/events/detail/EventTracks";
import EventTimeline from "@/components/events/detail/EventTimeline";
import EventEvaluation from "@/components/events/detail/EventEvaluation";
import EventDepartments from "@/components/events/detail/EventDepartments";
import EventOpportunities from "@/components/events/detail/EventOpportunities";
import EventSchoolCategories from "@/components/events/detail/EventSchoolCategories";
import EventParticipatingStates from "@/components/events/detail/EventParticipatingStates";
import EventCTA from "@/components/events/detail/EventCTA";
import QuantumDriftPage from "@/components/events/quantum-drift/QuantumDriftPage";
import FunActivitiesPage from "@/components/events/fun-activities/FunActivitiesPage";

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
    { slug: "quantum-drift" },
    { slug: "fun-activities-and-games" },
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

  // Specialized dedicated experience for Quantum Drift
  if (slug === "quantum-drift" || event.slug === "quantum-drift") {
    return <QuantumDriftPage event={event} />;
  }

  // Specialized dedicated experience for Fun Activities & Games
  if (slug === "fun-activities-and-games" || event.slug === "fun-activities-and-games") {
    return <FunActivitiesPage />;
  }

  return (
    <main className="min-h-screen bg-[#02040a] relative overflow-x-hidden text-white">
      {/* 1. GLOBAL NAVBAR (With SHIVA INNOVEX brand) */}
      <Navbar />

      {/* 2. CINEMATIC EVENT HERO (Includes Hero, Audience Badge & Event Basic Information) */}
      <EventHero event={event} />

      {/* 2.5 HACKATHON JOURNEY TIMELINE (New Premium Section for Next-Gen Hackathon 1.0) */}
      {event.journeyMilestones && event.journeyMilestones.length > 0 && (
        <HackathonJourneyTimeline
          title={event.journeyTitle}
          subtitle={event.journeySubtitle}
          milestones={event.journeyMilestones}
        />
      )}

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

      {/* 9. SCHOOL HACKATHON CATEGORIES (Next-Gen Hackathon 1.0 - Class 9-10 & Class 11-12) */}
      {event.schoolCategories && event.schoolCategories.length > 0 && (
        <EventSchoolCategories
          title={event.schoolCategoriesTitle || "Next-Gen Hackathon Categories & Problem Statements"}
          categories={event.schoolCategories}
        />
      )}

      {/* 10. REGISTRATION CALL TO ACTION */}
      <EventCTA event={event} />

      {/* 11. FESTIVAL FOOTER */}
      <Footer />
    </main>
  );
}
