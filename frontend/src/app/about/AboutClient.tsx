"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Heart, Sparkles, Target, Eye, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

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

export default function AboutClient() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gray-50">
        <motion.div style={{ y }} className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url(/assets/medical-pattern.png)] bg-repeat" />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-8 text-brand-purple font-bold text-xs tracking-widest uppercase">
               Since 2024
            </div>
            <h1 className="text-4xl md:text-7xl font-playfair font-black text-gray-900 mb-6 tracking-tighter">
              Our <span className="text-brand-purple">Story.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed italic">
              &quot;Healing happens best where the heart is — at home.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <RevealText>
                <h2 className="text-3xl md:text-5xl font-playfair font-black text-gray-900 mb-8 leading-tight">
                  Born from a <br />Profound <span className="text-brand-teal">Purpose.</span>
                </h2>
              </RevealText>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed mb-8"
              >
                Aadhav Health Support was established in Coimbatore with a simple yet powerful mission: to redefine home healthcare through a perfect blend of **unmatched professionalism** and **heartfelt empathy**.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-brand-purple/5 border border-brand-purple/10"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-purple text-white flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-bold text-gray-900 uppercase tracking-widest text-sm">Patient-Centric Approach</p>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative"
            >
              <img src="/assets/why-us.png" alt="Aadhav Care Team Coimbatore" className="rounded-[3rem] shadow-2xl w-full" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-teal/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-brand-purple text-white rounded-[3rem] p-12 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
              <Target className="w-16 h-16 text-brand-teal mb-8" />
              <h2 className="text-3xl md:text-4xl font-playfair font-black mb-6 uppercase tracking-tighter">Our Mission</h2>
              <p className="text-xl text-brand-lavender leading-relaxed font-light italic">
                To provide high-quality, accessible, and compassionate home healthcare services that enhance the quality of life for our clients and bring peace of mind to their families.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
              <Eye className="w-16 h-16 text-brand-teal mb-8" />
              <h2 className="text-3xl md:text-4xl font-playfair font-black text-gray-900 mb-6 uppercase tracking-tighter">Our Vision</h2>
              <p className="text-xl text-gray-500 leading-relaxed font-light italic">
                To become the most trusted and preferred home healthcare provider in Tamil Nadu, recognized for our commitment to excellence, integrity, and patient-centric care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="md:w-1/2">
              <RevealText>
                <h2 className="text-3xl md:text-5xl font-playfair font-black text-gray-900 mb-8 leading-tight uppercase tracking-tighter">
                  Our Professional <span className="text-brand-purple">Care Team.</span>
                </h2>
              </RevealText>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our team consists of verified, trained, and highly experienced nurses, physiotherapists, and caregivers. Each member is selected not just for their medical skills, but for their heart.
              </p>
              <div className="space-y-4">
                {["Certified Nurses", "Knowledgeable Physiotherapists", "Compassionate Caregivers", "24/7 Support Staff"].map((item, i) => (
                   <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 font-bold uppercase tracking-widest text-xs"
                   >
                     <div className="w-2 h-2 rounded-full bg-brand-teal" />
                     {item}
                   </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative">
                <img src="/assets/team.png" alt="Aadhav Health Support Professional Team" className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-brand-purple/20 rounded-[3rem] mix-blend-overlay pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-12 md:p-20 rounded-[3rem] border border-gray-100 shadow-2xl max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-black text-gray-900 mb-8 tracking-tighter uppercase">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-500 mb-12 font-medium">
              Experience healthcare that truly cares. Let&apos;s discuss how we can support your family.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-purple text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-teal transition-all shadow-xl hover:-translate-y-1">
              Contact Us Now <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
