"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  DepartmentGroup,
  DepartmentCompetitionDetail,
  getDepartmentCompetitionDetail,
} from "@/data/events";

interface EventDepartmentsProps {
  departments: DepartmentGroup[];
}

export const EventDepartments: React.FC<EventDepartmentsProps> = ({ departments }) => {
  const [selectedDeptIndex, setSelectedDeptIndex] = useState<number>(0);
  const [activeCompetition, setActiveCompetition] =
    useState<DepartmentCompetitionDetail | null>(null);

  const activeDept = departments[selectedDeptIndex] || departments[0];

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCompetition(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto font-mono">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] tracking-[0.25em] text-emerald-400 uppercase font-bold block mb-1.5">
            // DEPARTMENT-WISE COMPETITIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase mb-3">
            SPECIALIZED TECHNICAL COMPETITIONS
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            Every academic department hosts dedicated technical competitions. Browse through the departments below, explore individual competition cards with full briefing, and register directly!
          </p>
        </div>

        {/* Department Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {departments.map((dept, idx) => {
            const isSelected = selectedDeptIndex === idx;

            return (
              <button
                key={dept.department}
                type="button"
                onClick={() => setSelectedDeptIndex(idx)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2 border ${
                  isSelected
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-[1.02]"
                    : "bg-white/[0.03] text-slate-400 border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <span>{dept.icon}</span>
                <span>{dept.department}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                  {dept.events.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Department Stream Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#050c18] to-[#02040a] border border-emerald-500/30 mb-8 gap-3">
          <div className="flex items-center space-x-3.5">
            <span className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-2xl shrink-0">
              {activeDept.icon}
            </span>
            <div>
              <span className="text-[10px] text-emerald-400 tracking-widest uppercase font-bold block">
                DEPARTMENT STREAM // {activeDept.badge}
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white uppercase tracking-wide">
                {activeDept.department}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2.5 self-start sm:self-auto">
            <span className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg font-semibold">
              {activeDept.events.length} Competitions Available
            </span>
          </div>
        </div>

        {/* Individual Competition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {activeDept.events.map((eventName, idx) => {
            const eventNum = (idx + 1).toString().padStart(2, "0");
            const compDetail = getDepartmentCompetitionDetail(
              activeDept.department,
              eventName,
              activeDept.badge
            );

            const registerLink = `/register?event=departmental-technical-events&competition=${encodeURIComponent(
              compDetail.title
            )}&dept=${encodeURIComponent(activeDept.department)}`;

            return (
              <motion.div
                key={eventName}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-emerald-950/20 via-[#040814] to-[#02040a] border border-emerald-500/30 hover:border-emerald-400/80 shadow-[0_0_30px_rgba(16,185,129,0.06)] hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Subtle Card Accent Corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-400/40 pointer-events-none" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-400/40 pointer-events-none" />

                <div>
                  {/* Card Top Pill: Number + Badge + Duration */}
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <span className="text-[11px] font-bold text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/15 border border-emerald-500/30">
                      #{eventNum} {activeDept.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      ⏱ {compDetail.duration}
                    </span>
                  </div>

                  {/* Competition Title */}
                  <h4
                    onClick={() => setActiveCompetition(compDetail)}
                    className="text-base sm:text-lg font-black text-white tracking-wide uppercase mb-2 group-hover:text-emerald-200 transition-colors cursor-pointer leading-snug"
                  >
                    {compDetail.title}
                  </h4>

                  {/* Description written directly on the card */}
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                    {compDetail.description}
                  </p>

                  {/* Quick Specs */}
                  <div className="space-y-1.5 mb-4 text-[11px] text-slate-400 pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 uppercase">Team Size:</span>
                      <span className="text-slate-200 font-semibold">{compDetail.teamSize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 uppercase">Format:</span>
                      <span className="text-emerald-400 font-semibold truncate max-w-[180px]" title={compDetail.format}>
                        {compDetail.format}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Tags */}
                  {compDetail.highlights && compDetail.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {compDetail.highlights.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-slate-400"
                        >
                          ✓ {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Actions: REGISTER BUTTON + VIEW DETAILS BUTTON */}
                <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-stretch gap-2">
                  <Link
                    href={registerLink}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase text-center text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:brightness-110 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>REGISTER</span>
                    <span className="text-sm leading-none">→</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setActiveCompetition(compDetail)}
                    className="py-2.5 px-3 rounded-xl text-[11px] font-semibold tracking-wider uppercase text-slate-300 hover:text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-center"
                  >
                    DETAILS
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal on Click */}
      <AnimatePresence>
        {activeCompetition && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-competition-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto font-mono"
            onClick={() => setActiveCompetition(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#040814] border border-emerald-500/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(16,185,129,0.25)] text-white overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400 pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-400 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400 pointer-events-none" />

              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 mb-5 border-b border-white/10 gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase px-2.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30">
                      {activeCompetition.department} // {activeCompetition.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 tracking-wider">
                      OFFICIAL COMPETITION
                    </span>
                  </div>
                  <h3
                    id="modal-competition-title"
                    className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight"
                  >
                    {activeCompetition.title}
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveCompetition(null)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Event Description (About Event) */}
              <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] text-emerald-400 tracking-widest uppercase font-bold block mb-1.5">
                  // COMPETITION BRIEFING & OVERVIEW
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                  {activeCompetition.description}
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[9px] text-slate-400 tracking-widest uppercase block mb-1">
                    ⏱ ESTIMATED DURATION
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {activeCompetition.duration}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[9px] text-slate-400 tracking-widest uppercase block mb-1">
                    👥 TEAM SPECIFICATION
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {activeCompetition.teamSize}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[9px] text-slate-400 tracking-widest uppercase block mb-1">
                    🏆 AWARDS & RECOGNITION
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-400">
                    Certificates & Cash Merit
                  </span>
                </div>
              </div>

              {/* Competition Format */}
              <div className="mb-6 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-widest block mb-1">
                  🎯 FORMAT & EVALUATION
                </span>
                <p className="text-slate-300 font-sans text-xs">
                  {activeCompetition.format}
                </p>
              </div>

              {/* Highlights / Tags */}
              {activeCompetition.highlights && activeCompetition.highlights.length > 0 && (
                <div className="mb-6">
                  <span className="text-[10px] text-slate-400 tracking-widest uppercase font-bold block mb-2">
                    KEY EVALUATION FOCUS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCompetition.highlights.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-sans px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={`/register?event=departmental-technical-events&competition=${encodeURIComponent(
                    activeCompetition.title
                  )}&dept=${encodeURIComponent(activeCompetition.department)}`}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold tracking-widest text-xs uppercase text-center text-white bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>REGISTER FOR THIS EVENT</span>
                  <span className="text-sm">→</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setActiveCompetition(null)}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-semibold tracking-wider text-xs uppercase text-center border border-white/20 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventDepartments;
