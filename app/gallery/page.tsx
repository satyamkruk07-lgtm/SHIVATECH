import React from "react";
import Metadata from "next";
import Navbar from "@/components/Navbar";
import GalleryScene from "@/components/gallery/GalleryScene";

export const metadata = {
  title: "Gallery | SHIVATECH 2026",
  description:
    "Explore the official Web of Memories gallery for SHIVATECH 2026. Interactive spider-web photo network featuring moments, team, hackathon highlights, and behind-the-scenes memories.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <GalleryScene />
    </>
  );
}
