"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Building,
  Users,
  Compass,
  ArrowRight,
  ExternalLink,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactScene() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    category: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleCopyEmail = (emailText: string) => {
    navigator.clipboard.writeText(emailText);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main className="relative w-full min-h-screen bg-[#02040a] text-white overflow-x-hidden selection:bg-red-600 selection:text-white pt-24 sm:pt-28 pb-0">
      {/* Background Cybernetic Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid Lines */}
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
            CONNECT WITH THE ORGANIZING CELL & CAMPUS LEADERSHIP
          </p>

          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl leading-relaxed">
            Have questions regarding <strong className="text-white">Hacknation 2.0</strong>, <strong className="text-white">Next-Gen Hackathon 1.0</strong>, Ideathon pitching, event registrations, or campus accommodation? Our organizing committee and student coordinators are ready to assist you.
          </p>
        </div>

        {/* Primary Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-20 font-mono">
          {/* =============================================================== */}
          {/* LEFT: INTERACTIVE CONTACT FORM & QUICK CARDS (7 Cols)          */}
          {/* =============================================================== */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Contact Form Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#040814]/85 border border-white/15 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500 pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400 pointer-events-none" />

              <div className="flex items-center space-x-2.5 mb-2">
                <MessageSquare className="w-5 h-5 text-red-400" />
                <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider">
                  SEND AN OFFICIAL INQUIRY
                </h2>
              </div>
              <p className="text-xs text-slate-400 font-sans mb-6">
                Fill out the transmission form below. Our communications team will respond within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center justify-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-wider">
                    TRANSMISSION RECEIVED!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-md leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your query has been dispatched to the SHIVATECH 2026 organizing team. We will contact you at <strong className="text-emerald-300">{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        institution: "",
                        category: "general",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/15 transition-all cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                        CONTACT / WHATSAPP NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans"
                      />
                    </div>

                    {/* Institution */}
                    <div>
                      <label className="block text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                        COLLEGE / SCHOOL NAME
                      </label>
                      <input
                        type="text"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="e.g. Shivalik University / Doon School"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Query Category */}
                  <div>
                    <label className="block text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                      INQUIRY TOPIC / EVENT CATEGORY *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080d1e] border border-white/15 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans cursor-pointer"
                    >
                      <option value="hacknation">HACKNATION 2.0 (30-Hour Flagship Hackathon)</option>
                      <option value="next-gen">NEXT-GEN HACKATHON 1.0 (Class 9–12 School Hackathon)</option>
                      <option value="ideathon">IDEATHON & CBII Incubation</option>
                      <option value="departmental">Departmental Technical Events</option>
                      <option value="accommodation">Accommodation & Campus Logistics</option>
                      <option value="sponsorship">Sponsorship & Brand Collaboration</option>
                      <option value="general">General Queries & Support</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                      YOUR MESSAGE / QUERY *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Explain your inquiry, team requirement, or assistance needed..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold tracking-widest text-xs uppercase text-white bg-gradient-to-r from-red-600 via-red-500 to-sky-600 hover:brightness-110 shadow-[0_0_30px_rgba(239,68,68,0.35)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING MESSAGE...</span>
                    ) : (
                      <>
                        <span>TRANSMIT INQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-red-400 mb-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">OFFICIAL EMAIL</span>
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-white break-all">
                    shivatech@shivalikcollege.edu.in
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    acm@shivalikcollege.edu.in
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyEmail("shivatech@shivalikcollege.edu.in")}
                  className="mt-4 py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] font-bold text-slate-300 hover:text-white border border-white/10 transition-colors self-start cursor-pointer"
                >
                  {copiedEmail ? "COPIED TO CLIPBOARD ✓" : "COPY EMAIL ADDRESS"}
                </button>
              </div>

              {/* Venue Card */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-sky-400 mb-2">
                    <Building className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">ORGANIZING BODY</span>
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-white">
                    Shivalik University ACM Student Chapter
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Centre for Business Incubation & Innovation (CBII)
                  </div>
                </div>
                <a
                  href="https://acmshivalik.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] font-bold text-sky-400 hover:text-sky-300 border border-white/10 transition-colors self-start flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>VISIT CHAPTER PORTAL</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* =============================================================== */}
          {/* RIGHT: CAMPUS HUB, DIRECTIONS & COORDINATOR DIRECTORY (5 Cols)  */}
          {/* =============================================================== */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Campus Venue & Geo-Navigation */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#040814]/85 border border-white/15 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="flex items-center space-x-2 text-amber-400 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">CAMPUS LOCATION</span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-2">
                SHIVALIK UNIVERSITY, DEHRADUN
              </h3>

              <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                Shimla Bypass Road, Shivalik Hills, P.O. Sherpur, Dehradun, Uttarakhand – 248197, India.
              </p>

              {/* Transit Distance Badges */}
              <div className="space-y-2 mb-6 font-sans text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">🚆 Dehradun Railway Station</span>
                  <span className="text-amber-300 font-mono font-bold">~18 KM</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">🚌 ISBT Dehradun</span>
                  <span className="text-amber-300 font-mono font-bold">~14 KM</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">✈️ Jolly Grant Airport (DED)</span>
                  <span className="text-amber-300 font-mono font-bold">~45 KM</span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Shivalik+College+of+Engineering+Dehradun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <Compass className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            {/* Key Coordinators Directory */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#040814]/85 border border-white/15 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)]">
              <div className="flex items-center space-x-2 text-purple-400 mb-2">
                <Users className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">COORDINATION CELL</span>
              </div>

              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4">
                KEY CONTACT DIRECTORY
              </h3>

              <div className="space-y-3 text-xs">
                {/* Faculty Contacts */}
                <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/30">
                  <span className="text-[10px] text-purple-400 font-bold uppercase block mb-1">
                    FACULTY COORDINATORS
                  </span>
                  <div className="text-slate-200 font-bold">Er. Kshitij Jain <span className="text-slate-400 font-normal text-[11px]">— ACM Faculty Coordinator</span></div>
                  <div className="text-slate-200 font-bold mt-1">Dr. Santosh Joshi <span className="text-slate-400 font-normal text-[11px]">— Academic & Strategic Lead</span></div>
                  <div className="text-slate-200 font-bold mt-1">Mrs. Shivali Pundir <span className="text-slate-400 font-normal text-[11px]">— Program & Operations Coordinator</span></div>
                </div>

                {/* Student Leadership */}
                <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/30">
                  <span className="text-[10px] text-red-400 font-bold uppercase block mb-1">
                    STUDENT EXECUTIVE TEAM
                  </span>
                  <div className="text-slate-200 font-bold">Rifat Parvez <span className="text-slate-400 font-normal text-[11px]">— Chairperson</span></div>
                  <div className="text-slate-200 font-bold mt-1">Shivam Kumar <span className="text-slate-400 font-normal text-[11px]">— Vice Chairperson</span></div>
                  <div className="text-slate-200 font-bold mt-1">Kumar Satyam <span className="text-red-400 font-normal text-[11px]">— Graphic Head ACM</span></div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/team"
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
                >
                  <span>VIEW FULL TEAM DIRECTORY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Registration Portal Quick Link */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-red-600/20 via-purple-600/20 to-sky-600/20 border border-white/15 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block">
                  READY TO REGISTER?
                </span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase">
                  EXPLORE COMPETITION SLOTS
                </span>
              </div>
              <Link
                href="/register"
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                REGISTER NOW →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Global Festival Footer */}
      <Footer />
    </main>
  );
}
