"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQItem } from "@/data/faq";

interface FAQAccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  accent: "crimson" | "blue" | "emerald" | "purple" | "cyan";
}

export const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({
  faq,
  isOpen,
  onToggle,
  accent,
}) => {
  const contentId = `faq-content-${faq.id}`;
  const buttonId = `faq-button-${faq.id}`;

  const accentBorderGlow = {
    crimson: "border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.15)]",
    blue: "border-sky-500/50 shadow-[0_0_20px_rgba(56,189,248,0.15)]",
    emerald: "border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    purple: "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    cyan: "border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]",
  }[accent];

  const accentBadge = {
    crimson: "text-red-400 bg-red-500/10 border-red-500/30",
    blue: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  }[accent];

  return (
    <div
      className={`rounded-xl border transition-all duration-300 font-mono overflow-hidden ${
        isOpen
          ? `bg-[#050a18]/90 ${accentBorderGlow}`
          : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
      }`}
    >
      {/* Accordion Trigger Button */}
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
      >
        <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
          <span className="text-xs font-mono font-bold text-slate-500 shrink-0 pt-0.5 sm:pt-0">
            {faq.number}
          </span>
          <span
            className={`text-sm sm:text-base font-bold tracking-wide transition-colors ${
              isOpen ? "text-white" : "text-slate-200 hover:text-white"
            }`}
          >
            {faq.question}
          </span>
        </div>

        {/* Collapsed [ + ] / Expanded [ − ] Indicator */}
        <div className="shrink-0 flex items-center justify-center">
          <span
            className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg border font-mono text-sm font-bold transition-all ${
              isOpen
                ? `${accentBadge} shadow-sm`
                : "bg-white/[0.04] border-white/15 text-slate-400"
            }`}
            aria-hidden="true"
          >
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>

      {/* Accordion Expanded Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-slate-300 font-sans text-xs sm:text-sm leading-relaxed border-t border-white/5 space-y-3">
              <p>{faq.answer}</p>
              {faq.highlight && (
                <div className="pt-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-md text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase border ${accentBadge}`}
                  >
                    HIGHLIGHT: {faq.highlight}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQAccordionItem;
