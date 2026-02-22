"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { ImageSet } from "../../types";
import { cloudinaryImageLoader, getShimmerDataURL } from "../../lib/image";

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
  const blurDataURL = getShimmerDataURL(800, 600);

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block cursor-pointer rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-t-2xl bg-neutral-100">
        <Image
          src={image.compressed}
          alt={image.alt || title}
          fill
          loader={cloudinaryImageLoader}
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover transition duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-95 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
            {category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-neutral-500">
            <Calendar className="h-4 w-4 opacity-70" />
            {year}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <div className="h-10 overflow-hidden">
            <p className="text-sm text-neutral-500 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 -translate-y-1">
              {description}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 transition-colors duration-300 group-hover:text-neutral-700">
          View Project
          <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
