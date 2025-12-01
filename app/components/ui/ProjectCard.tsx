"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImageSet } from "../../types";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  year: number;
  image: ImageSet;
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  category,
  year,
  image,
  slug,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer border border-custom-lighter hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/projects/${slug}`}>
        <div className="relative h-64 overflow-hidden">
          <div className="w-full h-full bg-custom-lighter group-hover:scale-110 transition-transform duration-500">
            <Image
              src={image.compressed}
              alt={image.alt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-custom-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-custom-dark group-hover:text-custom-medium transition-colors">
              {title}
            </h3>
            <span className="text-sm text-custom-light">{year}</span>
          </div>

          <p className="text-custom-medium mb-4 line-clamp-2">{description}</p>

          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-custom-dark text-white text-sm rounded-full shadow-md">
              {category}
            </span>
            <span className="text-custom-medium group-hover:text-custom-dark transition-colors text-sm font-medium">
              View Project →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
