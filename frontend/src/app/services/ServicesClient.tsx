"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function RevealText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function ServicesClient() {
  const [filter, setFilter] = useState<"All" | "Medical" | "Non-Medical">("All");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const filteredServices = services.filter(
    (s) => filter === "All" || s.category === filter
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-white pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-20 bg-brand-purple">
        <motion.div style={{ y: heroY }} className="absolute inset-0 opacity-20">
          <img src="/assets/medical-pattern.png" alt="Medical Patterns Coimbatore" className="w-full h-full object-cover" decoding="async" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/50 to-brand-purple" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <RevealText>
              <h1 className="text-4xl md:text-7xl font-playfair font-black text-white mb-6 uppercase tracking-tighter">
                Our <span className="text-brand-teal">Services.</span>
              </h1>
            </RevealText>
            <p className="text-brand-lavender text-lg md:text-2xl max-w-2xl mx-auto font-light italic">
              &quot;Professional Home Care Services in Coimbatore | Expert Medical Support at Your Doorstep.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="container mx-auto px-4 -mt-10 relative z-30 mb-24">
        <div className="flex justify-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-full p-2 shadow-2xl flex gap-1 border border-white/60">
            {[
              { id: "All", label: "All" },
              { id: "Non-Medical", label: "Non-Medical" },
              { id: "Medical", label: "Medical" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as "All" | "Medical" | "Non-Medical")}
                className={cn(
                  "px-6 md:px-10 py-4 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-500",
                  filter === tab.id
                    ? "bg-brand-purple text-white shadow-lg scale-105"
                    : "text-gray-400 hover:text-brand-purple"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                key={service.slug}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] p-1 shadow-xl border border-gray-100 flex flex-col group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden rounded-[2.2rem]">
                  <img src={service.image} alt={`${service.title} - ${service.tamilTitle} Services in Coimbatore`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
                  <div className="absolute top-4 right-4">
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md border border-white/20",
                      service.category === "Medical" ? "bg-brand-purple/80 text-white" : "bg-brand-teal/80 text-white"
                    )}>
                      {service.category}
                    </span>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="mb-6">
                     <h3 className="text-2xl font-black font-playfair text-gray-900 mb-1 uppercase tracking-tighter group-hover:text-brand-purple transition-colors">
                       {service.title}
                     </h3>
                     <p className="text-brand-purple font-bold text-xs">{service.tamilTitle}</p>
                  </div>
                  <p className="text-gray-500 font-medium leading-relaxed mb-8 line-clamp-3">
                    {service.shortDesc}
                  </p>
                  
                  <Button className="w-full bg-gray-50 text-brand-purple hover:bg-brand-purple hover:text-white py-8 rounded-2xl font-black uppercase tracking-widest transition-all" asChild>
                    <Link href={`/services/${service.slug}`}>
                      Details & Pricing <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* SEO Text Block */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-black font-playfair text-brand-purple mb-6 uppercase tracking-tight">Best Home Nursing & Elderly Care in Coimbatore</h2>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">
            At Aadhav Health Support, we offer a wide range of <strong className="font-bold text-gray-800">healthcare services at home in Coimbatore</strong>. From <strong className="font-bold text-gray-800">elderly assistance</strong> to <strong className="font-bold text-gray-800">skilled nursing care</strong>, our team is equipped to handle complex medical needs with compassion. Our team consists of verified, trained, and highly experienced <strong className="font-bold text-gray-800">home nurses in Coimbatore</strong>, physiotherapists, and caregivers. Each member is selected not just for their medical skills, but for their heart. We are proud to be a top-rated <strong className="font-bold text-gray-800">nursing bureau in Coimbatore</strong> providing specialized care. Whether you are in Peelamedu, RS Puram, or Saravanampatti, our <strong className="font-bold text-gray-800">home visit doctors</strong> and nurses are just a call away.
          </p>
        </div>
      </section>
    </div>
  );
}
