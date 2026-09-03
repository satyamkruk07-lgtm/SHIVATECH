"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { eventsSequenceData } from "@/data/events";

function RegisterContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const eventId = searchParams.get("event") || "hacknation-2";

  const event =
    eventsSequenceData.find((e) => e.id === eventId) || eventsSequenceData[0];

  return (
    <div className="min-h-screen bg-[#02040a] text-white pt-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Neon Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Registration Card */}
      <div className="w-full max-w-xl bg-[#040814]/85 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-10 shadow-[0_0_80px_rgba(239,68,68,0.2)] relative z-10">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="text-xs font-mono text-red-500 tracking-[0.3em] uppercase block mb-1">
              REGISTRATION PORTAL • {event.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wider text-white">
              {event.title}
            </h1>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded border border-blue-500/30 bg-blue-950/40 text-blue-300">
            EVENT 0{event.index} / 04
          </span>
        </div>

        <p className="text-sm text-white/70 leading-relaxed mb-6 font-sans">
          {event.description}
        </p>

        {/* Mock Registration Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Registration submitted for ${event.title}!`);
            router.push("/events");
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

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg text-white font-bold text-xs sm:text-sm tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:brightness-110 transition-all text-center"
            >
              CONFIRM REGISTRATION
            </button>
            <Link
              href="/events"
              className="px-6 py-3.5 border border-white/20 rounded-lg text-white/70 hover:text-white hover:bg-white/10 font-bold text-xs sm:text-sm tracking-widest transition-colors text-center"
            >
              BACK TO EVENTS
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
