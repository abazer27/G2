"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`space-y-4 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <p className="text-xs uppercase tracking-widest text-neutral-400">
          {label}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 lg:text-3xl">
        {title}
      </h2>
      {description && (
        <p
          className={`text-neutral-500 text-base ${
            centered ? "max-w-xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
