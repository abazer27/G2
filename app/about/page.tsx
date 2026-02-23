"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { aboutContent } from "../data";
import { AboutHero, StoryTimeline, MissionSection } from "../components/about";

export default function AboutPage() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <AboutHero
        title={aboutContent.hero.title}
        subtitle={aboutContent.hero.subtitle}
      />

      {/* Milestone Timeline Section */}
      <StoryTimeline milestones={aboutContent.milestones} />

      {/* Mission Section */}
      <MissionSection />

      {/* What We Do Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              What We Do
            </h2>
            <div className="w-12 h-0.5 bg-black mt-4" />
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutContent.whatWeDo.services.map((service, index) => {
              const IconComponent = service.icon
                ? (LucideIcons[
                    service.icon as keyof typeof LucideIcons
                  ] as React.ComponentType<{
                    className?: string;
                    strokeWidth?: number;
                  }>)
                : null;

              return (
                <motion.div
                  key={service.id}
                  className="group bg-white border border-neutral-200 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer overflow-hidden h-full flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="p-8 flex-1 flex flex-col">
                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-neutral-200">
                        {IconComponent && (
                          <IconComponent
                            className="w-6 h-6 text-neutral-600"
                            strokeWidth={1.5}
                          />
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3 leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>

                    {/* Points List */}
                    {service.points && service.points.length > 0 && (
                      <ul className="space-y-2 mt-auto pt-4 border-t border-neutral-100">
                        {service.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-neutral-500"
                          >
                            <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
