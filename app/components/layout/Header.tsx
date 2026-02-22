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
      className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-custom-light"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-3">
        <nav className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center text-lg md:text-xl font-semibold text-custom-dark font-poppins tracking-tight hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/logo/hero.jpg"
              alt="Garis 2 Architect"
              width={100}
              height={40}
              className="h-10 w-auto"
              priority
              unoptimized
            />
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className="nav-link text-custom-medium hover:text-custom-dark transition-elegant"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="nav-link text-custom-medium hover:text-custom-dark transition-elegant"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="nav-link text-custom-medium hover:text-custom-dark transition-elegant"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="nav-link text-custom-medium hover:text-custom-dark transition-elegant"
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
