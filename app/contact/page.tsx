import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactScene from "@/components/contact/ContactScene";

export const metadata: Metadata = {
  title: "Contact Us | SHIVATECH 2026",
  description:
    "Official Helpdesk & Communications for SHIVATECH 2026. Get in touch with the student and faculty coordination committee at Shivalik University, Dehradun.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactScene />
    </>
  );
}
