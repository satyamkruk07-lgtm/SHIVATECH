"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { eventsList, getEventBySlug } from "@/data/events";

function RegisterContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const eventParam = searchParams.get("event") || "hacknation-2-0";
  const competitionParam = searchParams.get("competition");
  const deptParam = searchParams.get("dept");
  const trackParam = searchParams.get("track");
  const categoryParam = searchParams.get("category");
  const psParam = searchParams.get("ps");

  const event = getEventBySlug(eventParam) || eventsList[0];
  const isHackathon = event.slug === "hacknation-2-0";

  return (
    <div className="min-h-screen bg-[#02040a] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Neon Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Registration Card */}
      <div className="w-full max-w-xl bg-[#040814]/85 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-10 shadow-[0_0_80px_rgba(239,68,68,0.2)] relative z-10 font-mono">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="text-xs font-mono text-red-500 tracking-[0.3em] uppercase block mb-1">
              REGISTRATION PORTAL • {event.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wider text-white uppercase">
              {event.name}
            </h1>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-xs font-mono px-3 py-1 rounded border border-blue-500/30 bg-blue-950/40 text-blue-300">
              EVENT {event.number} / 04
            </span>
            {event.date && (
              <span className="text-[11px] font-mono font-bold text-red-400 tracking-wider">
                {event.date}
              </span>
            )}
          </div>
        </div>

        {/* If user clicked a specific department competition */}
        {competitionParam && (
          <div className="p-3.5 mb-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start space-x-3">
            <span className="text-emerald-400 font-bold">✓</span>
            <div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest block">
                SELECTED COMPETITION
              </span>
              <span className="text-sm font-bold text-white">
                {competitionParam}
              </span>
              {deptParam && (
                <span className="text-xs text-slate-400 block mt-0.5">
                  Stream: {deptParam}
                </span>
              )}
            </div>
          </div>
        )}

        {/* If user clicked a specific School Hackathon Problem Statement */}
        {psParam && (
          <div className="p-3.5 mb-5 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-start space-x-3">
            <span className="text-purple-400 font-bold">⚡</span>
            <div>
              <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest block">
                SELECTED SCHOOL PROBLEM STATEMENT
              </span>
              <span className="text-sm font-bold text-white">
                {psParam}
              </span>
              {categoryParam && (
                <span className="text-xs text-purple-300 block mt-0.5 font-bold">
                  Track: {categoryParam}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Hacknation 2.0 Official Google Form Direct Link Box */}
        {isHackathon && (
          <div className="p-4 mb-6 rounded-xl bg-red-950/30 border border-red-500/40">
            <span className="text-[10px] text-red-400 font-bold uppercase tracking-widest block mb-1">
              OFFICIAL HACKATHON REGISTRATION FORM
            </span>
            <p className="text-xs text-slate-300 font-sans mb-3 leading-relaxed">
              HACKNATION 2.0 registrations (30 Hours, 4–6 Members, Up to ₹2 Lakhs in prizes) are being officially recorded via Google Forms.
            </p>
            <a
              href="https://forms.gle/CvYpny3YC5dpdYby7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all cursor-pointer"
            >
              <span>OPEN GOOGLE FORM</span>
              <span>↗</span>
            </a>
          </div>
        )}

        {/* Next-Gen Hackathon 1.0 Official Google Form Direct Link Box */}
        {(event.slug === "next-gen-hackathon" || event.slug === "science-championship") && (
          <div className="p-4 mb-6 rounded-xl bg-purple-950/40 border border-purple-500/40">
            <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest block mb-1">
              OFFICIAL NEXT-GEN HACKATHON 1.0 REGISTRATION FORM
            </span>
            <p className="text-xs text-slate-300 font-sans mb-3 leading-relaxed">
              NEXT-GEN HACKATHON 1.0 registrations for Class 9, 10, 11 & 12 students are being officially recorded via Google Forms.
            </p>
            <a
              href="https://forms.gle/thqCVXNKctqwujBy9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all cursor-pointer"
            >
              <span>OPEN GOOGLE FORM (NEXT-GEN 1.0)</span>
              <span>↗</span>
            </a>
          </div>
        )}

        {/* Ideathon Official Google Form Direct Link Box */}
        {event.slug === "ideathon" && (
          <div className="p-4 mb-6 rounded-xl bg-blue-950/40 border border-blue-500/40">
            <span className="text-[10px] text-sky-400 font-bold uppercase tracking-widest block mb-1">
              OFFICIAL IDEATHON REGISTRATION FORM
            </span>
            <p className="text-xs text-slate-300 font-sans mb-3 leading-relaxed">
              IDEATHON registrations (2–4 Members, ₹30,000+ in prizes, CBII Incubation pipeline) are being officially recorded via Google Forms.
            </p>
            <a
              href="https://forms.gle/6e6y7YaP2FWrfrwW7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all cursor-pointer"
            >
              <span>OPEN GOOGLE FORM (IDEATHON)</span>
              <span>↗</span>
            </a>
          </div>
        )}

        {/* Quantum Drift Official Google Form Direct Link Box */}
        {(event.slug === "quantum-drift" || event.id === "quantum-drift") && (
          <div className="p-4 mb-6 rounded-xl bg-red-950/40 border border-red-500/40">
            <span className="text-[10px] text-red-400 font-bold uppercase tracking-widest block mb-1">
              OFFICIAL QUANTUM DRIFT REGISTRATION FORM
            </span>
            <p className="text-xs text-slate-300 font-sans mb-3 leading-relaxed">
              QUANTUM DRIFT registrations (Robo Soccer, Robo War, Robo Race) are being officially recorded via Google Forms.
            </p>
            <a
              href="https://forms.gle/KJXV1eGUcrtLhJy56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all cursor-pointer"
            >
              <span>OPEN GOOGLE FORM (QUANTUM DRIFT)</span>
              <span>↗</span>
            </a>
          </div>
        )}

        {/* If Registration is Opening Soon (Event 3: Departmental Technical Events) */}
        {!event.isRegistrationOpen ? (
          <div className="py-8 px-2 flex flex-col items-center text-center">
            {/* Pulsing Holographic Lock Beacon */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-amber-500/15 border-2 border-amber-400/50 flex items-center justify-center text-amber-300 shadow-[0_0_35px_rgba(245,158,11,0.35)]">
                <svg className="w-9 h-9 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-400 animate-ping opacity-80" />
            </div>

            {/* Status Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold tracking-[0.25em] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>OFFICIAL REGISTRATION STATUS</span>
            </div>

            {/* Prominent Text */}
            <h2 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white uppercase mb-3 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
              REGISTRATION IS OPENING SOON
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-md mx-auto leading-relaxed mb-8">
              Registration links for <strong className="text-white">{event.name}</strong> are currently not connected. No registrations are being accepted at this time. The official registration portal will open soon.
            </p>

            {/* Navigation Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href={`/events/${event.slug}`}
                className="w-full sm:w-auto py-3.5 px-8 rounded-xl font-bold tracking-widest text-xs uppercase bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all text-center"
              >
                ← BACK TO EVENT DETAILS
              </Link>
              <Link
                href="/events"
                className="w-full sm:w-auto py-3.5 px-8 rounded-xl font-bold tracking-widest text-xs uppercase bg-gradient-to-r from-red-600 to-sky-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:brightness-110 transition-all text-center"
              >
                EXPLORE ALL EVENTS →
              </Link>
            </div>
          </div>
        ) : (
          <>
            <p className="text-sm text-white/70 leading-relaxed mb-6 font-sans">
              {event.description}
            </p>

            {/* Registration Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Registration submitted for ${event.name}!`);
                router.push(`/events/${event.slug}`);
              }}
              className="space-y-4 font-mono text-sm"
            >
              <div>
                <label className="block text-xs text-white/50 tracking-wider mb-1 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="ENTER YOUR NAME"
                  className="w-full px-4 py-3 rounded bg-white/5 border border-white/15 text-white placeholder-white/20 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-white/50 tracking-wider mb-1 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full px-4 py-3 rounded bg-white/5 border border-white/15 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-white/50 tracking-wider mb-1 uppercase">
                  College / Institution
                </label>
                <input
                  type="text"
                  required
                  placeholder="ENTER COLLEGE NAME"
                  className="w-full px-4 py-3 rounded bg-white/5 border border-white/15 text-white placeholder-white/20 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {event.slug === "science-championship" && (
                <div>
                  <label className="block text-xs text-purple-300/80 tracking-wider mb-1 uppercase font-semibold">
                    Select Competition Track
                  </label>
                  <select
                    key={trackParam || "all"}
                    defaultValue={trackParam || "all"}
                    className="w-full px-4 py-3 rounded bg-[#070c1a] border border-purple-500/40 text-purple-200 focus:outline-none focus:border-purple-400 transition-colors"
                  >
                    <option value="all" className="bg-[#070c1a] text-white">All Events / Full Championship</option>
                    <option value="hackathon" className="bg-[#070c1a] text-white">1. 2-Hour Innovation Challenge (Hackathon)</option>
                    <option value="exhibition" className="bg-[#070c1a] text-white">2. Science Exhibition</option>
                    <option value="pitching" className="bg-[#070c1a] text-white">3. Idea Pitching (Mini Shark Tank)</option>
                    <option value="robotics" className="bg-[#070c1a] text-white">4. 60-Minute Build Up (Robotics Challenge, etc.)</option>
                  </select>
                </div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg text-white font-bold text-xs sm:text-sm tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:brightness-110 transition-all text-center cursor-pointer"
                >
                  CONFIRM REGISTRATION
                </button>
                <Link
                  href={`/events/${event.slug}`}
                  className="px-6 py-3.5 border border-white/20 rounded-lg text-white/70 hover:text-white hover:bg-white/10 font-bold text-xs sm:text-sm tracking-widest transition-colors text-center"
                >
                  BACK TO EVENT
                </Link>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#02040a] relative">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white font-mono">Loading...</div>}>
        <RegisterContent />
      </Suspense>
    </main>
  );
}
