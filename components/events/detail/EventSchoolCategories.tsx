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

interface ThemeMeta {
  num: number;
  id: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  description: string;
  accent: "blue" | "emerald" | "amber" | "cyan" | "rose" | "purple" | "yellow";
}

const THEMES_CONFIG: ThemeMeta[] = [
  {
    num: 1,
    id: "infrastructure",
    name: "Infrastructure",
    shortName: "Infrastructure",
    icon: "🏢",
    tagline: "Smart Campus Automation, Building Safety, Energy Optimization & Facility Management",
    description:
      "Addressing school and urban infrastructure challenges including classroom occupancy telemetry, water leakage detection, resource management, campus noise monitoring, and energy conservation.",
    accent: "blue",
  },
  {
    num: 2,
    id: "clean-green",
    name: "Clean & Green Technology",
    shortName: "Clean & Green",
    icon: "🌱",
    tagline: "Environmental Conservation, Waste Segregation, Recycling & Sustainability",
    description:
      "Developing automated waste sorting bins, carbon footprint calculators, smart composting telemetry, rainwater harvesting monitors, eco-travel platforms, and plastic reduction trackers.",
    accent: "emerald",
  },
  {
    num: 3,
    id: "smart-agriculture",
    name: "Smart Agriculture",
    shortName: "Agriculture",
    icon: "🌾",
    tagline: "Precision Irrigation, Soil Telemetry, Greenhouse Controls & Crop Protection",
    description:
      "Engineering precision irrigation systems, IoT farm weather stations, AI crop disease and pest detectors, automated greenhouse microcontrollers, and farmer decision-support platforms.",
    accent: "amber",
  },
  {
    num: 4,
    id: "travel-tourism",
    name: "Travel & Tourism",
    shortName: "Travel & Tourism",
    icon: "✈️",
    tagline: "Intelligent Route Planning, Crowd Prediction, Tourist Safety & Heritage Preservation",
    description:
      "Creating smart itinerary route optimizers, attraction crowd estimators, multilingual tourist assistants, emergency safety beacons, and cultural heritage conservation portals.",
    accent: "cyan",
  },
  {
    num: 5,
    id: "smart-healthcare",
    name: "Smart Healthcare",
    shortName: "Healthcare",
    icon: "🏥",
    tagline: "Preventive Health, Smart Medicine Reminders, Emergency Beacons & Clinic Telemetry",
    description:
      "Innovating digital hospital queue token systems, temperature-regulated medicine storage alarms, first-aid assistants, hand hygiene timers, and emergency response buttons.",
    accent: "rose",
  },
  {
    num: 6,
    id: "ai-cybersecurity",
    name: "AI & Cyber Security",
    shortName: "AI & Cyber",
    icon: "🤖",
    tagline: "Machine Learning Solutions, Online Threat Shields & Education AI Assistants",
    description:
      "Engineering AI phishing link detectors, fake news awareness tools, cyber safety gamified simulations, facial recognition attendance prototypes, and personalized study assistants.",
    accent: "purple",
  },
  {
    num: 7,
    id: "open-theme",
    name: "Open Theme",
    shortName: "Open Innovation",
    icon: "💡",
    tagline: "Student-Selected Real-World Challenges & Independent Innovations",
    description:
      "Empowering young innovators to identify an authentic problem in their local school, community, home, or environment and engineer their own creative software or hardware prototype.",
    accent: "yellow",
  },
];

export const EventSchoolCategories: React.FC<EventSchoolCategoriesProps> = ({
  title = "Next-Gen Hackathon Categories & Problem Statements",
  categories,
}) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedThemeNum, setSelectedThemeNum] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"by-theme" | "all-grouped">("by-theme");
  const [selectedType, setSelectedType] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPS, setSelectedPS] =
    useState<SchoolHackathonProblemStatement | null>(null);

  const currentGradeCategory = categories[activeCategoryIndex] || categories[0];
  const isEmerald = currentGradeCategory.accentColor === "emerald";

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

  // Compute theme counts for the active grade category
  const themeDataMap = useMemo(() => {
    const map: Record<number, SchoolHackathonProblemStatement[]> = {};
    THEMES_CONFIG.forEach((t) => {
      map[t.num] = [];
    });

    currentGradeCategory.problemStatements.forEach((ps) => {
      const tNum = ps.themeNumber || 1;
      if (!map[tNum]) map[tNum] = [];
      map[tNum].push(ps);
    });

    return map;
  }, [currentGradeCategory]);

  const activeThemeMeta =
    THEMES_CONFIG.find((t) => t.num === selectedThemeNum) || THEMES_CONFIG[0];

  // Filter statements for single theme view
  const currentThemeStatements = useMemo(() => {
    const list = themeDataMap[selectedThemeNum] || [];
    return list.filter((ps) => {
      if (selectedType !== "ALL" && ps.categoryType !== selectedType) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = ps.title.toLowerCase().includes(q);
        const inDesc = ps.description.toLowerCase().includes(q);
        const inCode = ps.code.toLowerCase().includes(q);
        const inObj = ps.objective.toLowerCase().includes(q);
        const inTools =
          ps.recommendedTools &&
          ps.recommendedTools.some((t) => t.toLowerCase().includes(q));
        return inTitle || inDesc || inCode || inObj || inTools;
      }
      return true;
    });
  }, [themeDataMap, selectedThemeNum, selectedType, searchQuery]);

  // Global search across all themes if search query is entered in all-grouped mode
  const filterStatementGlobal = (ps: SchoolHackathonProblemStatement) => {
    if (selectedType !== "ALL" && ps.categoryType !== selectedType) {
      return false;
    }
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      const inTitle = ps.title.toLowerCase().includes(q);
      const inDesc = ps.description.toLowerCase().includes(q);
      const inCode = ps.code.toLowerCase().includes(q);
      const inObj = ps.objective.toLowerCase().includes(q);
      const inTools =
        ps.recommendedTools &&
        ps.recommendedTools.some((t) => t.toLowerCase().includes(q));
      return inTitle || inDesc || inCode || inObj || inTools;
    }
    return true;
  };

  if (!categories || categories.length === 0) return null;

  return (
    <section
      id="school-problem-statements"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Cyber Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-purple-600/[0.08] rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[350px] bg-cyan-600/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto font-mono relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>OFFICIAL PROBLEM STATEMENTS ARENA</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            {title}
          </h2>

          <p className="text-xs sm:text-base text-slate-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Organized <strong className="text-purple-300 font-semibold">Category-Wise across 7 Real-World Themes</strong> for school innovators of{" "}
            <strong className="text-cyan-300 font-semibold">
              Class 9, 10, 11 & 12
            </strong>
            . Select your grade, choose your domain, and engineer your working prototype!
          </p>
        </div>

        {/* 1. Grade Tab Selector (Class 9 & 10 vs Class 11 & 12) */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md gap-1.5 sm:gap-2 shadow-2xl">
            {categories.map((cat, idx) => {
              const isActive = idx === activeCategoryIndex;
              const isCatEmerald = cat.accentColor === "emerald";

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategoryIndex(idx);
                    setSearchQuery("");
                    setSelectedType("ALL");
                  }}
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

        {/* 2. Grade Overview Banner */}
        <motion.div
          key={currentGradeCategory.id}
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
                  {currentGradeCategory.gradeBadge}
                </span>
                <span className="text-xs font-bold text-slate-300 tracking-wide">
                  ✓ {currentGradeCategory.eligibility}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wide">
                {currentGradeCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1.5 max-w-3xl leading-relaxed">
                {currentGradeCategory.description}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs font-bold font-mono text-slate-300 self-start md:self-auto">
              <div className="bg-black/60 px-3.5 py-2 rounded-xl border border-white/15 flex items-center space-x-2 shadow-inner">
                <span className="text-amber-400">⏱ SPRINT:</span>
                <span className="text-white">6 HOURS</span>
              </div>
              <div className="bg-black/60 px-3.5 py-2 rounded-xl border border-white/15 flex items-center space-x-2 shadow-inner">
                <span className="text-purple-400">👥 TEAM:</span>
                <span className="text-white">4–5 STUDENTS + 1 MENTOR (OPTIONAL)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Free University Hardware & Lab Equipment Callout */}
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
              All required <strong className="text-white font-semibold">microcontrollers (Arduino / ESP32), sensor modules (PIR, ultrasonic, LDR, temperature, soil moisture, gas, flame), relay boards, breadboards, jumper wires, and testing apparatus</strong> are provided on-campus by Shivalik University to empower students to build real physical working prototypes.
            </p>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 4. THEME / CATEGORY NAVIGATION BAR (7 THEMES)                       */}
        {/* =================================================================== */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest flex items-center space-x-2">
              <span className="text-purple-400 font-bold">SELECT CATEGORY / THEME:</span>
              <span className="text-xs text-slate-500">(7 Official Themes)</span>
            </span>

            {/* Layout Toggle: Single Theme Tab vs All Grouped */}
            <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/10 self-start md:self-auto text-xs">
              <button
                type="button"
                onClick={() => setViewMode("by-theme")}
                className={`px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5 ${
                  viewMode === "by-theme"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>📑 By Category</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("all-grouped")}
                className={`px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5 ${
                  viewMode === "all-grouped"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>📜 All 7 Themes Grouped</span>
              </button>
            </div>
          </div>

          {/* Theme Selector Tabs (7 Themes Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {THEMES_CONFIG.map((theme) => {
              const isActive = viewMode === "by-theme" && selectedThemeNum === theme.num;
              const count = themeDataMap[theme.num]?.length || 0;

              return (
                <button
                  key={theme.num}
                  onClick={() => {
                    setSelectedThemeNum(theme.num);
                    setViewMode("by-theme");
                  }}
                  className={`p-3 rounded-xl border text-left transition-all duration-300 relative group cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-gradient-to-b from-purple-600/30 to-purple-950/40 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)] text-white"
                      : "bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.05] text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5">
                    <span className="text-base sm:text-lg">{theme.icon}</span>
                    <span
                      className={`text-[9px] font-mono font-black px-1.5 py-0.2 rounded border ${
                        isActive
                          ? "bg-purple-400/25 border-purple-300 text-purple-200"
                          : "bg-white/5 border-white/10 text-slate-400"
                      }`}
                    >
                      {count} PS
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] text-slate-400 font-mono block uppercase">
                      CAT 0{theme.num}
                    </span>
                    <span className="text-xs font-bold leading-snug block truncate group-hover:text-white">
                      {theme.shortName}
                    </span>
                  </div>

                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-purple-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Sub-filter & Search Toolbar */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Real-time Search Box */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 text-xs">
              🔍
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search problem statements by keyword, sensor, Arduino, ESP32, Python..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Type Filter Buttons */}
          <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold hidden md:inline mr-1">
              FILTER:
            </span>
            {[
              { id: "ALL", label: "All" },
              { id: "Software", label: "💻 Software Tasks" },
              { id: "Hardware", label: "⚙️ Hardware / IoT" },
            ].map((t) => {
              const isActive = selectedType === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedType(t.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
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

        {/* =================================================================== */}
        {/* VIEW MODE A: SINGLE CATEGORY THEME VIEW (DEFAULT)                  */}
        {/* =================================================================== */}
        {viewMode === "by-theme" && (
          <div>
            {/* Active Theme Highlight Header Box */}
            <motion.div
              key={activeThemeMeta.num}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#0a0e22] to-slate-950 border border-purple-500/30 backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[90px] pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 uppercase tracking-widest">
                      CATEGORY 0{activeThemeMeta.num} OF 07
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      // {currentGradeCategory.gradeBadge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-wide flex items-center space-x-2">
                    <span>{activeThemeMeta.icon}</span>
                    <span>
                      {activeThemeMeta.num}. {activeThemeMeta.name}
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-purple-200 font-mono font-semibold mt-1">
                    "{activeThemeMeta.tagline}"
                  </p>

                  <p className="text-xs text-slate-300 font-sans mt-2 max-w-3xl leading-relaxed">
                    {activeThemeMeta.description}
                  </p>
                </div>

                <div className="shrink-0 p-3 rounded-xl bg-black/50 border border-white/10 text-center font-mono self-start sm:self-auto">
                  <div className="text-2xl font-black text-white">
                    {currentThemeStatements.length}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">
                    PROBLEM STATEMENTS
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Empty State for Search */}
            {currentThemeStatements.length === 0 && (
              <div className="p-10 text-center rounded-2xl bg-white/[0.02] border border-white/10 my-8">
                <span className="text-3xl mb-2 block">🔍</span>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                  No matching problem statements found in this category
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto mb-3 font-sans">
                  Try clearing your search query or reset the filter to view all problem statements in this theme.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedType("ALL");
                  }}
                  className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Reset Category Filter
                </button>
              </div>
            )}

            {/* Cards Grid for Current Theme */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10">
              {currentThemeStatements.map((ps, psIdx) => {
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
                    {/* Corner Accents */}
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

                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-3 gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
                              isEmerald
                                ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                                : "bg-purple-500/15 border-purple-500/40 text-purple-300"
                            }`}
                          >
                            {ps.code}
                          </span>

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
                              : "💻 SOFTWARE TASK"}
                          </span>

                          {ps.difficulty === "Flagship" && (
                            <span className="text-[9px] font-black px-2 py-0.5 rounded bg-amber-400/20 text-amber-200 border border-amber-400/50">
                              ⭐ FLAGSHIP
                            </span>
                          )}
                        </div>

                        <span className="text-xl shrink-0">{ps.icon}</span>
                      </div>

                      {/* Title */}
                      <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wide group-hover:text-slate-100 transition-colors mb-2.5 leading-snug">
                        {ps.title}
                      </h4>

                      {/* Problem Statement */}
                      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4 line-clamp-3">
                        <strong className="text-slate-200 font-mono text-xs block mb-0.5">
                          PROBLEM:
                        </strong>
                        {ps.description}
                      </p>

                      {/* Objective / Task / Challenge */}
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 mb-4">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                          {isHardware ? "⚙️ HARDWARE CHALLENGE:" : "🎯 TASK / GOAL:"}
                        </span>
                        <p className="text-xs text-slate-300 font-sans line-clamp-2">
                          {ps.objective}
                        </p>
                      </div>

                      {/* Suggested Tools Preview */}
                      {ps.recommendedTools && ps.recommendedTools.length > 0 && (
                        <div className="mb-4">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                            {isHardware
                              ? "SUGGESTED HARDWARE / SENSORS:"
                              : "POSSIBLE TECHNOLOGIES / TOOLS:"}
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
                              <span className="text-[10px] font-sans px-1.5 py-0.2 rounded bg-white/[0.02] text-slate-500">
                                +{ps.recommendedTools.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Button */}
                    <div className="pt-4 border-t border-white/[0.08]">
                      <button
                        type="button"
                        onClick={() => setSelectedPS(ps)}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer ${
                          isEmerald
                            ? "bg-emerald-600/30 hover:bg-emerald-600 border border-emerald-500/40 hover:border-emerald-400"
                            : "bg-purple-600/30 hover:bg-purple-600 border border-purple-500/40 hover:border-purple-400"
                        }`}
                      >
                        <span>VIEW FULL PROBLEM STATEMENT</span>
                        <span className="text-sm">👁</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Theme Stepper / Navigation */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <button
                type="button"
                disabled={selectedThemeNum === 1}
                onClick={() => {
                  setSelectedThemeNum((prev) => Math.max(1, prev - 1));
                  window.scrollTo({ top: (document.getElementById("school-problem-statements")?.offsetTop || 0) + 150, behavior: "smooth" });
                }}
                className={`py-2.5 px-4 sm:px-6 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2 ${
                  selectedThemeNum === 1
                    ? "opacity-30 cursor-not-allowed text-slate-500"
                    : "bg-white/5 hover:bg-white/15 text-white border border-white/15 cursor-pointer"
                }`}
              >
                <span>←</span>
                <span className="hidden sm:inline">PREVIOUS CATEGORY</span>
                <span className="sm:hidden">PREV</span>
              </button>

              <span className="text-xs font-mono text-slate-400">
                CATEGORY <strong className="text-white">0{selectedThemeNum}</strong> OF{" "}
                <strong className="text-white">07</strong>
              </span>

              <button
                type="button"
                disabled={selectedThemeNum === 7}
                onClick={() => {
                  setSelectedThemeNum((prev) => Math.min(7, prev + 1));
                  window.scrollTo({ top: (document.getElementById("school-problem-statements")?.offsetTop || 0) + 150, behavior: "smooth" });
                }}
                className={`py-2.5 px-4 sm:px-6 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2 ${
                  selectedThemeNum === 7
                    ? "opacity-30 cursor-not-allowed text-slate-500"
                    : "bg-purple-600 hover:bg-purple-500 text-white shadow-lg cursor-pointer"
                }`}
              >
                <span className="hidden sm:inline">NEXT CATEGORY</span>
                <span className="sm:hidden">NEXT</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW MODE B: ALL 7 THEMES GROUPED VERTICALLY                       */}
        {/* =================================================================== */}
        {viewMode === "all-grouped" && (
          <div className="space-y-12 sm:space-y-16">
            {THEMES_CONFIG.map((theme) => {
              const allStatementsInTheme = themeDataMap[theme.num] || [];
              const filteredInTheme = allStatementsInTheme.filter(filterStatementGlobal);

              if (filteredInTheme.length === 0 && searchQuery.trim() !== "") {
                return null;
              }

              return (
                <div
                  key={theme.num}
                  id={`theme-${theme.id}`}
                  className="p-6 sm:p-8 rounded-3xl bg-white/[0.015] border border-white/10 backdrop-blur-md relative"
                >
                  {/* Category Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
                    <div>
                      <div className="flex items-center space-x-2.5 mb-1.5">
                        <span className="text-[10px] font-mono font-black px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 uppercase tracking-widest">
                          CATEGORY 0{theme.num}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          // {currentGradeCategory.gradeBadge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide flex items-center space-x-2">
                        <span>{theme.icon}</span>
                        <span>
                          {theme.num}. {theme.name}
                        </span>
                      </h3>
                      <p className="text-xs text-purple-300 font-mono mt-0.5 font-semibold">
                        "{theme.tagline}"
                      </p>
                      <p className="text-xs text-slate-300 font-sans mt-1.5 max-w-3xl leading-relaxed">
                        {theme.description}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center space-x-2 self-start md:self-auto font-mono">
                      <span className="text-xs px-3 py-1.5 rounded-xl bg-black/50 border border-white/15 text-slate-200">
                        <strong>{filteredInTheme.length}</strong> Problem Statements
                      </span>
                    </div>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {filteredInTheme.map((ps) => {
                      const isHardware = ps.categoryType === "Hardware";
                      const isOpen = ps.categoryType === "Open";

                      return (
                        <div
                          key={ps.id}
                          className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1 ${
                            isEmerald
                              ? "bg-gradient-to-br from-emerald-950/20 via-[#070e14] to-[#03060a] border border-emerald-500/25 hover:border-emerald-400/80 shadow-[0_0_30px_rgba(16,185,129,0.06)] hover:shadow-[0_0_35px_rgba(16,185,129,0.2)]"
                              : "bg-gradient-to-br from-purple-950/20 via-[#0a0818] to-[#04030d] border border-purple-500/25 hover:border-purple-400/80 shadow-[0_0_30px_rgba(168,85,247,0.06)] hover:shadow-[0_0_35px_rgba(168,85,247,0.2)]"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3 gap-2">
                              <div className="flex flex-wrap items-center gap-1.5">
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
                                    isEmerald
                                      ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                                      : "bg-purple-500/15 border-purple-500/40 text-purple-300"
                                  }`}
                                >
                                  {ps.code}
                                </span>

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
                                    : "💻 SOFTWARE TASK"}
                                </span>

                                {ps.difficulty === "Flagship" && (
                                  <span className="text-[9px] font-black px-2 py-0.5 rounded bg-amber-400/20 text-amber-200 border border-amber-400/50">
                                    ⭐ FLAGSHIP
                                  </span>
                                )}
                              </div>

                              <span className="text-xl">{ps.icon}</span>
                            </div>

                            <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wide group-hover:text-slate-100 transition-colors mb-2.5 leading-snug">
                              {ps.title}
                            </h4>

                            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4 line-clamp-3">
                              <strong className="text-slate-200 font-mono text-xs block mb-0.5">
                                PROBLEM:
                              </strong>
                              {ps.description}
                            </p>

                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 mb-4">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                                {isHardware ? "⚙️ HARDWARE CHALLENGE:" : "🎯 TASK / GOAL:"}
                              </span>
                              <p className="text-xs text-slate-300 font-sans line-clamp-2">
                                {ps.objective}
                              </p>
                            </div>

                            {ps.recommendedTools && ps.recommendedTools.length > 0 && (
                              <div className="mb-4">
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                                  {isHardware
                                    ? "SUGGESTED HARDWARE / SENSORS:"
                                    : "POSSIBLE TECHNOLOGIES / TOOLS:"}
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
                                    <span className="text-[10px] font-sans px-1.5 py-0.2 rounded bg-white/[0.02] text-slate-500">
                                      +{ps.recommendedTools.length - 4} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="pt-4 border-t border-white/[0.08]">
                            <button
                              type="button"
                              onClick={() => setSelectedPS(ps)}
                              className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer ${
                                isEmerald
                                  ? "bg-emerald-600/30 hover:bg-emerald-600 border border-emerald-500/40 hover:border-emerald-400"
                                  : "bg-purple-600/30 hover:bg-purple-600 border border-purple-500/40 hover:border-purple-400"
                              }`}
                            >
                              <span>VIEW FULL PROBLEM STATEMENT</span>
                              <span className="text-sm">👁</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* DETAIL MODAL DIALOG (On Clicking Any Problem Statement Card)         */}
      {/* =================================================================== */}
      <AnimatePresence>
        {selectedPS && (
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
                      {currentGradeCategory.gradeBadge}
                    </span>
                    <span className="text-[10px] text-slate-300 px-2 py-0.5 rounded bg-white/5 border border-white/10 uppercase">
                      {selectedPS.icon} {selectedPS.domain}
                    </span>
                    {selectedPS.categoryType && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase">
                        {selectedPS.categoryType === "Hardware"
                          ? "⚙️ HARDWARE KIT"
                          : selectedPS.categoryType === "Software"
                          ? "💻 SOFTWARE TASK"
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
                    // PROBLEM STATEMENT & CONTEXT
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
                      ⏱ SPRINT DURATION
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
                    ⚖️ JURY EVALUATION CRITERIA
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
