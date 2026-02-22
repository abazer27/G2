"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { Project } from "../../types";

interface FeaturedProjectsProps {
  projects: Project[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader label="Selected Works" title="Featured Projects" />

        {/* Projects Grid */}
        <motion.div
          className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.shortDescription}
                category={project.category}
                year={project.year}
                image={project.thumbnailImage}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-black px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
