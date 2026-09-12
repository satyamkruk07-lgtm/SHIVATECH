"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Compass,
  Copy,
  Check,
  Building,
  GraduationCap,
  Users,
  Navigation,
  ExternalLink,
} from "lucide-react";
import Footer from "@/components/Footer";

interface ContactMember {
  name: string;
  role: string;
  category: "faculty" | "student";
  badge: string;
  badgeColor: "purple" | "crimson" | "sky" | "amber";
  image: string;
  email: string;
  phone: string;
}

const contactMembers: ContactMember[] = [
  {
    name: "Mrs. Shivali Pundir",
    role: "Faculty Coordinator",
    category: "faculty",
    badge: "FACULTY COORDINATOR",
    badgeColor: "purple",
    image: "/team/shivali.jpeg",
    email: "shivali.pundir@shivalikcollege.edu.in",
    phone: "+91 94105 52820",
  },
  {
    name: "Rifat Parvez",
    role: "Chairperson",
    category: "student",
    badge: "CHAIRPERSON",
    badgeColor: "crimson",
    image: "/team/rifat.jpeg",
    email: "rifat.parvez@shivalikcollege.edu.in",
    phone: "+91 79038 96570",
  },
  {
    name: "Shivam Kumar",
    role: "Vice Chairperson",
    category: "student",
    badge: "VICE CHAIRPERSON",
    badgeColor: "sky",
    image: "/team/shivam.jpeg",
    email: "shivam.kumar@shivalikcollege.edu.in",
    phone: "+91 91428 14068",
  },
  {
    name: "Kumar Satyam",
    role: "Graphic Head ACM",
    category: "student",
    badge: "GRAPHIC HEAD ACM",
    badgeColor: "amber",
    image: "/team/kumar-satyam.jpeg",
    email: "satyamkruk07@gmail.com",
    phone: "+91 93043 14751",
  },
];

export default function ContactScene() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <main className="relative w-full min-h-screen bg-[#02040a] text-white overflow-x-hidden selection:bg-red-600 selection:text-white pt-24 sm:pt-28 pb-0">
      {/* Ambient Neon Atmosphere Glows */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-red-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[550px] h-[550px] bg-sky-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-40 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Cyber Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8 font-mono"
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors group px-3.5 py-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02]"
          >
            <span className="text-red-400 group-hover:-translate-x-1 transition-transform">←</span>
            <span>BACK TO HOME</span>
          </Link>
        </motion.div>

        {/* Page Hero Header */}
        <div className="text-center sm:text-left mb-12 sm:mb-16 font-mono">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-red-500/30 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-red-400 uppercase">
              SHIVATECH 2026 // OFFICIAL HELPDESK & COMMUNICATIONS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-tight drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]">
            CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-sky-400">US</span>
          </h1>

          <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-slate-300 uppercase mt-2 mb-3">
            DIRECT COORDINATION CELL & CAMPUS VENUE DETAILS
          </p>

          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl leading-relaxed">
            Reach out directly to the <strong className="text-white">Faculty Coordinator</strong> and <strong className="text-white">Student Leadership Committee</strong> for event inquiries, registrations, team support, and campus accommodation.
          </p>
        </div>

        {/* =================================================================== */}
        {/* SECTION 1: CONTACT DETAILS (4 MEMBERS: 1 FACULTY + 3 STUDENTS)       */}
        {/* =================================================================== */}
        <section className="mb-16 sm:mb-20 font-mono">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.25)]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold text-red-400 uppercase tracking-[0.25em] block">
                SECTION 01 // DIRECT LINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-white uppercase">
                COORDINATOR CONTACT DETAILS
              </h2>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMembers.map((member, idx) => {
              const emailKey = `email-${idx}`;
              const phoneKey = `phone-${idx}`;

              const badgeStyles =
                member.badgeColor === "purple"
                  ? "bg-purple-500/15 border-purple-500/40 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                  : member.badgeColor === "crimson"
                  ? "bg-red-500/15 border-red-500/40 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.25)]"
                  : member.badgeColor === "sky"
                  ? "bg-sky-500/15 border-sky-500/40 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                  : "bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.25)]";

              const borderHover =
                member.badgeColor === "purple"
                  ? "hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]"
                  : member.badgeColor === "crimson"
                  ? "hover:border-red-500/60 hover:shadow-[0_0_35px_rgba(239,68,68,0.25)]"
                  : member.badgeColor === "sky"
                  ? "hover:border-sky-500/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]"
                  : "hover:border-amber-500/60 hover:shadow-[0_0_35px_rgba(251,191,36,0.25)]";

              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`p-6 rounded-3xl bg-[#040814]/85 border border-white/15 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${borderHover}`}
                >
                  {/* Top Subtle Tech Accents */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-bl-full pointer-events-none" />

                  <div>
                    {/* Member Photo & Category Tag */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors shadow-lg shrink-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="96px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <span
                        className={`text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border text-center ${badgeStyles}`}
                      >
                        {member.category === "faculty" ? "🎓 FACULTY" : "⚡ STUDENT"}
                      </span>
                    </div>

                    {/* Designation Badge */}
                    <div className="mb-2">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                        {member.role}
                      </span>
                    </div>

                    {/* Member Name */}
                    <h3 className="text-lg sm:text-xl font-black font-mono tracking-wide text-white uppercase group-hover:text-red-400 transition-colors mb-5 leading-snug">
                      {member.name}
                    </h3>

                    {/* Divider */}
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/20 to-transparent mb-5" />

                    {/* Contact Details List */}
                    <div className="space-y-3.5 text-xs font-mono">
                      {/* Email Address */}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
                        <div className="flex items-center justify-between text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                          <span className="flex items-center space-x-1.5">
                            <Mail className="w-3 h-3 text-red-400" />
                            <span>EMAIL ID</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy(member.email, emailKey)}
                            className="text-[9px] hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
                            title="Copy email address"
                          >
                            {copiedKey === emailKey ? (
                              <span className="text-emerald-400 font-bold flex items-center">
                                <Check className="w-2.5 h-2.5 mr-0.5" /> COPIED
                              </span>
                            ) : (
                              <span className="text-slate-400 hover:text-white flex items-center">
                                <Copy className="w-2.5 h-2.5 mr-0.5" /> COPY
                              </span>
                            )}
                          </button>
                        </div>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-slate-200 hover:text-white font-semibold break-all transition-colors underline-offset-2 hover:underline"
                        >
                          {member.email}
                        </a>
                      </div>

                      {/* Contact Number */}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
                        <div className="flex items-center justify-between text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                          <span className="flex items-center space-x-1.5">
                            <Phone className="w-3 h-3 text-sky-400" />
                            <span>PHONE / WHATSAPP</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy(member.phone, phoneKey)}
                            className="text-[9px] hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
                            title="Copy phone number"
                          >
                            {copiedKey === phoneKey ? (
                              <span className="text-emerald-400 font-bold flex items-center">
                                <Check className="w-2.5 h-2.5 mr-0.5" /> COPIED
                              </span>
                            ) : (
                              <span className="text-slate-400 hover:text-white flex items-center">
                                <Copy className="w-2.5 h-2.5 mr-0.5" /> COPY
                              </span>
                            )}
                          </button>
                        </div>
                        <a
                          href={`tel:${member.phone.replace(/\s+/g, "")}`}
                          className="text-slate-200 hover:text-emerald-400 font-bold tracking-wider transition-colors"
                        >
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Direct Action Buttons */}
                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-2 font-mono">
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, "")}`}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-[11px] font-bold text-white uppercase tracking-wider text-center transition-all flex items-center justify-center space-x-1.5"
                    >
                      <Phone className="w-3 h-3 text-sky-400" />
                      <span>CALL</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-[11px] font-bold text-white uppercase tracking-wider text-center transition-all flex items-center justify-center space-x-1.5"
                    >
                      <Mail className="w-3 h-3 text-red-400" />
                      <span>EMAIL</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* =================================================================== */}
        {/* SECTION 2: LOCATION & TRANSIT SECTION (AS DESIGNED)                 */}
        {/* =================================================================== */}
        <section className="mb-20 font-mono">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.25)]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold text-amber-400 uppercase tracking-[0.25em] block">
                SECTION 02 // GEO-NAVIGATION & TRANSIT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-white uppercase">
                CAMPUS LOCATION & DIRECTIONS
              </h2>
            </div>
          </div>

          {/* Location Master Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#040814]/85 border border-white/15 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Corner Tech Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500 pointer-events-none" />

            {/* Left 7 Cols: Address & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[10px] font-bold uppercase tracking-widest mb-3">
                  <Building className="w-3.5 h-3.5" />
                  <span>HOST INSTITUTION VENUE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mb-2">
                  SHIVALIK UNIVERSITY, DEHRADUN
                </h3>

                <div className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                  SHIVALIK COLLEGE OF ENGINEERING // SHIVALIK HILLS
                </div>

                <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed max-w-xl">
                  Shimla Bypass Road, Shivalik Hills, P.O. Sherpur, Dehradun, Uttarakhand – 248197, India.
                </p>
              </div>

              {/* Transit Distance Highlights */}
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] block mb-3">
                  // TRANSIT DISTANCES TO CAMPUS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                    <span className="text-[10px] text-slate-400 uppercase mb-1">RAILWAY STATION</span>
                    <span className="text-sm font-bold text-white">Dehradun (DDN)</span>
                    <span className="text-xs font-bold text-amber-400 mt-1">~18 KM</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                    <span className="text-[10px] text-slate-400 uppercase mb-1">BUS TERMINAL</span>
                    <span className="text-sm font-bold text-white">ISBT Dehradun</span>
                    <span className="text-xs font-bold text-amber-400 mt-1">~14 KM</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                    <span className="text-[10px] text-slate-400 uppercase mb-1">AIRPORT</span>
                    <span className="text-sm font-bold text-white">Jolly Grant (DED)</span>
                    <span className="text-xs font-bold text-amber-400 mt-1">~45 KM</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Shivalik+College+of+Engineering+Dehradun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-8 rounded-xl font-bold tracking-widest text-xs uppercase text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:brightness-110 shadow-[0_0_25px_rgba(251,191,36,0.35)] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>OPEN IN GOOGLE MAPS</span>
                  <Compass className="w-4 h-4" />
                </a>

                <a
                  href="https://maps.google.com/maps/dir//Shivalik+College+of+Engineering+Dehradun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-semibold tracking-wider text-xs uppercase text-slate-300 hover:text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>GET DRIVING DIRECTIONS</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right 5 Cols: Event Venue Map & Campus Buildings */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 rounded-2xl p-5 sm:p-6 bg-white/[0.02] border border-white/10">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] block mb-3">
                  // KEY EVENT VENUES ON CAMPUS
                </span>

                <div className="space-y-2.5 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-start space-x-3">
                    <span className="text-red-400 font-bold">01</span>
                    <div>
                      <span className="text-white font-bold block">C-Block Computing Center</span>
                      <span className="text-[11px] text-slate-400">Hacknation 2.0 & Next-Gen Hackathon 1.0</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-start space-x-3">
                    <span className="text-sky-400 font-bold">02</span>
                    <div>
                      <span className="text-white font-bold block">Conference Room CBII</span>
                      <span className="text-[11px] text-slate-400">Ideathon & Startup Pitching Sessions</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-start space-x-3">
                    <span className="text-emerald-400 font-bold">03</span>
                    <div>
                      <span className="text-white font-bold block">Respective Academic Departments</span>
                      <span className="text-[11px] text-slate-400">Departmental Technical Events & Labs</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-start space-x-3">
                    <span className="text-purple-400 font-bold">04</span>
                    <div>
                      <span className="text-white font-bold block">Grand Auditorium & Open Air Theatre</span>
                      <span className="text-[11px] text-slate-400">Keynote Inauguration & Awards Gala</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-slate-400 text-xs font-mono">
                <span>CAMPUS GATES OPEN</span>
                <span className="text-emerald-400 font-bold">08:00 AM DAILY</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Global Festival Footer */}
      <Footer />
    </main>
  );
}
