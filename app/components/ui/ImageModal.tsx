"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageSet } from "../../types";

interface ImageModalProps {
  images: ImageSet[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageModal({
  images,
  isOpen,
  currentIndex,
  onClose,
  onNavigate,
}: ImageModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
          break;
        case "ArrowRight":
          onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handlePrevious = () => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
    setIsLoading(true);
  };

  const handleNext = () => {
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    setIsLoading(true);
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          onClick={onClose}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.button>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </>
        )}

        {/* Image Container */}
        <div
          className="flex items-center justify-center h-full w-full p-4 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            {/* Loading Spinner */}
            {isLoading && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </motion.div>
            )}

            {/* HD Image */}
            <motion.img
              src={currentImage.hd}
              alt={currentImage.alt || `Image ${currentIndex + 1}`}
              className={`max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={handleImageLoad}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Image Counter */}
            {images.length > 1 && (
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white text-sm rounded-full font-roboto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {currentIndex + 1} / {images.length}
              </motion.div>
            )}

            {/* Image Caption */}
            {currentImage.alt && (
              <motion.div
                className="absolute bottom-4 right-4 max-w-xs px-3 py-2 bg-black/50 text-white text-sm rounded-lg font-roboto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {currentImage.alt}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto p-2 bg-black/30 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {images.map((image, index) => (
              <motion.button
                key={index}
                className={`relative w-16 h-12 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${
                  index === currentIndex
                    ? "border-white"
                    : "border-transparent hover:border-white/50"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(index);
                  setIsLoading(true);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.compressed}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    layoutId="activeThumb"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}