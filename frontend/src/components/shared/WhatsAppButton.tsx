"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917358961021?text=Hello%20Aadhav%20Health%20Support,%20I%20am%20interested%20in%20your%20home%20care%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(34, 197, 94, 0.7)",
          "0 0 0 15px rgba(34, 197, 94, 0)",
          "0 0 0 0 rgba(34, 197, 94, 0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}
