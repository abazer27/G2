"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-mono-light overflow-hidden relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-custom-lightest/50 to-custom-lighter/30"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-custom-dark mb-6 font-poppins"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              Contemporary Architect 
            </motion.span>
            <motion.span
              className="block text-custom-medium"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
               &
            </motion.span>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
            >
              Spatial Thinker
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-custom-medium mb-8 max-w-2xl mx-auto font-roboto"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.7,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            Let’s build timeless simplicity.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/projects"
                className="px-8 py-4 bg-custom-dark text-white rounded-lg hover:bg-custom-medium transition-colors text-lg font-semibold inline-block text-center font-roboto shadow-lg"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-custom-medium text-custom-dark rounded-lg hover:bg-custom-medium hover:text-white transition-all text-lg font-semibold inline-block text-center font-roboto"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative geometric shapes and logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large background logo - center */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5"
          initial={{ opacity: 1, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0 }}
        >
          <Image
            src="/images/logo/logo.png"
            alt="Garis 2 Architect"
            width={600}
            height={600}
            className="w-[600px] h-[600px] object-contain"
            unoptimized
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-custom-light rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-custom-medium rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
