"use client";

import { motion } from "framer-motion";
import AnimatedContainer from "@/components/AnimatedContainer";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";
import CollectionCard from "@/components/CollectionCard";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0}}
            animate={{ scale: 1, opacity: theme === "dark" ? 0.3 : 0.15 }}
            transition={{ duration: 2 }}
            className="relative w-full h-full"
          >
            <Image
              src="/uploads/sample1.jpg"
              alt="Hero"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4">
          <AnimatedContainer variant="fade">
            <h1 className="text-6xl md:text-8xl font-luxury luxury-gradient font-bold mb-6 tracking-tighter">
              Timeless Elegance
            </h1>
          </AnimatedContainer>
          
          <AnimatedContainer delay={0.2}>
            <p className="text-lg md:text-xl opacity-70 mb-10 max-w-2xl mx-auto font-light tracking-wide">
              Discover a curated collection of premium textiles and luxury essentials 
              designed for the modern lifestyle.
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/shop"
                className="group relative px-8 py-4 bg-luxury-gold text-background rounded-full font-bold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] dark:hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  SHOP COLLECTION <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
              <Link
                href="/about"
                className="group relative px-8 py-4 border border-luxury-gold/30 rounded-full font-bold overflow-hidden transition-all duration-500 hover:scale-105 hover:border-luxury-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
              >
                <span className="relative z-10">OUR STORY</span>
                <div className="absolute inset-0 bg-luxury-gold/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
            </div>
          </AnimatedContainer>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        >
          <div className="w-px h-20 bg-luxury-gold mx-auto" />
          <p className="text-[10px] uppercase tracking-widest mt-4">Scroll</p>
        </motion.div>
      </section>

      {/* Signature Collections */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer className="text-center mb-16">
          <h4 className="text-luxury-gold font-bold tracking-[0.4em] uppercase text-xs mb-4">Curated Stories</h4>
          <h2 className="text-4xl md:text-6xl font-luxury font-bold">Signature Collections</h2>
        </AnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CollectionCard 
            index={0}
            title="Iconic Evening"
            subtitle="The Gala Edit"
            image="/uploads/sample1.jpg"
            href="/shop?collection=evening"
          />
          <CollectionCard 
            index={1}
            title="Heritage Silk"
            subtitle="Timeless Craft"
            image="/uploads/sample7.jpg"
            href="/shop?collection=heritage"
          />
        </div>
      </section>

      {/* Atelier highlights */}
      <section className="py-24 bg-black/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <AnimatedContainer className="max-w-xl">
                 <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">Atelier <br /> Highlights</h2>
                 <p className="opacity-60 font-light text-lg">Every piece tells a story of craftsmanship and dedication to the textile arts.</p>
              </AnimatedContainer>
              <Link href="/gallery" className="text-luxury-gold font-bold border-b border-luxury-gold/30 pb-1 hover:border-luxury-gold transition-all">VIEW LOOKBOOK</Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { id: 1, name: "Gold Leaf Blouse", img: "/uploads/sample2.jpg" },
               { id: 2, name: "Velvet Gown", img: "/uploads/sample4jpg.jpg" },
               { id: 3, name: "Silk Scarf", img: "/uploads/sample6.avif" },
             ].map((item, i) => (
               <AnimatedContainer key={i} delay={i * 0.1} variant="scale" className="group cursor-pointer">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-2xl mb-4 glass border border-white/10 shadow-lg">
                     <Image 
                        src={item.img} 
                        alt={item.name} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                  </div>
                  <h3 className="text-xl font-luxury group-hover:text-luxury-pink transition-colors px-2">{item.name}</h3>
               </AnimatedContainer>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
