"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, MapPin, AlertCircle, ShieldCheck, Heart, Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pricingData = {
  nonMedical: [
    {
      title: "Elderly Care",
      tamilTitle: "முதியோர் பராமரிப்பு",
      description: "Daily assistance, medication reminders, and companionship for seniors.",
      rates: [
        { label: "12 Hours (Day/Night)", price: "₹800 - ₹1,200", unit: "per day" },
        { label: "24 Hours (Stay-in)", price: "₹18,000 - ₹25,000", unit: "per month" }
      ],
      color: "border-brand-purple/20",
      iconColor: "text-brand-purple"
    },
    {
      title: "Patient Care",
      tamilTitle: "நோயாளி பராமரிப்பு",
      description: "Support for feeding, bathing, bed care, and mobility for recovering patients.",
      rates: [
        { label: "12 Hours (Day/Night)", price: "₹900 - ₹1,300", unit: "per day" },
        { label: "24 Hours (Stay-in)", price: "₹20,000 - ₹28,000", unit: "per month" }
      ],
      color: "border-brand-teal/20",
      iconColor: "text-brand-teal"
    },
    {
      title: "Postnatal Care",
      tamilTitle: "குழந்தை கவனிப்பு",
      description: "Specialized care for newborns and mothers, including massage and feeding support.",
      rates: [
        { label: "12 Hours Babysitting", price: "₹700 - ₹1,200", unit: "per day" },
        { label: "24 Hours Babysitting", price: "₹16,000 - ₹26,000", unit: "per month" },
        { label: "Mother & Baby (Daily)", price: "₹1,000 - ₹1,500", unit: "per day" },
        { label: "Mother & Baby (Monthly)", price: "₹25,000 - ₹40,000", unit: "per month" }
      ],
      color: "border-indigo-200",
      iconColor: "text-indigo-600"
    }
  ],
  medical: [
    {
      title: "Nursing Services",
      tamilTitle: "நர்சிங் சேவைகள்",
      items: [
        { label: "Injection", price: "₹150 - ₹300" },
        { label: "IV Drip", price: "₹500 - ₹1,000" },
        { label: "Wound Dressing", price: "₹300 - ₹800" },
        { label: "BP / Sugar Check", price: "₹100 - ₹200" },
        { label: "12 Hours Nurse", price: "₹1,200 - ₹2,000" },
        { label: "24 Hours Nurse", price: "₹30,000 - ₹45,000" }
      ]
    },
    {
      title: "Physiotherapy at Home",
      tamilTitle: "பிசியோதெரபி இல்ல சேவை",
      items: [
        { label: "Per Session", price: "₹500 - ₹1,200" },
        { label: "Monthly Package", price: "₹10,000 - ₹25,000" }
      ]
    },
    {
      title: "Doctor Home Visit",
      tamilTitle: "மருத்துவர் இல்ல வருகை",
      items: [
        { label: "Per Visit", price: "₹500 - ₹1,500" }
      ]
    }
  ],
  extraCharges: [
    { label: "Travel Charge", price: "₹50 - ₹200", icon: <MapPin className="w-5 h-5" /> },
    { label: "Emergency Visit", price: "+₹200 - ₹500", icon: <AlertCircle className="w-5 h-5" /> },
    { label: "Festival Days", price: "Extra ₹200 - ₹500", icon: <Star className="w-5 h-5" /> },
    { label: "Replacement Staff", price: "Free / ₹200", icon: <Plus className="w-5 h-5" /> }
  ]
};

export default function PricingClient() {
  return (
    <div className="min-h-screen bg-[#FDFCFE] pb-32">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-48 bg-brand-purple overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-brand-teal/20 text-brand-teal text-xs font-bold tracking-widest uppercase mb-6">
              Official Price List 2024
            </span>
            <h1 className="text-5xl md:text-8xl font-playfair font-black text-white mb-6 uppercase tracking-tighter">
              Transparent <span className="text-brand-teal">Pricing.</span>
            </h1>
            <p className="text-brand-lavender text-xl md:text-2xl max-w-2xl mx-auto font-medium italic opacity-90">
              &quot;Honest rates for honest care | நேர்மையான விலையில் சிறந்த கவனிப்பு.&quot;
            </p>
          </motion.div>
        </div>
        
        {/* Floating Abstract Shapes */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-brand-lavender/10 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-24 relative z-30">
        
        {/* A. Non-Medical Services */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-grow bg-gray-200"></div>
            <h2 className="text-2xl font-playfair font-black text-brand-purple uppercase tracking-tight px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              Non-Medical Home Care
            </h2>
            <div className="h-[1px] flex-grow bg-gray-200"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingData.nonMedical.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white rounded-[2.5rem] p-10 shadow-xl border ${service.color} hover:shadow-2xl transition-all duration-500`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-black font-playfair text-brand-purple mb-1">{service.title}</h3>
                  <p className="text-sm font-medium text-brand-teal mb-4">{service.tamilTitle}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-4 mb-10">
                  {service.rates.map((rate, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{rate.label}</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-brand-purple">{rate.price}</span>
                        <span className="text-[10px] font-medium text-gray-400 italic">{rate.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-brand-purple hover:bg-brand-teal text-white rounded-xl py-6 font-bold uppercase tracking-widest text-[10px] transition-all" asChild>
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* B. Medical Services */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-grow bg-gray-200"></div>
            <h2 className="text-2xl font-playfair font-black text-brand-purple uppercase tracking-tight px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              Medical Home Care
            </h2>
            <div className="h-[1px] flex-grow bg-gray-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingData.medical.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-gray-100"
              >
                <div className="mb-8 text-center">
                  <h3 className="text-xl font-black font-playfair text-brand-purple mb-1">{service.title}</h3>
                  <p className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">{service.tamilTitle}</p>
                </div>
                
                <div className="space-y-3">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                        <span className="text-xs font-semibold text-gray-600">{item.label}</span>
                      </div>
                      <span className="text-sm font-black text-brand-purple">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extra Charges Grid */}
        <div className="mb-20 bg-brand-purple rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Clock className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-playfair font-black mb-10 uppercase tracking-tighter">Extra Charges <span className="text-brand-teal text-lg ml-4 tracking-normal font-medium opacity-80">(கூடுதல் கட்டணங்கள்)</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingData.extraCharges.map((charge, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-brand-teal rounded-xl flex items-center justify-center">
                    {charge.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-lavender mb-1">{charge.label}</p>
                    <p className="text-lg font-black">{charge.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes & Our Promise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Notes */}
          <div className="bg-gray-50 rounded-[2.5rem] p-12 border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle className="w-6 h-6 text-brand-purple" />
              <h3 className="text-xl font-black font-playfair text-brand-purple uppercase tracking-tight">Important Notes</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Rates may vary based on location & specific needs.",
                "Advance payment of 25% is required for booking.",
                "Cancellations must be made 24 hours in advance.",
                "GST applicable as per government norms."
              ].map((note, i) => (
                <li key={i} className="flex items-start gap-3 text-xs font-medium text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 shrink-0"></span>
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* Promise */}
          <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl border border-brand-teal/10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-6 h-6 text-brand-teal" />
              <h3 className="text-xl font-black font-playfair text-brand-purple uppercase tracking-tight">Our Promise</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Trusted Service", icon: <ShieldCheck className="w-5 h-5" /> },
                { title: "Compassionate Care", icon: <Heart className="w-5 h-5" /> },
                { title: "Safety Assured", icon: <Star className="w-5 h-5" /> },
                { title: "Expert Support", icon: <CheckCircle2 className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-tight">{item.title}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-brand-lavender/30 rounded-2xl border border-brand-lavender">
              <p className="text-xs font-bold text-brand-purple uppercase tracking-widest text-center">
                Need a Custom Quote?
              </p>
              <Button className="w-full mt-4 bg-brand-purple hover:bg-brand-teal text-white rounded-xl py-6 font-bold uppercase tracking-widest text-[10px]" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

