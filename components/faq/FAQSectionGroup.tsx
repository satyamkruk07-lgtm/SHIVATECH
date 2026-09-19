"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FAQEventSection } from "@/data/faq";
import FAQAccordionItem from "./FAQAccordionItem";

interface FAQSectionGroupProps {
  section: FAQEventSection;
  openFaqId: string | null;
  onToggleFaq: (id: string) => void;
}

export const FAQSectionGroup: React.FC<FAQSectionGroupProps> = ({
  section,
  openFaqId,
  onToggleFaq,
}) => {
  const accentDot = {
    crimson: "bg-red-500",
    blue: "bg-sky-500",
    emerald: "bg-emerald-500",
    purple: "bg-purple-500",
    cyan: "bg-cyan-500",
  }[section.accent];

  const accentBadge = {
    crimson: "text-red-400 border-red-500/30 bg-red-500/10",
    blue: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    emerald: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    purple: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  }[section.accent];

  return (
    <section
      id={`section-${section.id}`}
      className="relative w-full py-12 sm:py-16 border-t border-white/5 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className={`w-2 h-2 rounded-full ${accentDot} animate-pulse`} />
              <span
                className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-widest uppercase border ${accentBadge}`}
              >
                {section.badge}
              </span>
              <span className="text-xs font-mono text-slate-500 tracking-wider">
                // EVENT {section.number}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-orbitron tracking-tight text-white uppercase">
              {section.name}
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1 tracking-wide">
              {section.tagline}
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-slate-500">
            <span>{section.faqs.length} QUESTIONS ANSWERED</span>
          </div>
        </div>

        {/* Accordions List */}
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          {section.faqs.map((faq) => (
            <FAQAccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openFaqId === faq.id}
              onToggle={() => onToggleFaq(faq.id)}
              accent={section.accent}
            />
          ))}
        </div>

        {/* End of Group: VIEW EVENT DETAILS Link */}
        <div className="pt-4 flex items-center justify-end">
          <Link
            href={section.detailRoute}
            className="group inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 text-slate-200 hover:text-white text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all duration-200 shadow-sm"
          >
            <span>VIEW {section.name} DETAILS</span>
            <span className="text-red-400 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSectionGroup;
