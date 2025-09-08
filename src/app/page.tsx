"use client";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import ProjectsSection from "@/components/ProjectsSection";
import Separator from "@/components/Separator";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 9px, rgba(83, 83, 83, 0.2) 9px, rgba(83, 83, 83, 0.2) 10px)",
        backgroundPosition: "center center",
      }}
      className="text-slate-950 bg-gray-50/10">
      {/* nav */}
      <NavigationBar />

      {/* separator */}
      <Separator noTop={true} />

      {/* hero */}
      <HeroSection />

      {/* separator */}
      <Separator />

      {/* about */}
      <ExperienceSection />

      {/* tech stack */}
      <TechStackSection />

      {/* separator */}
      <Separator />

      {/* projects */}
      <ProjectsSection />

      {/* separator */}
      <Separator />

      {/* contact */}
      <ContactSection />

      {/* separator */}
      <Separator />

      {/* footer */}
      <Footer />
    </div>
  );
}
