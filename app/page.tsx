import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhyPeakMotion from "@/components/landing/WhyPeakMotion";
import InteractiveDemo from "@/components/landing/InteractiveDemo";
import Mission from "@/components/landing/Mission";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-[#0F172A]">
      <Navbar />
      <Hero />
      <WhyPeakMotion />
      <InteractiveDemo />
      <Mission />
      <Features />
      <Footer />
    </main>
  );
}