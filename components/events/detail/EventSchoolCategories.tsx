"use client";

import React, { useState, useEffect, useMemo } from "react";
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

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<string>("ALL");
  const [selectedType, setSelectedType] = useState<string>("ALL");
  const [visibleCount, setVisibleCount] = useState<number>(16);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setActiveCategory(categories[activeCategoryIndex] || categories[0]);
      // Reset visible count and domain filter on grade tab switch
      setSelectedDomain("ALL");
      setSelectedType("ALL");
      setSearchQuery("");
      setVisibleCount(16);
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

  // List of unique domains with counts
  const domainList = useMemo(() => {
    const domainsMap: Record<string, { count: number; icon: string }> = {};
    currentCategory.problemStatements.forEach((ps) => {
      if (!domainsMap[ps.domain]) {
        domainsMap[ps.domain] = { count: 0, icon: ps.icon || "⚡" };
      }
      domainsMap[ps.domain].count += 1;
    });

    return Object.entries(domainsMap).map(([domain, data]) => ({
      domain,
      count: data.count,
      icon: data.icon,
    }));
  }, [currentCategory]);

  // Filter problem statements based on search, domain, and type
  const filteredStatements = useMemo(() => {
    return currentCategory.problemStatements.filter((ps) => {
      // Domain filter
      if (selectedDomain !== "ALL" && ps.domain !== selectedDomain) {
        return false;
      }

      // Type filter
      if (selectedType !== "ALL" && ps.categoryType !== selectedType) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = ps.title.toLowerCase().includes(query);
        const inDesc = ps.description.toLowerCase().includes(query);
        const inCode = ps.code.toLowerCase().includes(query);
        const inObj = ps.objective.toLowerCase().includes(query);
        const inDomain = ps.domain.toLowerCase().includes(query);
        const inTools =
          ps.recommendedTools &&
          ps.recommendedTools.some((t) => t.toLowerCase().includes(query));

        return inTitle || inDesc || inCode || inObj || inDomain || inTools;
      }

      return true;
    });
  }, [currentCategory, selectedDomain, selectedType, searchQuery]);

  const displayedStatements =
    selectedDomain !== "ALL" || searchQuery.trim() !== "" || selectedType !== "ALL"
      ? filteredStatements
      : filteredStatements.slice(0, visibleCount);

  const hasMore =
    selectedDomain === "ALL" &&
    searchQuery.trim() === "" &&
    selectedType === "ALL" &&
    visibleCount < filteredStatements.length;

  return (
    <section
      id="school-problem-statements"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/[0.07] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-cyan-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto font-mono relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>EXCLUSIVE SCHOOL INNOVATION ARENA</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            {title}
          </h2>

          <p className="text-xs sm:text-base text-slate-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Open exclusively for budding school innovators of{" "}
            <strong className="text-purple-300 font-semibold">
              Class 9, 10, 11 & 12
            </strong>
            . Explore our official curriculum-aligned problem statements across{" "}
            <strong className="text-cyan-300 font-semibold">
              7 real-world themes
            </strong>
            , or submit your own unique solution under Open Theme!
          </p>
        </div>

        {/* Grade Tab Selector (Class 9 & 10 vs Class 11 & 12) */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md gap-1.5 sm:gap-2 shadow-2xl">
            {categories.map((cat, idx) => {
              const isActive = idx === activeCategoryIndex;
              const isCatEmerald = cat.accentColor === "emerald";

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`px-4 sm:px-8 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center space-x-2.5 cursor-pointer ${
                    isActive
                      ? isCatEmerald
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-[0_0_25px_rgba(16,185,129,0.35)]"
                        : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.35)]"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="text-base sm:text-lg">
                    {idx === 0 ? "🌱" : "⚡"}
                  </span>
                  <span>{cat.gradeBadge}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-slate-200 border border-white/10">
                    {cat.problemStatements.length} PS
                  </span>
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

            <div className="shrink-0 flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs font-bold font-mono text-slate-300 self-start md:self-auto">
              <div className="bg-black/60 px-3.5 py-2 rounded-xl border border-white/15 flex items-center space-x-2 shadow-inner">
                <span className="text-amber-400">⏱ DURATION:</span>
                <span className="text-white">6 HOURS SPRINT</span>
              </div>
              <div className="bg-black/60 px-3.5 py-2 rounded-xl border border-white/15 flex items-center space-x-2 shadow-inner">
                <span className="text-purple-400">👥 TEAM:</span>
                <span className="text-white">4–5 STUDENTS + 1 MENTOR (OPTIONAL)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* University Hardware & Lab Equipment Support Callout */}
        <div className="p-4 sm:p-5 rounded-2xl mb-8 sm:mb-10 bg-gradient-to-r from-amber-500/15 via-[#0b0f20] to-purple-950/25 border border-amber-400/40 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4 shadow-[0_0_30px_rgba(251,191,36,0.12)]">
          <div className="w-11 h-11 rounded-xl bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-2xl shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            🛠️
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider">
                UNIVERSITY HARDWARE & LAB APPARATUS PROVIDED ON-CAMPUS
              </span>
              <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-400/25 text-amber-200 border border-amber-400/50 uppercase tracking-widest">
                FREE UNIVERSITY LAB ACCESS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
              To support student innovators, all essential{" "}
              <strong className="text-white font-semibold">
                microcontrollers (Arduino / ESP32), sensor modules (ultrasonic, PIR, LDR, soil moisture, temperature, gas), relays, breadboards, jumper wires, and testing apparatus
              </strong>{" "}
              will be provided on-campus by the University, alongside guided faculty mentorship in our high-tech labs.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar (Search + Domain Pills + Type Pills) */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
          {/* Top Row: Search Box & Type Filters */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                🔍
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search problem statements by keyword, sensor, Arduino, ESP32, Python, title..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-black/50 border border-white/15 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white cursor-pointer text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Type Selector Pills */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold hidden sm:inline">
                TYPE:
              </span>
              {[
                { id: "ALL", label: "All Types" },
                { id: "Hardware", label: "⚙️ Hardware / IoT" },
                { id: "Software", label: "💻 Software / App" },
                { id: "Open", label: "💡 Open Innovation" },
              ].map((t) => {
                const isActive = selectedType === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedType(t.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? "bg-white/20 text-white border border-white/40 shadow-sm"
                        : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Theme / Domain Filter Pills */}
          <div className="pt-3 border-t border-white/[0.08]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                SELECT BY DOMAIN / THEME:
              </span>
              {(selectedDomain !== "ALL" ||
                selectedType !== "ALL" ||
                searchQuery.trim() !== "") && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDomain("ALL");
                    setSelectedType("ALL");
                    setSearchQuery("");
                  }}
                  className="text-[10px] text-red-400 hover:text-red-300 font-bold uppercase tracking-wider underline cursor-pointer"
                >
                  Reset All Filters ✕
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedDomain("ALL")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer ${
                  selectedDomain === "ALL"
                    ? isEmerald
                      ? "bg-emerald-500/25 border border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                      : "bg-purple-500/25 border border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                    : "bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>🌐 All Themes</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/40 text-slate-300">
                  {currentCategory.problemStatements.length}
                </span>
              </button>

              {domainList.map(({ domain, count, icon }) => {
                const isSelected = selectedDomain === domain;
                return (
                  <button
                    key={domain}
                    onClick={() => setSelectedDomain(domain)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer ${
                      isSelected
                        ? isEmerald
                          ? "bg-emerald-500/25 border border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                          : "bg-purple-500/25 border border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                        : "bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{icon}</span>
                    <span>{domain}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/40 text-slate-300">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Counter Summary */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-xs text-slate-400 font-mono">
            SHOWING{" "}
            <strong className="text-white">{displayedStatements.length}</strong>{" "}
            OF{" "}
            <strong className="text-white">
              {filteredStatements.length}
            </strong>{" "}
            PROBLEM STATEMENTS
            {selectedDomain !== "ALL" && (
              <span className="text-purple-300"> • Theme: {selectedDomain}</span>
            )}
            {selectedType !== "ALL" && (
              <span className="text-cyan-300"> • Type: {selectedType}</span>
            )}
          </div>

          <div className="text-[11px] text-slate-400 hidden sm:block">
            Click on any card to view detailed specifications & tools
          </div>
        </div>

        {/* Empty State */}
        {filteredStatements.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-white/[0.02] border border-white/10 my-8">
            <span className="text-4xl mb-3 block">🔍</span>
            <h4 className="text-base sm:text-lg font-bold text-white mb-1">
              No Problem Statements Found
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-4 font-sans">
              No problem statements matched your search criteria. Try a different keyword or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedDomain("ALL");
                setSelectedType("ALL");
                setSearchQuery("");
              }}
              className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Problem Statements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {displayedStatements.map((ps, psIdx) => {
            const isHardware = ps.categoryType === "Hardware";
            const isOpen = ps.categoryType === "Open";

            return (
              <motion.div
                key={ps.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(psIdx * 0.03, 0.3) }}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 group hover:-translate-y-1 ${
                  isEmerald
                    ? "bg-gradient-to-br from-emerald-950/20 via-[#070e14] to-[#03060a] border border-emerald-500/25 hover:border-emerald-400/80 shadow-[0_0_30px_rgba(16,185,129,0.06)] hover:shadow-[0_0_35px_rgba(16,185,129,0.2)]"
                    : "bg-gradient-to-br from-purple-950/20 via-[#0a0818] to-[#04030d] border border-purple-500/25 hover:border-purple-400/80 shadow-[0_0_30px_rgba(168,85,247,0.06)] hover:shadow-[0_0_35px_rgba(168,85,247,0.2)]"
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

                {/* Card Top: Code, Domain Badges & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-3.5 gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {/* Code Badge */}
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
                          isEmerald
                            ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                            : "bg-purple-500/15 border-purple-500/40 text-purple-300"
                        }`}
                      >
                        {ps.code}
                      </span>

                      {/* Domain Badge */}
                      <span className="text-[10px] text-slate-300 px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 font-semibold flex items-center space-x-1">
                        <span>{ps.icon}</span>
                        <span>{ps.domain}</span>
                      </span>

                      {/* Hardware / Software Type Badge */}
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                          isOpen
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                            : isHardware
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                            : "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                        }`}
                      >
                        {isOpen
                          ? "💡 OPEN THEME"
                          : isHardware
                          ? "⚙️ HARDWARE KIT"
                          : "💻 SOFTWARE APP"}
                      </span>

                      {/* Flagship Star Badge if present */}
                      {ps.difficulty === "Flagship" && (
                        <span className="text-[9px] font-black px-2 py-0.5 rounded bg-amber-400/20 text-amber-200 border border-amber-400/50">
                          ⭐ FLAGSHIP
                        </span>
                      )}
                    </div>

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg border group-hover:scale-110 transition-transform shrink-0 ${
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

                  {/* Description (Problem) */}
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4 line-clamp-3">
                    <strong className="text-slate-200 font-mono text-xs block mb-0.5">
                      PROBLEM:
                    </strong>
                    {ps.description}
                  </p>

                  {/* Objective (Task / Challenge) */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                      {isHardware ? "⚙️ CHALLENGE / GOAL:" : "🎯 TASK:"}
                    </span>
                    <p className="text-xs text-slate-300 font-sans line-clamp-2">
                      {ps.objective}
                    </p>
                  </div>

                  {/* Tools / Suggested Components preview */}
                  {ps.recommendedTools && ps.recommendedTools.length > 0 && (
                    <div className="mb-4">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        {isHardware ? "SUGGESTED HARDWARE / SENSORS:" : "TOOLS / TECH:"}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ps.recommendedTools.slice(0, 4).map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-sans px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-slate-300"
                          >
                            {tool}
                          </span>
                        ))}
                        {ps.recommendedTools.length > 4 && (
                          <span className="text-[10px] font-sans px-1.5 py-0.5 rounded bg-white/[0.02] text-slate-500">
                            +{ps.recommendedTools.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Bottom Actions */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPS(ps);
                      setActiveCategory(currentCategory);
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer ${
                      isEmerald
                        ? "bg-emerald-600/30 hover:bg-emerald-600 border border-emerald-500/40 hover:border-emerald-400"
                        : "bg-purple-600/30 hover:bg-purple-600 border border-purple-500/40 hover:border-purple-400"
                    }`}
                  >
                    <span>VIEW FULL PROBLEM BRIEFING</span>
                    <span className="text-sm">👁</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Load More Button (Only when showing "All Themes") */}
        {hasMore && (
          <div className="text-center mt-10 sm:mt-12">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 16)}
              className="py-3.5 px-8 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-lg inline-flex items-center space-x-2"
            >
              <span>LOAD MORE PROBLEM STATEMENTS</span>
              <span className="text-purple-400 font-bold">
                ({filteredStatements.length - visibleCount} REMAINING)
              </span>
              <span>↓</span>
            </button>
          </div>
        )}
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
                    <span className="text-[10px] text-slate-300 px-2 py-0.5 rounded bg-white/5 border border-white/10 uppercase">
                      {selectedPS.icon} {selectedPS.domain}
                    </span>
                    {selectedPS.categoryType && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase">
                        {selectedPS.categoryType === "Hardware"
                          ? "⚙️ HARDWARE KIT"
                          : selectedPS.categoryType === "Software"
                          ? "💻 SOFTWARE APP"
                          : "💡 OPEN THEME"}
                      </span>
                    )}
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
                {/* Full Problem Briefing */}
                <div>
                  <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1.5">
                    // PROBLEM BRIEFING & REAL-WORLD CONTEXT
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/10">
                    {selectedPS.description}
                  </p>
                </div>

                {/* Target Objective / Task / Challenge */}
                <div>
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1.5">
                    🎯 TARGET OBJECTIVE & ACTIONABLE TASK
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/10">
                    {selectedPS.objective}
                  </p>
                </div>

                {/* Deliverables */}
                {selectedPS.deliverables && selectedPS.deliverables.length > 0 && (
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

                {/* Recommended Tools / Components */}
                {selectedPS.recommendedTools &&
                  selectedPS.recommendedTools.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                        🛠️ SUGGESTED HARDWARE SENSORS & SOFTWARE TOOLS
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

                {/* Key Event Parameters Callout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[10px] text-amber-400 font-bold block uppercase">
                      ⏱ DURATION
                    </span>
                    <span className="text-white font-bold">6 Hours Sprint</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[10px] text-purple-400 font-bold block uppercase">
                      👥 TEAM FORMAT
                    </span>
                    <span className="text-white font-bold text-[11px]">
                      4–5 Students + 1 Mentor (Optional)
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-amber-400/30 bg-amber-500/10">
                    <span className="text-[10px] text-amber-300 font-bold block uppercase">
                      🛠️ HARDWARE
                    </span>
                    <span className="text-amber-200 font-bold">
                      Provided on Campus
                    </span>
                  </div>
                </div>

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
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href="https://forms.gle/thqCVXNKctqwujBy9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-xl font-bold tracking-wider text-xs uppercase bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white transition-all text-center shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>REGISTER FOR THIS CHALLENGE</span>
                  <span>↗</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedPS(null)}
                  className="py-3 px-6 rounded-xl font-bold tracking-wider text-xs uppercase border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer text-center"
                >
                  CLOSE BRIEFING ✕
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
