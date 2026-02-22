"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { contactInfo } from "../data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const generateWhatsAppURL = () => {
    // Format the message for WhatsApp
    const whatsappMessage = `Hello! New contact form submission from Garis 2 Architect website:

*Contact Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

*Message:*
${formData.message}

---
Sent from Garis 2 Architect Contact Form Website.`;

    const whatsappNumber = "6287856181415";
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div className="pt-20 bg-gradient-mono-soft">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold text-custom-dark mb-8 font-poppins"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99] as const,
          }}
        >
          Contact
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-2xl font-semibold text-custom-dark mb-6 font-poppins"
              variants={itemVariants}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-custom-medium mb-8 font-roboto"
              variants={itemVariants}
            >
              Ready to discuss your next project? We&apos;d love to hear from
              you. Reach out to start a conversation about your architectural
              needs.
            </motion.p>

            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="font-semibold text-custom-dark mb-2">Email</h3>
                <p className="text-custom-medium">{contactInfo.email}</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="font-semibold text-custom-dark mb-2">Phone</h3>
                <p className="text-custom-medium">{contactInfo.phone}</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="font-semibold text-custom-dark mb-2">Address</h3>
                <p className="text-custom-medium">{contactInfo.address}</p>
              </motion.div>

              {/* Social Media Links */}
              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-custom-dark mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {contactInfo.socialMedia.linkedin && (
                    <motion.a
                      href={contactInfo.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-medium hover:text-custom-dark transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      LinkedIn
                    </motion.a>
                  )}
                  {contactInfo.socialMedia.instagram && (
                    <motion.a
                      href={contactInfo.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-medium hover:text-custom-dark transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Instagram
                    </motion.a>
                  )}
                  {contactInfo.socialMedia.tiktok && (
                    <motion.a
                      href={contactInfo.socialMedia.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-medium hover:text-custom-dark transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Tiktok
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.form
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
            >
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-custom-dark mb-2"
                >
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-custom-light rounded-lg focus:ring-2 focus:ring-custom-medium focus:border-transparent transition-all"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-custom-dark mb-2"
                >
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-custom-light rounded-lg focus:ring-2 focus:ring-custom-medium focus:border-transparent transition-all"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-custom-dark mb-2"
                >
                  Your Phone Number
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+62 123 456 7890"
                  className="w-full px-4 py-2 border border-custom-light rounded-lg focus:ring-2 focus:ring-custom-medium focus:border-transparent transition-all"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-custom-dark mb-2"
                >
                  Message
                </label>
                <motion.textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-2 border border-custom-light rounded-lg focus:ring-2 focus:ring-custom-medium focus:border-transparent transition-all resize-none"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                {!isSubmitted ? (
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-custom-medium text-white rounded-lg hover:bg-custom-dark transition-colors font-semibold"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Send Message
                  </motion.button>
                ) : (
                  <div className="space-y-4">
                    <motion.a
                      href={generateWhatsAppURL()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Continue to WhatsApp
                    </motion.a>
                    <motion.button
                      type="button"
                      onClick={resetForm}
                      className="w-full px-6 py-3 bg-custom-medium text-white rounded-lg hover:bg-custom-dark transition-colors font-semibold"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      Send Another Message
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
