"use client";

import { projects } from "../../data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { use, useState } from "react";
import ImageModal from "../../components/ui/ImageModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the project by slug
  const project = projects.find((p) => p.slug === slug);

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-bold text-custom-dark mb-8 font-poppins"
            variants={itemVariants}
          >
            {project.title}
          </motion.h1>

          {/* Hero Image */}
          <motion.div
            className="h-96 md:h-128 bg-custom-lighter rounded-lg mb-8 overflow-hidden cursor-pointer relative"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => {
              setCurrentImageIndex(0);
              setIsModalOpen(true);
            }}
          >
            <Image
              src={project.heroImage.compressed}
              alt={project.heroImage.alt || project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            variants={itemVariants}
          >
            <motion.div className="lg:col-span-2" variants={containerVariants}>
              <motion.h2
                className="text-2xl font-semibold mb-4 text-custom-dark font-poppins"
                variants={itemVariants}
              >
                Project Overview
              </motion.h2>
              <motion.p
                className="text-custom-medium mb-6 font-roboto"
                variants={itemVariants}
              >
                {project.description}
              </motion.p>

              {/* Features */}
              <motion.div className="mb-8" variants={itemVariants}>
                <motion.h3
                  className="text-xl font-semibold mb-4 text-custom-dark font-poppins"
                  variants={itemVariants}
                >
                  Key Features
                </motion.h3>
                <motion.ul
                  className="space-y-2"
                  variants={containerVariants}
                >
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-custom-medium font-roboto"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="w-2 h-2 bg-custom-medium rounded-full mt-2 mr-3 shrink-0"></div>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                variants={containerVariants}
              >
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="h-75 bg-custom-lighter rounded-lg overflow-hidden cursor-pointer relative"
                    variants={imageVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => {
                      setCurrentImageIndex(index + 1); // +1 because hero image is at index 0
                      setIsModalOpen(true);
                    }}
                  >
                    <Image
                      src={image.compressed}
                      alt={image.alt || `${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={containerVariants}>
              <motion.h3
                className="text-xl font-semibold mb-4 text-custom-dark font-poppins"
                variants={itemVariants}
              >
                Project Details
              </motion.h3>
              <motion.div className="space-y-4" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <h4 className="font-medium text-custom-dark font-poppins">Year</h4>
                  <p className="text-custom-medium font-roboto">{project.year}</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h4 className="font-medium text-custom-dark font-poppins">Location</h4>
                  <p className="text-custom-medium font-roboto">{project.location}</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h4 className="font-medium text-custom-dark font-poppins">Client</h4>
                  <p className="text-custom-medium font-roboto">{project.client}</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h4 className="font-medium text-custom-dark font-poppins">Area</h4>
                  <p className="text-custom-medium font-roboto">{project.area}</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h4 className="font-medium text-custom-dark font-poppins">Status</h4>
                  <p className="text-custom-medium font-roboto capitalize">
                    {project.status.replace("-", " ")}
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h4 className="font-medium text-custom-dark font-poppins">Category</h4>
                  <p className="text-custom-medium font-roboto">{project.category}</p>
                </motion.div>
              </motion.div>

              {/* Tags */}
              <motion.div className="mt-8" variants={itemVariants}>
                <motion.h4
                  className="font-medium text-custom-dark mb-3 font-poppins"
                  variants={itemVariants}
                >
                  Tags
                </motion.h4>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-custom-light text-custom-dark text-sm rounded-full font-roboto"
                      variants={tagVariants}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image Modal */}
        <ImageModal
          images={[project.heroImage, ...project.images]}
          isOpen={isModalOpen}
          currentIndex={currentImageIndex}
          onClose={() => setIsModalOpen(false)}
          onNavigate={(index) => setCurrentImageIndex(index)}
        />
      </div>
    </div>
  );
}
