"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { ImageSet } from "../../types";
import { cloudinaryImageLoader, getShimmerDataURL } from "../../lib/image";

interface ProjectHeroProps {
  title: string;
  category: string;
  year: number;
  location: string;
  heroImage: ImageSet;
  onImageClick?: () => void;
}

export default function ProjectHero({
  title,
  category,
  year,
  location,
  heroImage,
  onImageClick,
}: ProjectHeroProps) {
  const blurDataURL = getShimmerDataURL(1920, 820);

  return (
    <motion.section
      className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onClick={onImageClick}
    >
      {/* Image with zoom animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src={heroImage.compressed}
          alt={heroImage.alt || title}
          fill
          loader={cloudinaryImageLoader}
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />

      {/* Content overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-8 lg:p-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Category & metadata */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-neutral-900">
            {category}
          </span>
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 opacity-70" />
              {year}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 opacity-70" />
              {location}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight max-w-4xl">
          {title}
        </h1>
      </motion.div>
    </motion.section>
  );
}
