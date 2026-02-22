"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  index = 0,
}: ServiceCardProps) {
  // Get the icon component dynamically
  const IconComponent = icon
    ? (LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon)
    : null;

  return (
    <motion.div
      className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:bg-neutral-50 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Icon */}
      {IconComponent && (
        <div className="mb-6">
          <IconComponent className="h-6 w-6 text-neutral-800 transition-transform duration-300 group-hover:scale-110" />
        </div>
      )}

      {/* Title */}
      <h3 className="mb-3 text-lg font-semibold text-neutral-900">{title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-neutral-500">{description}</p>
    </motion.div>
  );
}
