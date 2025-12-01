"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "./components/sections/Hero";
import ProjectCard from "./components/ui/ProjectCard";
import { projects, services } from "./data";

export default function Home() {
  // Get first 3 projects for featured section
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-mono-soft">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-custom-dark mb-16">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.shortDescription}
                category={project.category}
                year={project.year}
                image={project.thumbnailImage}
                slug={project.slug}
              />
            ))}
          </div>

          {/* View More Projects Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-custom-dark text-white rounded-lg hover:bg-custom-medium hover:shadow-2xl transition-all duration-300 text-lg font-semibold font-roboto group shadow-lg"
              >
                View More Projects
                <motion.svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-mono-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-custom-dark mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              // Define monochromatic color schemes for different services
              const colorVariations = [
                { bg: "bg-custom-light", icon: "bg-custom-medium" },
                { bg: "bg-custom-lighter", icon: "bg-custom-light" },
                { bg: "bg-custom-medium", icon: "bg-custom-dark" },
                { bg: "bg-custom-light", icon: "bg-custom-dark" },
              ];

              const colors = colorVariations[index % colorVariations.length];

              return (
                <div key={service.id} className="text-center">
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <div className={`w-8 h-8 ${colors.icon} rounded`}></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-custom-dark">
                    {service.title}
                  </h3>
                  <p className="text-custom-medium">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
