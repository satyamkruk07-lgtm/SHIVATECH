"use client";

import React from "react";

interface FAQFilterProps {
  categories: { id: string; label: string }[];
  activeFilter: string;
  onSelectFilter: (id: string) => void;
}

export const FAQFilter: React.FC<FAQFilterProps> = ({
  categories,
  activeFilter,
  onSelectFilter,
}) => {
  return (
    <div className="sticky top-[72px] sm:top-[88px] z-30 w-full py-4 bg-[#02040a]/90 backdrop-blur-xl border-y border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal scroll on mobile, flex on desktop */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth">
          <button
            onClick={() => onSelectFilter("all")}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeFilter === "all"
                ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] border border-red-400/50 scale-[1.02]"
                : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
            }`}
          >
            ALL EVENTS
          </button>

          {categories.map((cat) => {
            const isSelected = activeFilter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectFilter(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-red-600/90 to-sky-600/90 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] border border-white/40 scale-[1.02]"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQFilter;
