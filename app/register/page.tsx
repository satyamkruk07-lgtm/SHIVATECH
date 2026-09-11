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
                defaultValue="all"
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
