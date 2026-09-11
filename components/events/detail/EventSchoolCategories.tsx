"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  SchoolHackathonCategory,
  SchoolHackathonProblemStatement,
} from "@/data/events";

interface EventSchoolCategoriesProps {
  title?: string;
  categories: SchoolHackathonCategory[];
}

export const EventSchoolCategories: React.FC<EventSchoolCategoriesProps> = ({
  title = "Next-Gen Hackathon Categories & Problem Statements",
  categories,
}) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedPS, setSelectedPS] =
    useState<SchoolHackathonProblemStatement | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<SchoolHackathonCategory | null>(categories[0] || null);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setActiveCategory(categories[activeCategoryIndex] || categories[0]);
    }
  }, [activeCategoryIndex, categories]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPS(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!categories || categories.length === 0) return null;

  const currentCategory = categories[activeCategoryIndex] || categories[0];
  const isEmerald = currentCategory.accentColor === "emerald";

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06] overflow-hidden">
      {/* Ambient Cyber Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto font-mono relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>EXCLUSIVE SCHOOL HACKATHON ARENA</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            {title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Open exclusively for students of <strong className="text-purple-300">Class 9, 10, 11 & 12</strong>. Select your grade category below to explore the official problem statements and build your winning prototype!
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md gap-1.5 sm:gap-2">
            {categories.map((cat, idx) => {
              const isActive = idx === activeCategoryIndex;
              const isCatEmerald = cat.accentColor === "emerald";

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`px-4 sm:px-7 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center space-x-2.5 ${
                    isActive
                      ? isCatEmerald
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-[0_0_25px_rgba(16,185,129,0.35)]"
                        : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.35)]"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="text-sm sm:text-base">
                    {idx === 0 ? "🌱" : "⚡"}
                  </span>
                  <span>{cat.gradeBadge}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Description Banner */}
        <motion.div
          key={currentCategory.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className={`p-6 sm:p-7 rounded-2xl mb-8 border backdrop-blur-md ${
            isEmerald
              ? "bg-emerald-950/20 border-emerald-500/30"
              : "bg-purple-950/20 border-purple-500/30"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2.5 mb-1.5">
                <span
                  className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-widest ${
                    isEmerald
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      : "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                  }`}
                >
                  {currentCategory.gradeBadge}
                </span>
                <span className="text-xs font-bold text-slate-300 tracking-wide">
                  ✓ {currentCategory.eligibility}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wide">
                {currentCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1.5 max-w-3xl leading-relaxed">
                {currentCategory.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center space-x-2 text-xs font-bold font-mono text-slate-400 bg-black/40 px-3.5 py-2 rounded-xl border border-white/10 self-start md:self-auto">
              <span>👥 TEAM SIZE:</span>
              <span className="text-white">2–4 STUDENTS</span>
            </div>
          </div>
        </motion.div>

        {/* Problem Statements Grid (4 Cards per Category) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {currentCategory.problemStatements.map((ps, psIdx) => {
            const registerLink = `/register?event=next-gen-hackathon&category=${encodeURIComponent(
              currentCategory.gradeBadge
            )}&ps=${encodeURIComponent(ps.title)}`;

            return (
              <motion.div
                key={ps.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: psIdx * 0.08 }}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 group hover:-translate-y-1 ${
                  isEmerald
                    ? "bg-gradient-to-br from-emerald-950/20 via-[#070e14] to-[#03060a] border border-emerald-500/25 hover:border-emerald-400/80 shadow-[0_0_30px_rgba(16,185,129,0.06)] hover:shadow-[0_0_35px_rgba(16,185,129,0.22)]"
                    : "bg-gradient-to-br from-purple-950/20 via-[#0a0818] to-[#04030d] border border-purple-500/25 hover:border-purple-400/80 shadow-[0_0_30px_rgba(168,85,247,0.06)] hover:shadow-[0_0_35px_rgba(168,85,247,0.22)]"
                }`}
              >
                {/* Tech Corner Accents */}
                <div
                  className={`absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 pointer-events-none ${
                    isEmerald ? "border-emerald-400/40" : "border-purple-400/40"
                  }`}
                />
                <div
                  className={`absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 pointer-events-none ${
                    isEmerald ? "border-emerald-400/40" : "border-purple-400/40"
                  }`}
                />

                {/* Card Top: Code, Domain & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded border uppercase tracking-widest ${
                          isEmerald
                            ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                            : "bg-purple-500/15 border-purple-500/40 text-purple-300"
                        }`}
                      >
                        {ps.code}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        {ps.domain}
                      </span>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg border group-hover:scale-110 transition-transform ${
                        isEmerald
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                          : "bg-purple-500/10 border-purple-500/30 text-purple-300"
                      }`}
                    >
                      {ps.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wide group-hover:text-slate-100 transition-colors mb-2.5 leading-snug">
                    {ps.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4 line-clamp-3">
                    {ps.description}
                  </p>

                  {/* Objective Pill */}
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 mb-5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                      🎯 TARGET GOAL:
                    </span>
                    <p className="text-xs text-slate-300 font-sans">
                      {ps.objective}
                    </p>
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPS(ps);
                      setActiveCategory(currentCategory);
                    }}
                    className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white flex items-center space-x-1.5 transition-colors py-2"
                  >
                    <span>DETAILS & SPECS</span>
                    <span className="text-sm">👁</span>
                  </button>

                  <Link
                    href={registerLink}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md flex items-center space-x-1.5 ${
                      isEmerald
                        ? "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/25"
                        : "bg-purple-600 hover:bg-purple-500 shadow-purple-600/25"
                    }`}
                  >
                    <span>REGISTER</span>
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =================================================================== */}
      {/* DETAIL MODAL DIALOG (On Clicking Any Problem Statement Card)         */}
      {/* =================================================================== */}
      <AnimatePresence>
        {selectedPS && activeCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPS(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-ps-title"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-[#090d1a] border border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.25)] font-mono z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400 pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400 pointer-events-none" />

              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 mb-5 border-b border-white/10 gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-widest text-purple-300 uppercase px-2.5 py-0.5 rounded bg-purple-500/20 border border-purple-500/40">
                      {selectedPS.code}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30">
                      {activeCategory.gradeBadge}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase">
                      {selectedPS.domain}
                    </span>
                  </div>

                  <h3
                    id="modal-ps-title"
                    className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight"
                  >
                    {selectedPS.title}
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPS(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-4 mb-6">
                {/* Full Description */}
                <div>
                  <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1.5">
                    // PROBLEM BRIEFING & CONTEXT
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/10">
                    {selectedPS.description}
                  </p>
                </div>

                {/* Target Objective */}
                <div>
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1.5">
                    🎯 TARGET OBJECTIVE & IMPACT
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/10">
                    {selectedPS.objective}
                  </p>
                </div>

                {/* Deliverables */}
                {selectedPS.deliverables && (
                  <div>
                    <h4 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2">
                      📋 EXPECTED PROJECT DELIVERABLES
                    </h4>
                    <ul className="space-y-2">
                      {selectedPS.deliverables.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="text-xs text-slate-300 font-sans flex items-start space-x-2"
                        >
                          <span className="text-emerald-400 font-bold shrink-0">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recommended Tools */}
                {selectedPS.recommendedTools && (
                  <div>
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                      🛠️ SUGGESTED HARDWARE & SOFTWARE TOOLS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPS.recommendedTools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-sans px-3 py-1 rounded-lg bg-white/5 border border-white/15 text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Evaluation Criteria */}
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30">
                  <h4 className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-2">
                    ⚖️ EVALUATION CRITERIA
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                    <div className="p-2 rounded bg-black/40">
                      <div className="text-emerald-400 font-bold">30%</div>
                      <div className="text-[10px] text-slate-400">Innovation</div>
                    </div>
                    <div className="p-2 rounded bg-black/40">
                      <div className="text-sky-400 font-bold">30%</div>
                      <div className="text-[10px] text-slate-400">Working Model</div>
                    </div>
                    <div className="p-2 rounded bg-black/40">
                      <div className="text-amber-400 font-bold">20%</div>
                      <div className="text-[10px] text-slate-400">Practicality</div>
                    </div>
                    <div className="p-2 rounded bg-black/40">
                      <div className="text-purple-400 font-bold">20%</div>
                      <div className="text-[10px] text-slate-400">Presentation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={`/register?event=next-gen-hackathon&category=${encodeURIComponent(
                    activeCategory.gradeBadge
                  )}&ps=${encodeURIComponent(selectedPS.title)}`}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold tracking-widest text-xs uppercase text-center text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>REGISTER FOR THIS PROBLEM STATEMENT</span>
                  <span className="text-sm">→</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedPS(null)}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-bold tracking-wider text-xs uppercase border border-white/20 hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
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

export default EventSchoolCategories;
