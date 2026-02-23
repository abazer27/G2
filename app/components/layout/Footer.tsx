import Link from "next/link";
import { contactInfo } from "../../data";

export default function Footer() {
  return (
    <footer className="bg-custom-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              Garis2Architect
            </h3>
            <p className="text-custom-lighter mb-4 font-roboto">
              Creating exceptional architectural experiences that blend
              innovation with sustainability and human-centered design.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">
              Navigation
            </h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-custom-lighter hover:text-white transition-colors font-roboto"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-custom-lighter hover:text-white transition-colors font-roboto"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="block text-custom-lighter hover:text-white transition-colors font-roboto"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block text-custom-lighter hover:text-white transition-colors font-roboto"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Contact</h4>
            <div className="space-y-2 text-custom-lighter font-roboto">
              <p>{contactInfo.email}</p>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-custom-medium mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-custom-lighter text-sm font-roboto">
            © 2024 Garis2Architect. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {contactInfo.socialMedia.linkedin && (
              <a
                href={contactInfo.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-lighter hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            )}
            {contactInfo.socialMedia.instagram && (
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-lighter hover:text-white transition-colors font-roboto"
              >
                Instagram
              </a>
            )}
            {contactInfo.socialMedia.tiktok && (
              <a
                href={contactInfo.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-lighter hover:text-white transition-colors font-roboto"
              >
                TikTok
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
