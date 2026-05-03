"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Phone, ArrowRight, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

export default function ServiceClient({ service }: { service: { title: string, tamilTitle: string, shortDesc: string, longDesc: string, features: string[], pricing: { name: string, price: string }[], image: string, category: string } }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  if (!service) {
    notFound();
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-20 bg-brand-purple">
        <motion.div style={{ y: heroY }} className="absolute inset-0 opacity-40">
          <img src={service.image} alt={`${service.title} Coimbatore`} className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/60 to-brand-purple" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <Link href="/services" className="inline-flex items-center text-brand-teal hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-xs">
              <ArrowLeft className="w-4 h-4 mr-2" /> All Services
            </Link>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-brand-teal rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-white/20"
            >
              {service.category} Specialist
            </motion.div>
            <RevealText>
              <h1 className="text-4xl md:text-7xl font-playfair font-black text-white mb-2 uppercase tracking-tighter leading-none">
                {service.title}
              </h1>
            </RevealText>
            <p className="text-xl md:text-3xl text-brand-teal font-black uppercase mb-8 tracking-widest">{service.tamilTitle}</p>
            <p className="text-xl md:text-2xl text-brand-lavender leading-relaxed font-light italic max-w-2xl">
              &quot;{service.shortDesc}&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative z-20 -mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Details */}
            <div className="lg:w-2/3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border border-gray-100 mb-12"
              >
                <div className="mb-12">
                   <h2 className="text-3xl font-playfair font-black text-gray-900 mb-2 uppercase tracking-tighter">Detailed Overview</h2>
                   <p className="text-brand-purple font-bold text-sm uppercase">விரிவான விளக்கம்</p>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  {service.longDesc}
                </p>

                <div className="mb-8">
                   <h3 className="text-xl font-black text-gray-900 mb-1 uppercase tracking-widest text-sm">Service Features</h3>
                   <p className="text-brand-teal font-bold text-[10px] uppercase">சேவை அம்சங்கள்</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature: string, idx: number) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-brand-teal/30 transition-all"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                      </div>
                      <span className="text-gray-700 font-bold uppercase tracking-tight text-xs leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Pricing Table */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900 text-white rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="mb-10">
                   <h2 className="text-3xl font-playfair font-black mb-1 uppercase tracking-tighter">Pricing Plans</h2>
                   <p className="text-brand-teal font-bold text-xs uppercase">விலைப்பட்டியல்</p>
                </div>
                <div className="space-y-4">
                  {service.pricing.map((plan: { name: string, price: string }, idx: number) => (
                    <div key={idx} className="flex justify-between items-center py-6 border-b border-white/10 last:border-0 group">
                      <span className="text-lg md:text-xl font-bold text-white/80 group-hover:text-white transition-colors">{plan.name}</span>
                      <span className="text-xl md:text-2xl font-black text-brand-teal">{plan.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Sticky Booking */}
            <div className="lg:w-1/3">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="sticky top-32 bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                  <HeartPulse className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="text-2xl font-black font-playfair text-gray-900 mb-1 uppercase tracking-tighter">Book Service</h3>
                <p className="text-brand-purple font-bold text-xs uppercase mb-4">சேவையை பதிவு செய்யவும்</p>
                <p className="text-gray-500 mb-10 font-medium leading-relaxed">Our experts are available 24/7 to provide compassionate care at your doorstep in Coimbatore.</p>
                
                <div className="space-y-4 mb-12">
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-5 p-5 bg-brand-purple/5 rounded-2xl border border-brand-purple/10">
                    <Phone className="w-6 h-6 text-brand-purple" />
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Call Now</p>
                       <p className="font-black text-gray-900 tracking-tight">+91 73589 61021</p>
                    </div>
                  </motion.div>
                </div>

                <Button className="w-full bg-brand-purple hover:bg-brand-teal text-white rounded-2xl py-8 text-lg font-black uppercase tracking-widest shadow-xl transition-all" asChild>
                  <Link href="/contact">Request Callback <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
