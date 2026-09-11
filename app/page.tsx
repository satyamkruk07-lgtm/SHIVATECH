import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050914] overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
