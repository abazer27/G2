"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-custom-lightest/95 backdrop-blur-sm border-b border-custom-lighter"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className=" flex items-center text-lg md:text-2xl font-bold text-custom-dark font-poppins"
          >
            <Image
              src="/images/logo/logo2.png"
              alt="G2 Architect"
              width={120}
              height={48}
              className="h-12 w-auto"
              priority
              unoptimized
            />
            Architect
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-custom-medium hover:text-custom-dark transition-colors font-medium font-roboto"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-custom-medium hover:text-custom-dark transition-colors font-medium font-roboto"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-custom-medium hover:text-custom-dark transition-colors font-medium font-roboto"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-custom-medium hover:text-custom-dark transition-colors font-medium font-roboto"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-custom-medium"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-2 border-t border-custom-lighter mt-4">
                <Link
                  href="/"
                  className="block py-2 px-4 text-custom-dark hover:text-custom-dark transition-colors font-medium"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block py-2 px-4 text-custom-dark hover:text-custom-dark transition-colors font-medium"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="block py-2 px-4 text-custom-dark hover:text-custom-dark transition-colors font-medium"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 px-4 text-custom-dark hover:text-custom-dark transition-colors font-medium"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
