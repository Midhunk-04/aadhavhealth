import Link from "next/link";
import { MapPin, Phone, Mail, Heart } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="inline-block mb-6">
              <img
                src="/assets/logo-transparent.png"
                alt="Aadhav Health Support - Professional Home Nursing & Caregiver Services in Coimbatore"
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing professional home care services with trust, compassion, and care in Coimbatore since 2024.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/share/p/1aYCvcYdtZ/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-teal transition-colors" aria-label="Facebook">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/aadhavhealthsupport?igsh=OHNmcGhzN25rNzBm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-teal transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-teal transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-teal transition-colors">All Services</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-brand-teal transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-brand-teal transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-teal transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/elderly-care" className="hover:text-brand-teal transition-colors">Elderly Care</Link>
              </li>
              <li>
                <Link href="/services/patient-care" className="hover:text-brand-teal transition-colors">Patient Care</Link>
              </li>
              <li>
                <Link href="/services/postnatal-baby-care" className="hover:text-brand-teal transition-colors">Postnatal & Baby Care</Link>
              </li>
              <li>
                <Link href="/services/nursing-services" className="hover:text-brand-teal transition-colors">Nursing Services</Link>
              </li>
              <li>
                <Link href="/services/physiotherapy-home" className="hover:text-brand-teal transition-colors">Physiotherapy at Home</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span>
                  D No 32 Alagiya Thruchitramb, Guvra Homes PT Colony,<br />
                  Sundakkamuthur, Perur Chettiipalayam,<br />
                  641010, Coimbatore
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                <span>+91 73589 61021</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-teal shrink-0" />
                <span>aadhavhealthsupport@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Aadhav Health Support. All rights reserved.</p>
          <a 
            href="https://www.zevora.work" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-teal transition-colors font-medium"
          >
            Designed by Zevora
          </a>
        </div>
      </div>
    </footer>
  );
}
