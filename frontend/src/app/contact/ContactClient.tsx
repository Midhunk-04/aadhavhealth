"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight, ShieldCheck, Globe, Sparkles, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

export default function ContactClient() {
  const { register, handleSubmit, reset } = useForm();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const trackWhatsAppClick = () => {
    // Log event for analytics
    console.log("WhatsApp CTA Clicked");
    // If Gtag is present:
    // window.gtag('event', 'whatsapp_click', { 'event_category': 'engagement' });
  };

  const onSubmit = (data: Record<string, any>) => {
    console.log("Contact Data:", data);
    alert("Message sent successfully! Our team will get back to you shortly.");
    reset();
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-hidden pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-20 bg-brand-purple">
        <motion.div style={{ y: heroY }} className="absolute inset-0 opacity-20">
          <img src="/assets/medical-pattern.png" alt="Aadhav Health Support Pattern" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/60 to-brand-purple" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 text-brand-teal font-bold text-[10px] tracking-widest uppercase">
               24/7 Support Available
            </div>
            <RevealText>
              <h1 className="text-4xl md:text-7xl font-playfair font-black text-white mb-6 uppercase tracking-tighter">
                Contact <span className="text-brand-teal">Us.</span>
              </h1>
            </RevealText>
            <p className="text-brand-lavender text-lg md:text-2xl max-w-2xl mx-auto font-light italic">
              &quot;We&apos;re here to listen and provide the care your family deserves.&quot;
            </p>
          </motion.div>
        </div>
      </section>


      <section className="py-24 relative z-20 -mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Form */}
            <div className="lg:w-1/2">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full -mr-16 -mt-16" />
                <h2 className="text-3xl font-playfair font-black text-gray-900 mb-4 uppercase tracking-tighter">Send Message</h2>
                <p className="text-gray-500 mb-10 font-medium">Fill out the details below and we'll reach out promptly.</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name *</Label>
                      <Input id="name" {...register("name", { required: true })} placeholder="John Doe" className="h-14 rounded-2xl bg-gray-50 border-0 focus:ring-2 focus:ring-brand-purple" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone Number *</Label>
                      <Input id="phone" type="tel" {...register("phone", { required: true })} placeholder="+91" className="h-14 rounded-2xl bg-gray-50 border-0 focus:ring-2 focus:ring-brand-purple" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-[10px] font-black uppercase tracking-widest text-gray-400">Service Needed *</Label>
                      <select id="service" {...register("service", { required: true })} className="flex h-14 w-full rounded-2xl bg-gray-50 border-0 px-4 py-2 text-sm focus:ring-2 focus:ring-brand-purple">
                        <option value="">Select Service</option>
                        <option value="Elderly Care">Elderly Care</option>
                        <option value="Patient Care">Patient Care</option>
                        <option value="Baby Care">Baby/Postnatal Care</option>
                        <option value="Nursing">Nursing Services</option>
                        <option value="Physiotherapy">Physiotherapy</option>
                        <option value="Doctor Visit">Doctor Home Visit</option>
                        <option value="Other">Other Query</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-[10px] font-black uppercase tracking-widest text-gray-400">Preferred Time</Label>
                      <Input id="time" type="time" {...register("time")} className="h-14 rounded-2xl bg-gray-50 border-0 focus:ring-2 focus:ring-brand-purple" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-gray-400">How can we help? *</Label>
                    <Textarea id="message" {...register("message")} placeholder="Briefly describe your requirements..." className="resize-none h-32 rounded-2xl bg-gray-50 border-0 focus:ring-2 focus:ring-brand-purple" />
                  </div>

                  <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-teal text-white py-8 text-lg font-black uppercase tracking-widest rounded-2xl shadow-xl transition-all">Send Message <ArrowRight className="ml-2 w-5 h-5" /></Button>
                </form>
              </motion.div>
            </div>

            {/* Right Column: Info & Map */}
            <div className="lg:w-1/2">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
                <div>
                  <h2 className="text-3xl font-playfair font-black text-gray-900 mb-10 uppercase tracking-tighter">Contact Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { icon: <MapPin className="text-brand-purple" />, title: "Address", val: "D No 32 Alagiya Thruchitramb, Sundakkamuthur, Coimbatore." },
                      { icon: <Phone className="text-brand-teal" />, title: "Phone", val: "+91 73589 61021", link: "tel:+917358961021" },
                      { icon: <Mail className="text-pink-500" />, title: "Email", val: "aadhavhealthsupport@gmail.com", link: "mailto:aadhavhealthsupport@gmail.com" },
                      { icon: <Clock className="text-blue-500" />, title: "Availability", val: "24/7 Support & Bookings" }
                    ].map((item, i) => (
                      <motion.div key={i} whileHover={{ y: -5 }} className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-brand-purple/20 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">{item.icon}</div>
                        <h4 className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-2">{item.title}</h4>
                        {item.link ? (
                          <a href={item.link} className="text-gray-500 font-bold hover:text-brand-purple transition-colors line-clamp-2">{item.val}</a>
                        ) : (
                          <p className="text-gray-500 font-bold leading-relaxed">{item.val}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                   <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-2xl py-6 font-black uppercase tracking-widest shadow-lg" onClick={trackWhatsAppClick} asChild>
                      <a href="https://wa.me/917358961021" target="_blank" rel="noopener noreferrer"><MessageSquare className="w-5 h-5 mr-3" /> WhatsApp</a>
                   </Button>
                   <Button variant="outline" className="flex-1 border-gray-200 text-gray-700 rounded-2xl py-6 font-black uppercase tracking-widest hover:border-brand-purple" asChild>
                      <a href="tel:+917358961021"><Phone className="w-5 h-5 mr-3" /> Call Us</a>
                   </Button>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                  <h3 className="text-sm font-black text-brand-purple uppercase tracking-widest mb-4">Our Registered Office</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    Aadhav Health Support,<br />
                    D No 32 Alagiya Thruchitramb,<br />
                    Sundakkamuthur,<br />
                    Coimbatore, Tamil Nadu - 641010
                  </p>
                </div>

                <div className="rounded-[2.5rem] overflow-hidden border-8 border-gray-50 h-[350px] shadow-2xl relative group">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.897453535975!2d76.9405231!3d10.9711019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b0021c5f857%3A0x7d022d25cfcc3a46!2sSundakkamuthur%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" className="grayscale group-hover:grayscale-0 transition-all duration-1000"></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-100 shadow-xl pointer-events-none">
                     <span className="text-[10px] font-black uppercase tracking-widest text-brand-purple flex items-center gap-2"><Globe className="w-3 h-3" /> Coimbatore Hub</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
