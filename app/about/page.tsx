"use client";

import { motion } from "framer-motion";
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20 bg-gradient-mono-soft">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-bold text-custom-dark mb-8 font-poppins"
            variants={itemVariants}
          >
            {aboutContent.hero.title}
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.h2
                className="text-2xl font-semibold text-custom-dark mb-6 font-poppins"
                variants={itemVariants}
              >
                {aboutContent.story.title}
              </motion.h2>
              {aboutContent.story.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-custom-medium mb-6 font-roboto"
                  variants={itemVariants}
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.h3
                className="text-xl font-semibold text-custom-dark mb-4 font-poppins"
                variants={itemVariants}
              >
                {aboutContent.mission.title}
              </motion.h3>
              <motion.p
                className="text-custom-medium mb-6 font-roboto"
                variants={itemVariants}
              >
                {aboutContent.mission.content}
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div
                className="bg-custom-lighter p-8 rounded-lg"
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.h3
                  className="text-xl font-semibold text-custom-dark mb-6"
                  variants={itemVariants}
                >
                  {aboutContent.whatWeDo.title}
                </motion.h3>
                <ul className="space-y-4">
                  {aboutContent.whatWeDo.services.map((service, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <div className="w-2 h-2 bg-custom-medium rounded-full mt-2 mr-3 shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-custom-dark">
                          {service.title}
                        </h4>
                        <p className="text-custom-medium text-sm">
                          {service.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="mt-16" variants={itemVariants}>
            <motion.h2
              className="text-2xl font-semibold text-custom-dark mb-8"
              variants={itemVariants}
            >
              {aboutContent.approach.title}
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {aboutContent.approach.values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-custom-light rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-8 h-8 bg-custom-medium rounded"></div>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-custom-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-custom-medium text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
