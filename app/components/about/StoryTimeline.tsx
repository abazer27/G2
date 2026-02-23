"use client";

import { motion } from "framer-motion";

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

interface StoryTimelineProps {
  milestones: Milestone[];
}

export default function StoryTimeline({ milestones }: StoryTimelineProps) {
  return (
    <section className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            Our Journey
          </h2>
          <div className="w-12 h-0.5 bg-black mt-4" />
        </motion.div>

        {/* Desktop: Vertical Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[140px] top-0 bottom-0 w-px bg-neutral-200" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  className="relative flex items-start gap-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Year */}
                  <div className="w-[120px] shrink-0 text-right">
                    <span className="text-xl font-semibold text-neutral-900">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="relative shrink-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-black border-4 border-white shadow-sm z-10" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="flex-1 p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {milestone.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Horizontal Timeline Line */}
            <div className="absolute top-6 left-0 w-full h-px bg-neutral-200" />

            {/* Milestones Scroll Container */}
            <div
              className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  className="relative min-w-[280px] max-w-[300px] shrink-0 snap-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Dot Indicator */}
                  <div className="flex justify-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-black relative z-10" />
                  </div>

                  {/* Card */}
                  <div className="p-5 rounded-2xl border border-neutral-200 bg-white shadow-sm">
                    <span className="text-sm text-neutral-400 font-medium">
                      {milestone.year}
                    </span>
                    <h3 className="text-base font-semibold text-neutral-900 mt-2">
                      {milestone.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hide scrollbar styles */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
