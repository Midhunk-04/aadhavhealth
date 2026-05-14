"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Globe } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"EN" | "TA">("EN");
  const pathname = usePathname();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-purple z-[60] origin-left"
        style={{ scaleX }}
      />
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm py-1" : "bg-transparent py-3"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <img 
                src="/assets/logo-transparent.png" 
                alt="Aadhav Health Support - Leading Home Care and Nursing Services in Coimbatore" 
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={cn(
                    "text-[14px] font-semibold tracking-wide transition-all duration-300 relative group",
                    pathname === link.path ? "text-brand-purple" : "text-gray-600 hover:text-brand-purple"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-brand-purple rounded-full transition-transform duration-300 origin-left",
                    pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 z-50">
              <button
                onClick={() => setLang(lang === "EN" ? "TA" : "EN")}
                className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-gray-400 hover:text-brand-purple transition-colors"
              >
                <Globe className="w-3.5 h-3.5" /> {lang}
              </button>
              
              <Button
                className="hidden md:flex bg-brand-purple hover:bg-brand-teal text-white gap-2 rounded-full px-5 py-4 text-xs font-bold tracking-wider shadow-md transition-all duration-300 hover:shadow-brand-teal/10"
                asChild
              >
                <Link href="tel:+917358961021">
                  <Phone className="w-3.5 h-3.5" /> Book a Call
                </Link>
              </Button>
              
              <button
                className="md:hidden p-2 text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-4 md:hidden flex flex-col gap-4"
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-2 rounded-md text-base font-medium transition-colors",
                    pathname === link.path
                      ? "bg-brand-purple/10 text-brand-purple"
                      : "text-gray-700 hover:bg-gray-50 hover:text-brand-teal"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white gap-2 mt-2"
                asChild
              >
                <Link href="tel:+917358961021">
                  <Phone className="w-4 h-4" /> Book a Call
                </Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
