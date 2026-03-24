"use client";

import { motion } from "framer-motion";
import AnimatedContainer from "@/components/AnimatedContainer";
import Image from "next/image";
import { Star, Shield, Truck, RefreshCcw, Heart } from "lucide-react";

import { use } from "react";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Section */}
        <AnimatedContainer variant="fade" className="space-y-6">
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden glass">
              <Image
                src="/uploads/sample1.jpg"
                alt="Product"
                fill
                className="object-cover"
              />
           </div>
           <div className="grid grid-cols-4 gap-4">
              {[1,2,3,4].map(i => (
                 <div key={i} className="aspect-square relative rounded-xl overflow-hidden glass cursor-pointer hover:border-luxury-gold border-2 border-transparent transition-all">
                    <Image src="/uploads/sample1.jpg" alt="product small" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity" />
                 </div>
              ))}
           </div>
        </AnimatedContainer>

        {/* Info Section */}
        <div className="space-y-10">
          <AnimatedContainer variant="slideUp">
            <p className="text-luxury-gold font-bold uppercase tracking-widest text-sm mb-2">Exclusive Collection</p>
            <h1 className="text-5xl md:text-6xl font-luxury font-bold mb-4">Velvet Night Gown</h1>
          </AnimatedContainer>

          <AnimatedContainer delay={0.1} variant="slideUp" className="space-y-6">
            <p className="opacity-70 leading-relaxed font-light text-lg">
              Crafted from the finest Italian velvet, this evening gown combines timeless silhouettes with modern luxury. Each piece is hand-finished in our atelier to ensure unparalleled quality and fit.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest">Select Size</h4>
              <div className="flex gap-4">
                {["XS", "S", "M", "L", "XL"].map(size => (
                  <button key={size} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-luxury-gold transition-all">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-6 items-center pt-8">
              <button className="flex-1 border border-luxury-gold text-luxury-gold py-5 rounded-2xl font-bold text-lg hover:bg-luxury-gold hover:text-white transition-all active:scale-95">
                ENQUIRE NOW
              </button>
              <button className="w-16 h-16 rounded-2xl border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors">
                 <Heart className="w-6 h-6" />
              </button>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2} variant="fade" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/10">
            <div className="flex items-center gap-4">
               <Shield className="w-6 h-6 text-luxury-gold" />
               <div>
                 <p className="text-sm font-bold">Safe Payments</p>
                 <p className="text-xs opacity-50">100% Secure Transaction</p>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <Truck className="w-6 h-6 text-luxury-gold" />
               <div>
                 <p className="text-sm font-bold">Global Shipping</p>
                 <p className="text-xs opacity-50">Complimentary over $500</p>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <RefreshCcw className="w-6 h-6 text-luxury-gold" />
               <div>
                 <p className="text-sm font-bold">Easy Returns</p>
                 <p className="text-xs opacity-50">30-day luxury returns</p>
               </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  );
}
