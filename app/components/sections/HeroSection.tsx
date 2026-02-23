"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-b from-white via-neutral-50/50 to-neutral-100/30">
      {/* Watermark logo background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative h-[600px] w-[600px] opacity-[0.06]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/logo/logo.png"
            alt=""
            fill
            className="object-contain blur-[2px]"
            aria-hidden="true"
            priority
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
        {/* Small label */}
        <motion.p
          className="mb-6 text-xs uppercase tracking-widest text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Garis2Architect
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="block font-futura font-bold">Contemporary Architect</span>
          <span className="block font-futura font-bold text-neutral-400">&</span>
          <span className="block font-futura font-bold">Spatial Thinker</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mx-auto mt-6 max-w-xl text-neutral-500 text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Let&apos;s build timeless simplicity. We craft spaces that inspire,
          endure, and elevate the human experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Primary Button */}
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-black px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Secondary Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-8 py-3 font-medium text-neutral-900 transition-all duration-300 hover:border-black hover:bg-neutral-50"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div
          className="flex h-10 w-6 cursor-pointer items-start justify-center rounded-full border-2 border-neutral-300 pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="h-2 w-1 rounded-full bg-neutral-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
