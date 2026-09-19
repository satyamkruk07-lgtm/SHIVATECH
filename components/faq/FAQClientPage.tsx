"use client";

import React, { useState } from "react";
import FAQHero from "./FAQHero";
import FAQFilter from "./FAQFilter";
import FAQSectionGroup from "./FAQSectionGroup";
import FAQCTA from "./FAQCTA";
import { faqEventsData } from "@/data/faq";

export const FAQClientPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const filterCategories = faqEventsData.map((e) => ({
    id: e.id,
    label: e.filterLabel,
  }));

  const displayedSections =
    activeFilter === "all"
      ? faqEventsData
      : faqEventsData.filter((e) => e.id === activeFilter);

  const handleToggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleSelectFilter = (id: string) => {
    setActiveFilter(id);
    if (id !== "all") {
      const el = document.getElementById(`section-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#02040a] relative overflow-x-hidden text-white font-mono selection:bg-red-500 selection:text-white">
      {/* 1. CINEMATIC HERO */}
      <FAQHero />

      {/* 2. EVENT FILTER CHIPS */}
      <FAQFilter
        categories={filterCategories}
        activeFilter={activeFilter}
        onSelectFilter={handleSelectFilter}
      />

      {/* 3. EVENT FAQ SECTIONS (EXACTLY 5 EVENTS) */}
      <div className="relative z-10 py-4">
        {displayedSections.map((section) => (
          <FAQSectionGroup
            key={section.id}
            section={section}
            openFaqId={openFaqId}
            onToggleFaq={handleToggleFaq}
          />
        ))}
      </div>

      {/* 4. FINAL FAQ CTA */}
      <FAQCTA />
    </main>
  );
};

export default FAQClientPage;
