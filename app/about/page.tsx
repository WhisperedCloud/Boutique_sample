"use client";

import { motion } from "framer-motion";
import AnimatedContainer from "@/components/AnimatedContainer";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <AnimatedContainer variant="fade" className="text-center mb-32">
          <h4 className="text-luxury-gold font-bold tracking-[0.4em] uppercase text-xs mb-4">Our Legacy</h4>
          <h1 className="text-6xl md:text-8xl font-luxury luxury-gradient font-bold mb-8">The Art of <br /> Maison Boutique</h1>
          <p className="text-xl opacity-60 font-light max-w-3xl mx-auto leading-relaxed">
            Since our inception in 2024, Maison has stood at the intersection of avant-garde design and 
            traditional craftsmanship, curating a world where every thread tells a story of elegance.
          </p>
        </AnimatedContainer>

        {/* Story Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
           <AnimatedContainer variant="slideUp" className="relative h-[600px] rounded-3xl overflow-hidden glass-card !p-0">
              <Image 
                src="/uploads/sample8.jpg" 
                alt="Atelier" 
                fill 
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
           </AnimatedContainer>
           
           <AnimatedContainer variant="fade" delay={0.2} className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-luxury leading-tight">The Soul of the Atelier</h2>
              <p className="text-lg opacity-70 font-light leading-relaxed">
                Our workshop is more than a place of production; it is a laboratory of style. Here, our master 
                artisans combine centuries-old techniques with modern precision to create textiles that 
                transcend time.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                 <div>
                    <h4 className="text-luxury-gold font-bold uppercase tracking-widest text-xs mb-2">Heritage</h4>
                    <p className="text-sm opacity-50">Preserving the fine art of hand-weaving and natural dyeing.</p>
                 </div>
                 <div>
                    <h4 className="text-luxury-gold font-bold uppercase tracking-widest text-xs mb-2">Innovation</h4>
                    <p className="text-sm opacity-50">Exploration of technical fabrics and sustainable silhouettes.</p>
                 </div>
              </div>
           </AnimatedContainer>
        </div>

        {/* Philosophy Section */}
        <div className="mb-40 relative">
           <div className="absolute -top-20 -left-20 w-64 h-64 bg-luxury-pink/10 blur-[120px] rounded-full" />
           <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-luxury-gold/10 blur-[120px] rounded-full" />
           
           <AnimatedContainer variant="scale" className="text-center glass p-16 md:p-32 rounded-[4rem] relative z-10">
              <h3 className="text-3xl md:text-5xl font-luxury italic mb-12 leading-relaxed">
                "Luxury is not merely an acquisition; <br /> it is an experience of the soul."
              </h3>
              <div className="w-40 h-px bg-luxury-gold mx-auto mb-12 opacity-30" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                 {[
                   { label: "Founded", value: "2024" },
                   { label: "Artisans", value: "40+" },
                   { label: "Heritage", value: "Infinite" },
                 ].map((stat, i) => (
                   <div key={i}>
                      <p className="text-4xl font-luxury text-luxury-gold mb-2">{stat.value}</p>
                      <p className="text-xs uppercase tracking-widest opacity-50">{stat.label}</p>
                   </div>
                 ))}
              </div>
           </AnimatedContainer>
        </div>

        {/* Global Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-12">
           <AnimatedContainer variant="fade" className="space-y-8 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-luxury leading-tight text-glow">A Global Perspective</h2>
              <p className="text-lg opacity-70 font-light leading-relaxed">
                From the bustling streets of Paris to the quiet textile centers of Asia, we source the 
                absolute finest materials to ensure that Maison products are a testament to global excellence.
              </p>
              <div className="pt-6">
                 <button className="px-10 py-4 border border-luxury-gold/30 rounded-full font-bold hover:bg-luxury-gold hover:text-white transition-all shadow-xl shadow-gold/10">
                    OUR SUSTAINABILITY COMMITMENT
                 </button>
              </div>
           </AnimatedContainer>
           
           <AnimatedContainer variant="slideUp" delay={0.2} className="relative h-[600px] rounded-3xl overflow-hidden glass-card !p-0 order-1 lg:order-2">
              <Image 
                src="/uploads/sample7.jpg" 
                alt="Global Source" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
           </AnimatedContainer>
        </div>

      </div>
    </div>
  );
}
