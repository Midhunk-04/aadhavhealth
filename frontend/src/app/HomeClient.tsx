"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, HeartPulse, ShieldCheck, Star, Users, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";

function Counter({ value, duration = 2 }: { value: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const end = parseInt(value);
      if (isNaN(end)) return;
      let start = 0;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{value.includes("+") ? "+" : ""}</span>;
}

export default function HomeClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroImageY = useTransform(scrollYProgress, [0, 0.3], [0, 80]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/917358961021" 
          target="_blank"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg text-white"
        >
          <Phone className="w-6 h-6 fill-white" />
        </motion.a>
      </div>

      {/* Hero Section - Clean Professional */}
      <section className="relative min-h-[85vh] flex items-center pt-24 lg:pt-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-block px-4 py-2 bg-brand-purple/5 text-brand-purple rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-brand-purple/10">
                  Trusted Home Care in Coimbatore
                </div>
                
                <h1 className="text-4xl md:text-6xl font-playfair font-black text-brand-purple leading-tight mb-8">
                  Care with Trust & <br />
                  <span className="text-brand-teal">Compassion.</span>
                </h1>

                <div className="mb-10">
                   <p className="text-2xl md:text-3xl text-brand-teal font-black uppercase tracking-widest leading-none mb-4">
                     &quot;உங்களின் குடும்பத்தின் நலம் <br /> எங்கள் பொறுப்பு!&quot;
                   </p>
                   <p className="text-gray-500 max-w-lg mx-auto lg:mx-0 text-base leading-relaxed italic">
                     Professional home healthcare services in Coimbatore. Delivering expert medical support with a deeply human touch.
                   </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Link href="/services">
                    <Button className="bg-brand-purple hover:bg-brand-teal text-white rounded-2xl px-10 py-7 font-black uppercase tracking-widest text-[10px] shadow-xl">
                      Our Services <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white rounded-2xl px-10 py-7 font-black uppercase tracking-widest text-[10px]">
                      Book Consultation
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div style={{ y: heroImageY }} className="flex-1 relative w-full lg:max-w-xl">
               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10">
                 <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                    <img src="/assets/hero-bg.png" alt="Aadhav Home Care Services Coimbatore" className="w-full h-auto object-cover" />
                 </div>
                 <div className="absolute -bottom-6 -left-6 bg-brand-purple p-6 rounded-3xl shadow-xl text-white z-20 flex items-center gap-4">
                    <p className="text-3xl font-black font-playfair tracking-tighter"><Counter value="500" />+</p>
                    <div className="h-8 w-[1px] bg-white/20" />
                    <p className="text-[8px] font-black uppercase tracking-widest opacity-70 leading-tight">Families <br /> Trusted</p>
                 </div>
               </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "500+", label: "Families Served", sub: "நம்பிக்கையான சேவை" },
              { num: "50+", label: "Professionals", sub: "சிறந்த பணியாளர்கள்" },
              { num: "24/7", label: "Care Support", sub: "எந்நேரமும் சேவை" },
              { num: "100%", label: "Satisfaction", sub: "முழுமையான திருப்தி" }
            ].map((stat, i) => (
              <motion.div key={i} className="flex flex-col items-center text-center p-6 rounded-3xl bg-gray-50/50">
                <span className="text-4xl font-black text-brand-purple mb-2 font-playfair tracking-tighter"><Counter value={stat.num} /></span>
                <span className="text-[10px] text-gray-900 font-black uppercase tracking-widest mb-1">{stat.label}</span>
                <span className="text-[8px] text-gray-400 font-bold uppercase">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Top 3 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-playfair font-black text-brand-purple mb-4 uppercase tracking-tighter">Our Top Services</h2>
          <div className="h-1.5 bg-brand-teal w-12 mx-auto rounded-full" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {services.slice(0, 3).map((service, index) => (
              <motion.div key={index} whileHover={{ y: -8 }} className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col group overflow-hidden">
                <Link href={`/services/${service.slug}`}>
                  <div className="relative h-60 overflow-hidden">
                    <img src={service.image} alt={`${service.title} Home Care Coimbatore`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-10">
                    <h3 className="text-xl font-black text-brand-purple mb-1 uppercase tracking-tight">{service.title}</h3>
                    <p className="text-brand-teal font-bold text-[10px] uppercase mb-6">{service.tamilTitle}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">{service.shortDesc}</p>
                    <div className="flex items-center gap-3 text-brand-purple font-black text-[9px] uppercase tracking-widest">Details <ArrowRight className="w-4 h-4" /></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
             <Link href="/services">
                <Button variant="outline" className="border-2 border-brand-purple text-brand-purple rounded-2xl px-12 py-8 font-black uppercase tracking-widest text-xs">
                   View All Services
                </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                 <img src="/assets/why-us.png" alt="Aadhav Health Support Quality Care Coimbatore" className="w-full h-[500px] object-cover" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-playfair font-black text-brand-purple mb-12 uppercase tracking-tighter">Why Choose <br /> <span className="text-brand-teal">Aadhav Health.</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Bilingual Staff", desc: "Expert staff proficient in Tamil and English.", icon: <Sparkles className="w-6 h-6 text-brand-teal" /> },
                  { title: "24/7 Monitoring", desc: "Around-the-clock patient care and monitoring.", icon: <HeartPulse className="w-6 h-6 text-brand-purple" /> },
                  { title: "Verified Experts", desc: "Background-checked and certified professionals.", icon: <ShieldCheck className="w-6 h-6 text-brand-teal" /> },
                  { title: "Honest Pricing", desc: "Fair and transparent rates for all services.", icon: <Star className="w-6 h-6 text-brand-purple" /> }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-black text-brand-purple mb-1 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Marquee Section - Violet Background */}
      <section className="py-20 bg-brand-purple relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img src="/assets/medical-pattern.png" alt="Pattern" className="w-full h-full object-cover grayscale invert" />
        </div>
        <div className="container mx-auto px-4 mb-12 text-center relative z-10">
           <p className="text-brand-teal font-black text-[10px] uppercase tracking-[0.4em] mb-4">Real Patient Stories</p>
           <h2 className="text-3xl md:text-5xl font-playfair font-black text-white uppercase tracking-tighter">What Our Families Say</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden border-y border-white/10 py-10">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-12"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12">
                {[
                  { text: "Aadhav Health Support provided excellent care for my mother. Highly professional!", author: "Ram Kumar", loc: "Coimbatore" },
                  { text: "சிறந்த சேவை! எனது தந்தைக்கு பிசியோதெரபி சிகிச்சை மிகவும் பயனுள்ளதாக இருந்தது.", author: "Priya S.", loc: "Pollachi" },
                  { text: "Very reliable baby care service. They handled my newborn with so much love.", author: "Deepa", loc: "Tirupur" },
                  { text: "Professional nurses and punctual staff. Best home healthcare in Erode.", author: "Suresh", loc: "Erode" },
                  { text: "நேர்மையான விலை மற்றும் சிறந்த கவனிப்பு. மிக்க நன்றி ஆதவ் ஹெல்த்!", author: "Anitha", loc: "Mettupalayam" }
                ].map((rev, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] w-[400px] whitespace-normal">
                    <p className="text-brand-lavender text-lg font-medium italic mb-6">&quot;{rev.text}&quot;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-brand-purple font-black text-[10px]">{rev.author[0]}</div>
                      <div>
                        <p className="text-white font-black text-[10px] uppercase tracking-widest">{rev.author}</p>
                        <p className="text-brand-teal font-bold text-[8px] uppercase tracking-widest">{rev.loc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas Bar */}
      <section className="py-12 bg-brand-lavender/30 border-y border-brand-lavender">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-purple/40 mb-6">Serving Major Regions In Tamil Nadu</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {["Coimbatore", "Tirupur", "Pollachi", "Erode", "Mettupalayam", "Avinashi"].map((area, i) => (
              <div key={i} className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-teal" />
                <span className="text-sm font-black text-brand-purple uppercase tracking-widest">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-playfair font-black text-brand-purple mb-10 uppercase tracking-tighter">Your Care, <br /> Our Commitment.</h2>
          <div className="flex flex-wrap justify-center gap-6">
             <Link href="/contact"><Button className="px-14 py-8 rounded-2xl bg-brand-purple text-white font-black uppercase tracking-widest text-[10px] shadow-xl">Get in Touch</Button></Link>
             <Link href="tel:+917358961021"><Button variant="outline" className="px-14 py-8 rounded-2xl border-2 border-brand-purple text-brand-purple font-black uppercase tracking-widest text-[10px]">Call Now</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
