"use client";

import { motion } from "framer-motion";
import AnimatedContainer from "@/components/AnimatedContainer";
import { Mail, Phone, MapPin, Globe, Share2, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-16">
            <AnimatedContainer variant="fade">
              <h4 className="text-luxury-gold font-bold tracking-[0.4em] uppercase text-xs mb-6">Concierge</h4>
              <h1 className="text-6xl md:text-7xl font-luxury luxury-gradient font-bold mb-8">Let's <br /> Connect</h1>
              <p className="text-lg opacity-60 font-light leading-relaxed max-w-md">
                Our dedicated concierge team is available to assist you with private acquisitions, 
                viewing requests, and bespoke enquiries.
              </p>
            </AnimatedContainer>

            <div className="space-y-10">
               {[
                 { icon: Globe, title: "Global HQ", info: "72 Avenue Montaigne, 75008 Paris" },
                 { icon: Phone, title: "Private Line", info: "+33 1 40 70 30 00" },
                 { icon: Mail, title: "Secretariat", info: "concierge@boutique.luxe" },
               ].map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-6"
                 >
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-white/5">
                       <item.icon className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <div>
                       <h3 className="font-luxury text-lg">{item.title}</h3>
                       <p className="opacity-50 text-sm font-light">{item.info}</p>
                    </div>
                 </motion.div>
               ))}
            </div>

            <div className="flex gap-4 pt-4">
               <div className="p-4 glass rounded-2xl hover:text-luxury-pink transition-colors cursor-pointer border border-white/5"><Share2 className="w-5 h-5" /></div>
               <div className="p-4 glass rounded-2xl hover:text-luxury-pink transition-colors cursor-pointer border border-white/5"><MessageSquare className="w-5 h-5" /></div>
            </div>
          </div>

          {/* Right Column: Form (Improved Visibility) */}
          <div className="lg:col-span-7">
            <AnimatedContainer variant="slideUp" delay={0.2} className="relative glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
               {/* Background Hint of image */}
               <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                  <Image src="/uploads/sample1.jpg" alt="bg" fill className="object-cover" />
               </div>

               <div className="relative z-10 space-y-10">
                  <div className="space-y-2">
                     <h2 className="text-3xl font-luxury">Enquiry Form</h2>
                     <p className="opacity-50 text-sm tracking-wide uppercase">Private Showroom Appointment</p>
                  </div>

                  <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase tracking-widest font-bold opacity-40 ml-2">Your Name</label>
                           <input 
                              type="text" 
                              className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-luxury-gold focus:outline-none transition-all placeholder:opacity-30"
                              placeholder="John Doe"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase tracking-widest font-bold opacity-40 ml-2">Email Address</label>
                           <input 
                              type="email" 
                              className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-luxury-gold focus:outline-none transition-all placeholder:opacity-30"
                              placeholder="john@example.com"
                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-40 ml-2">Select Interest</label>
                        <select className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-luxury-gold focus:outline-none transition-all appearance-none cursor-pointer">
                           <option>Bespoke Tailoring</option>
                           <option>Home Textile Consultation</option>
                           <option>Viewing Appointment</option>
                           <option>Other</option>
                        </select>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-40 ml-2">Message</label>
                        <textarea 
                           rows={5}
                           className="w-full bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-luxury-gold focus:outline-none transition-all resize-none placeholder:opacity-30"
                           placeholder="Describe your request..."
                        />
                     </div>

                     <button className="w-full bg-luxury-gold text-white font-bold tracking-[0.2em] py-6 rounded-2xl shadow-xl shadow-gold/20 hover:scale-[1.01] active:scale-95 transition-all text-sm uppercase">
                        Submit Enquiry
                     </button>
                  </form>
               </div>
            </AnimatedContainer>
          </div>

        </div>
      </div>
    </div>
  );
}
