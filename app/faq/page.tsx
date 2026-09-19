import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQClientPage from "@/components/faq/FAQClientPage";

export const metadata: Metadata = {
  title: "FREQUENTLY ASKED QUESTIONS | SHIVA INNOVEX 2026",
  description:
    "Everything you need to know before participating in SHIVA INNOVEX events: Hacknation 2.0, Ideathon, Departmental Technical Events, Science Championship, and Quantum Drift.",
};

export default function FAQPage() {
  return (
    <>
      {/* 1. GLOBAL NAVBAR (With FAQ immediately after CONTACT US, NO Register button) */}
      <Navbar />

      {/* 2. DEDICATED FAQ CLIENT CONTENT */}
      <FAQClientPage />

      {/* 3. FESTIVAL FOOTER */}
      <Footer />
    </>
  );
}
