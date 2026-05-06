"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, HeartHandshake, Briefcase, ArrowRight, CheckCircle2, Home, Users, Stethoscope, Banknote, BookOpen, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const benefits = [
  { title: "Good Income", tamil: "நல்ல வருமானம்", icon: <Banknote className="w-6 h-6" /> },
  { title: "Free Training", tamil: "பயிற்சி வழங்கப்படும்", icon: <BookOpen className="w-6 h-6" /> },
  { title: "Accommodation", tamil: "தங்கும் வசதி", icon: <Home className="w-6 h-6" /> },
  { title: "Honest Work", tamil: "நேர்மையான வேலை", icon: <CheckCircle2 className="w-6 h-6" /> },
  { title: "Immediate Join", tamil: "உடனடி நியமனம்", icon: <Clock className="w-6 h-6" /> }
];

const roles = [
  {
    title: "Elderly Care",
    tamil: "முதியோர் பராமரிப்பு",
    icon: <Users className="w-8 h-8" />,
    tasks: ["Daily Assistance", "Medication Support", "Food Help", "Personal Care"],
    color: "bg-indigo-50",
    textColor: "text-indigo-600"
  },
  {
    title: "Patient Care Specialist",
    tamil: "நோயாளி பராமரிப்பு",
    icon: <Briefcase className="w-8 h-8" />,
    tasks: ["Bedside Care", "Vital Monitoring", "Post-Surgery Support", "Feeding Help"],
    color: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    title: "Newborn & Mother Care",
    tamil: "குழந்தை மற்றும் தாய் கவனிப்பு",
    icon: <HeartHandshake className="w-8 h-8" />,
    tasks: ["Baby Massage", "Bathing Support", "Mother Recovery", "Safe Monitoring"],
    color: "bg-pink-50",
    textColor: "text-pink-600"
  },
  {
    title: "Home Nurse (Staff Nurse)",
    tamil: "ஹோம் நர்ஸ்",
    icon: <Stethoscope className="w-8 h-8" />,
    tasks: ["Injection / IV Drip", "Wound Dressing", "Catheter Care", "BP / Sugar Check"],
    color: "bg-teal-50",
    textColor: "text-brand-teal"
  },
  {
    title: "Physiotherapist",
    tamil: "பிசியோதெரபிஸ்ட்",
    icon: <GraduationCap className="w-8 h-8" />,
    tasks: ["Pain Relief", "Post Surgery Rehab", "Stroke Recovery", "Mobility Support"],
    color: "bg-purple-50",
    textColor: "text-brand-purple"
  }
];

export default function CareersClient() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm();
  
  const toBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve((reader.result as string).split(',')[1]);
    reader.onerror = error => reject(error);
  });

  const onSubmit = async (data: Record<string, any>) => {
    try {
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwmpQqmQZjQy3YR-0sUKl1rDBcpkEcEmFRbZ498jnlLuiCPlZqBkU-qztN1MJSXNlE2/exec";
      
      let payload: Record<string, any> = {
        ...data,
        formType: "career",
        timestamp: new Date().toISOString(),
      };

      if (data.resume && data.resume[0]) {
        const file = data.resume[0];
        const base64 = await toBase64(file);
        payload.resumeBase64 = base64;
        payload.resumeName = file.name;
        payload.resumeType = file.type;
        delete payload.resume;
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      setShowSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-brand-teal font-black text-xs uppercase tracking-widest mb-4 block">We Are Hiring / நாங்கள் வேலைக்கு ஆட்களை தேடுகிறோம்</span>
            <h1 className="text-6xl md:text-9xl font-playfair font-black text-brand-purple mb-8 uppercase tracking-tighter leading-none">
              Build Your <span className="text-brand-teal italic">Future.</span>
            </h1>
            <div className="bg-brand-purple text-white inline-block px-8 py-4 rounded-2xl rotate-[-2deg] shadow-xl">
               <p className="text-xl md:text-2xl font-bold">பெண்கள் வேலைக்கு உடனே தரப்படும்!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 max-w-7xl mx-auto">
             {benefits.map((benefit, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all"
               >
                 <div className="w-12 h-12 bg-brand-lavender/50 rounded-xl flex items-center justify-center text-brand-purple mb-4 group-hover:scale-110 transition-transform">
                   {benefit.icon}
                 </div>
                 <h4 className="text-sm font-black text-brand-purple uppercase tracking-tight">{benefit.title}</h4>
                 <p className="text-[10px] font-bold text-brand-teal mt-1">{benefit.tamil}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Role Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-black text-brand-purple uppercase tracking-tighter">Available Positions</h2>
            <p className="text-gray-400 font-medium italic mt-2">Join our compassionate team of health supporters.</p>
          </div>
          
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
             {roles.map((role, i) => (
               <motion.div 
                 key={i} 
                 whileHover={{ y: -10 }} 
                 className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-start"
               >
                 <div className={`w-14 h-14 ${role.color} ${role.textColor} rounded-2xl flex items-center justify-center mb-6`}>
                   {role.icon}
                 </div>
                 <h3 className="text-xl font-black font-playfair text-brand-purple mb-1 uppercase tracking-tight">{role.title}</h3>
                 <p className="text-brand-teal font-bold text-[10px] uppercase tracking-widest mb-6">{role.tamil}</p>
                 
                 <div className="space-y-3 w-full mb-8">
                   {role.tasks.map((task, idx) => (
                     <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-teal"></div>
                        {task}
                     </div>
                   ))}
                 </div>

                 <Link 
                   href="#apply-form" 
                   onClick={(e) => {
                     e.preventDefault();
                     document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                   className="mt-auto flex items-center gap-2 text-brand-purple font-black text-[10px] uppercase tracking-widest cursor-pointer hover:gap-4 transition-all"
                 >
                   Apply Now <ArrowRight className="w-4 h-4" />
                 </Link>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-24 bg-brand-purple relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-lavender/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="bg-white p-8 md:p-16 rounded-[3.5rem] shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-16">
             <div>
                <h2 className="text-4xl md:text-6xl font-playfair font-black text-brand-purple mb-6 uppercase tracking-tighter leading-none">Ready to <span className="text-brand-teal italic">Start?</span></h2>
                <p className="text-gray-500 mb-8 font-medium leading-relaxed">
                  Your journey towards a rewarding career starts here. Fill out the form and our recruitment team will get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                     <div className="w-10 h-10 bg-brand-teal rounded-xl flex items-center justify-center text-white">
                        <Users className="w-5 h-5" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase text-gray-400">Join Over</p>
                        <p className="text-sm font-black text-brand-purple">50+ Support Staff</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                     <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center text-white">
                        <CheckCircle2 className="w-5 h-5" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase text-gray-400">Verified</p>
                        <p className="text-sm font-black text-brand-purple">Trusted Employer</p>
                     </div>
                  </div>
                </div>
             </div>

             {showSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 p-12 rounded-[2.5rem] border-2 border-dashed border-brand-teal/20 text-center"
                >
                  <div className="w-20 h-20 bg-brand-teal text-white rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3 shadow-xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-playfair font-black text-brand-purple mb-4 uppercase tracking-tighter">Application Sent!</h3>
                  <p className="text-gray-500 font-medium mb-10 max-w-xs mx-auto">Thank you for your interest. Our recruitment team will review your profile and contact you within 24 hours.</p>
                  <Button 
                    onClick={() => setShowSuccess(false)}
                    className="bg-brand-purple hover:bg-brand-teal text-white px-10 py-6 rounded-xl font-black uppercase tracking-widest text-[10px]"
                  >
                    Submit Another Application
                  </Button>
                </motion.div>
             ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                        <input {...register("name", { required: true })} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-purple transition-all outline-none" required placeholder="Ex: Priya Lakshmi" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                        <input {...register("phone", { required: true })} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-purple transition-all outline-none" required placeholder="91XXXXXXXX" />
                     </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                      <input {...register("email", { required: true })} type="email" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-purple transition-all outline-none" required placeholder="priya@example.com" />
                   </div>

                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Applying for Role</label>
                      <select {...register("role")} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-purple transition-all outline-none">
                         <option>Elderly Care</option>
                         <option>Child Care</option>
                         <option>Home Nurse</option>
                         <option>Physiotherapist</option>
                      </select>
                   </div>

                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Upload Resume (PDF/DOC)</label>
                      <div className="relative group">
                        <input 
                          {...register("resume", { required: true })} 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          className="w-full bg-gray-50 border border-dashed border-gray-300 rounded-2xl px-6 py-8 text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:bg-brand-purple file:text-white hover:border-brand-teal transition-all cursor-pointer" 
                          required 
                        />
                      </div>
                   </div>

                   <Button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full bg-brand-teal hover:bg-brand-purple text-white py-8 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                     {isSubmitting ? "Submitting..." : "Submit Application"}
                   </Button>
                </form>
             )}
          </div>
        </div>
      </section>
    </div>
  );
}


