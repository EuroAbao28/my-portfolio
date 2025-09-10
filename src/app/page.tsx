"use client";

import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Separator from "@/components/generics/Separator";
import TechStackSection from "@/components/sections/TechStackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import NavigationBar from "@/components/sections/NavigationBar";

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

      {/* separator */}
      <Separator />

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
