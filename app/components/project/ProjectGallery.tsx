"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ImageSet } from "../../types";
import { cloudinaryImageLoader, getShimmerDataURL } from "../../lib/image";

interface ProjectGalleryProps {
  images: ImageSet[];
  projectTitle: string;
  onImageClick?: (index: number) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function ProjectGallery({
  images,
  projectTitle,
  onImageClick,
}: ProjectGalleryProps) {
  const blurDataURL = getShimmerDataURL(800, 600);

  if (!images || images.length === 0) {
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
        Gallery
      </h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="group relative aspect-4/3 overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-lg cursor-pointer"
            variants={imageVariants}
            onClick={() => onImageClick?.(index + 1)}
          >
            <Image
              src={image.compressed}
              alt={image.alt || `${projectTitle} - Image ${index + 1}`}
              fill
              loader={cloudinaryImageLoader}
              placeholder="blur"
              blurDataURL={blurDataURL}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
