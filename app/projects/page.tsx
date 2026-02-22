"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data";
import { Project } from "../types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
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

interface ProjectSectionProps {
  title: string;
  subtitle: string;
  projectsList: Project[];
  withAccent?: boolean;
}

function ProjectSection({
  title,
  subtitle,
  projectsList,
  withAccent = false,
}: ProjectSectionProps) {
  if (projectsList.length === 0) {
    return null;
  }

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          {subtitle}
        </p>
        <h2
          className={`text-3xl font-semibold tracking-tight text-neutral-900 lg:text-4xl ${
            withAccent
              ? "relative pl-4 before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-900 before:content-['']"
              : ""
          }`}
        >
          {title}
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projectsList.map((project) => (
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
    </section>
  );
}

export default function ProjectsPage() {
  const ongoingProjects = projects.filter((project) => project.status === "in-progress");
  const completedProjects = projects.filter((project) => project.status === "completed");

  return (
    <div className="bg-white pt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.h1
          className="mb-3 text-3xl font-semibold tracking-tight text-neutral-900 lg:text-4xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="mb-14 text-sm uppercase tracking-widest text-neutral-500"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Selected architectural works
        </motion.p>

        <div className="space-y-16">
          <ProjectSection
            title="Ongoing Projects"
            subtitle="In Progress"
            projectsList={ongoingProjects}
            withAccent
          />
          <ProjectSection
            title="Completed Projects"
            subtitle="Delivered"
            projectsList={completedProjects}
          />
        </div>
      </div>
    </div>
  );
}
