import EventsScene from "@/components/events/EventsScene";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | SHIVATECH 2026",
  description: "Explore the events at SHIVATECH 2026.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#02040a] relative">
      <Navbar />
      <EventsScene />
    </main>
  );
}

