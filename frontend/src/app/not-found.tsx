"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileQuestion, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <FileQuestion className="w-32 h-32 text-gray-200" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold font-playfair text-brand-purple">404</span>
            </div>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-playfair font-bold text-gray-900 mb-4"
        >
          Page Not Found
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-8"
        >
          We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full px-8 py-6 text-lg" asChild>
            <Link href="/">
              <Home className="w-5 h-5 mr-2" /> Go Back Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
