import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050914] overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
    </main>
  );
}
