"use client";

import { motion } from "framer-motion";

interface ProjectOverviewProps {
  description: string;
}

export default function ProjectOverview({ description }: ProjectOverviewProps) {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="relative pl-4 text-2xl font-semibold tracking-tight text-neutral-900 before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-900 before:content-['']">
        Project Overview
      </h2>
      <p className="text-neutral-600 leading-relaxed text-base max-w-2xl">
        {description}
      </p>
    </motion.section>
  );
}
