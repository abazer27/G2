"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ProjectFeaturesProps {
  features: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="relative pl-4 text-2xl font-semibold tracking-tight text-neutral-900 before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-900 before:content-['']">
        Key Features
      </h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group flex items-start gap-3 rounded-xl border border-neutral-200 p-4 transition-colors duration-200 hover:bg-neutral-50 cursor-default"
            variants={itemVariants}
          >
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
              <Check className="h-3 w-3" />
            </div>
            <span className="text-neutral-700 text-sm leading-relaxed">
              {feature}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
