"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem("newsletter-seen");
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("newsletter-seen", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass rounded-3xl overflow-hidden shadow-2xl p-10 text-center space-y-8"
          >
            <button onClick={closePopup} className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full">
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto">
               <Mail className="w-8 h-8 text-luxury-gold" />
            </div>

            <div className="space-y-2">
               <h2 className="text-3xl font-luxury font-bold">The Insider Circle</h2>
               <p className="opacity-60 font-light">Join our elite network for early access to limited collections and private trunk shows.</p>
            </div>

            <div className="space-y-4">
               <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-luxury-gold text-center"
               />
               <button className="w-full bg-luxury-gold text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform active:scale-95">
                  SUBSCRIBE NOW
               </button>
            </div>

            <p className="text-[10px] opacity-30 uppercase tracking-widest">No spam, only excellence.</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
