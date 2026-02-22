"use client";

import HeroSection from "./components/sections/HeroSection";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import ServicesSection from "./components/sections/ServicesSection";
import { aboutContent, projects } from "./data";

export default function Home() {
  // Get first 3 projects for featured section
  const featuredProjects = projects.slice(0, 3);

  // Get first 3 services for preview
  const featuredServices = aboutContent.whatWeDo.services.slice(0, 3);

  return (
    <main className="bg-white">
      <HeroSection />
      <FeaturedProjects projects={featuredProjects} />
      <ServicesSection services={featuredServices} />
    </main>
  );
}
