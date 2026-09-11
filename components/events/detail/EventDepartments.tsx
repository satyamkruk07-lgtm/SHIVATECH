"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DepartmentGroup } from "@/data/events";

interface EventDepartmentsProps {
  departments: DepartmentGroup[];
}

export const EventDepartments: React.FC<EventDepartmentsProps> = ({ departments }) => {
  const [selectedDeptIndex, setSelectedDeptIndex] = useState<number>(0);

  const activeDept = departments[selectedDeptIndex] || departments[0];

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#02040a] border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-emerald-400 uppercase font-bold block mb-1.5">
            // DEPARTMENT-WISE COMPETITION DIRECTORY
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-mono tracking-tight text-white uppercase mb-3">
            SPECIALIZED TECHNICAL COMPETITIONS
          </h2>
          <p className="text-xs sm:text-sm font-mono text-slate-400">
            Each academic department organises dedicated competitions to ensure broad, multidisciplinary participation across engineering and management domains.
          </p>
        </div>

        {/* Department Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 font-mono">
          {departments.map((dept, idx) => {
            const isSelected = selectedDeptIndex === idx;

            return (
              <button
                key={dept.department}
                type="button"
                onClick={() => setSelectedDeptIndex(idx)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2 border ${
                  isSelected
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    : "bg-white/[0.03] text-slate-400 border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <span>{dept.icon}</span>
                <span>{dept.department}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10">
                  {dept.events.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Department Showcase Card */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-emerald-950/20 via-[#050a14] to-[#02040a] border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.08)] font-mono">
          {/* Active Dept Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
            <div className="flex items-center space-x-3">
              <span className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-2xl">
                {activeDept.icon}
              </span>
              <div>
                <span className="text-[10px] text-emerald-400 tracking-widest uppercase font-bold block">
                  DEPARTMENT STREAM // {activeDept.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase">
                  {activeDept.department}
                </h3>
              </div>
            </div>

            <span className="text-xs text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg self-start sm:self-auto">
              Total Events: {activeDept.events.length} Competitions
            </span>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeDept.events.map((eventName, idx) => {
              const eventNum = (idx + 1).toString().padStart(2, "0");

              return (
                <motion.div
                  key={eventName}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-emerald-500/40 transition-all flex items-center space-x-3 group"
                >
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[10px] font-bold text-emerald-400 shrink-0">
                    {eventNum}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors leading-snug">
                    {eventName}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDepartments;
