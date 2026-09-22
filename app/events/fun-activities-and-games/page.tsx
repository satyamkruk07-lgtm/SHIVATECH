import React from "react";
import { Metadata } from "next";
import FunActivitiesPage from "@/components/events/fun-activities/FunActivitiesPage";

export const metadata: Metadata = {
  title: "FUN ACTIVITIES & GAMES | SHIVA INNOVEX 2026",
  description:
    "Where creativity meets competition. Explore Skin Artistry and the Beyblade Tournament at SHIVA INNOVEX 2026.",
  openGraph: {
    title: "FUN ACTIVITIES & GAMES | SHIVA INNOVEX 2026",
    description:
      "Where creativity meets competition. Explore Skin Artistry and the Beyblade Tournament at SHIVA INNOVEX 2026.",
  },
};

export default function FunActivitiesDedicatedPage() {
  return <FunActivitiesPage />;
}
