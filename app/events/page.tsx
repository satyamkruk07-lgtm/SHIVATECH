import Navbar from "@/components/Navbar";
import EventsPageClient from "@/components/events/EventsPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | SHIVATECH 2026",
  description:
    "Explore the official events at SHIVATECH 2026: Hacknation 2.0, Ideathon, ShivaTech Flagship Expo, and Science Championship.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#02040a] relative overflow-x-hidden">
      <Navbar />
      <EventsPageClient />
    </main>
  );
}
