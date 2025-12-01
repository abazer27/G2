"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function ProjectsPage() {
  // Separate projects by status
  const ongoingProjects = projects.filter(p => p.status === "in-progress");
  const completedProjects = projects.filter(p => p.status === "completed");

  return (
    <div className="pt-20 bg-gradient-mono-soft">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold text-custom-dark mb-12 font-poppins"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99] as const,
          }}
        >
          Projects
        </motion.h1>

        {/* Ongoing Projects Section */}
        {ongoingProjects.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl font-semibold text-custom-dark mb-6 font-poppins"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Ongoing Projects
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {ongoingProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
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
          </motion.div>
        )}

        {/* Completed Projects Section */}
        {completedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.h2
              className="text-2xl font-semibold text-custom-dark mb-6 font-poppins"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Completed Projects
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {completedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
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
          </motion.div>
        )}
      </div>
    </div>
  );
}
