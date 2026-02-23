"use client";

import { motion } from "framer-motion";

interface AboutHeroProps {
  title: string;
  subtitle: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function AboutHero({ title, subtitle }: AboutHeroProps) {
  return (
    <section className="py-18">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          
          <motion.div
            className="w-12 h-0.5 bg-black mt-4"
            variants={itemVariants}
          />
          
          <motion.p
            className="text-neutral-500 mt-4 max-w-2xl leading-relaxed text-lg"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
