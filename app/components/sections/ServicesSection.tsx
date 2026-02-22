"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "../ui/ServiceCard";

interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader label="What We Do" title="Our Services" />

        {/* Services Grid */}
        <motion.div
          className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </motion.div>

        {/* See More Button */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 rounded-xl bg-black px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            See All Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
