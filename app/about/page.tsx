"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { aboutContent } from "../data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function AboutPage() {
  return (
    <div className="pt-20 bg-white">
      {/* About Garis 2 Architect Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Title with Divider */}
            <motion.div className="mb-16" variants={itemVariants}>
              <h1 className="text-custom-dark mb-3 font-poppins tracking-tight">
                {aboutContent.hero.title}
              </h1>
              <div className="divider-thin w-24" />
              <p className="subheading text-custom-medium mt-6 max-w-2xl">
                Human-centered design rooted in context and clarity.
              </p>
            </motion.div>

            {/* Editorial Two-Column Layout */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
              variants={itemVariants}
            >
              {/* Our Story */}
              <motion.div variants={itemVariants}>
                <h2 className="text-custom-dark mb-8 font-poppins">
                  {aboutContent.story.title}
                </h2>
                <div className="space-y-6">
                  {aboutContent.story.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      className="text-custom-medium font-roboto"
                      variants={itemVariants}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              {/* Our Mission */}
              <motion.div variants={itemVariants}>
                <h2 className="text-custom-dark mb-8 font-poppins">
                  {aboutContent.mission.title}
                </h2>
                <motion.p
                  className="text-custom-medium font-roboto"
                  variants={itemVariants}
                >
                  {aboutContent.mission.content}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-spacing bg-custom-lightest">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-custom-dark mb-3 font-poppins tracking-tight">
                What We Do
              </h2>
              <div className="divider-thin w-24" />
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutContent.whatWeDo.services.map((service, index) => {
                // Get the icon component dynamically
                const IconComponent = service.icon ? LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string, strokeWidth?: number }> : null;

                return (
                  <motion.div 
                    key={service.id} 
                    className="group bg-white border border-custom-border rounded-lg transition-elegant hover:border-custom-medium cursor-pointer overflow-hidden h-full flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="p-8 flex-1 flex flex-col">
                      {/* Icon Container - Outline Style */}
                      <div className="mb-6">
                        <div className="w-11 h-11 bg-custom-lighter rounded-lg flex items-center justify-center transition-elegant group-hover:bg-custom-light">
                          {IconComponent && (
                            <IconComponent 
                              className="w-5 h-5 text-custom-medium" 
                              strokeWidth={1.5}
                            />
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-poppins text-custom-dark mb-3 leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-custom-medium font-roboto text-[13.5px] leading-relaxed mb-4 flex-1">
                        {service.description}
                      </p>

                      {/* Points List */}
                      {service.points && service.points.length > 0 && (
                        <ul className="space-y-2 mt-auto pt-4 border-t border-custom-light">
                          {service.points.map((point, idx) => (
                            <li 
                              key={idx} 
                              className="flex items-start text-[13px] text-custom-medium"
                            >
                              <span className="mr-2 text-custom-medium">–</span>
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
        </div>
      </section>
    </div>
  );
}
