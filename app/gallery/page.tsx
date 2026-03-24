"use client";

import { motion } from "framer-motion";
import AnimatedContainer from "@/components/AnimatedContainer";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/uploads/sample1.jpg", title: "Velvet Night", category: "Evening Wear" },
  { src: "/uploads/sample2.jpg", title: "Gold Accents", category: "Detailing" },
  { src: "/uploads/sample3.jpg", title: "Soft Textiles", category: "Essentials" },
  { src: "/uploads/sample4jpg.jpg", title: "Atelier Gown", category: "Bespoke" },
  { src: "/uploads/sample.jpg", title: "Maison Main", category: "Signature" },
  { src: "/uploads/sample7.jpg", title: "Heritage Weave", category: "Craftsmanship" },
  { src: "/uploads/sample8.jpg", title: "Studio View", category: "Atelier" },
  { src: "/uploads/sample5.avif", title: "Leather Work", category: "Accessories" },
  { src: "/uploads/sample6.avif", title: "Silk Drapery", category: "Summer" },
  { src: "/uploads/sample1.webp", title: "Modern Cut", category: "Casual" }
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedContainer className="text-center mb-16">
        <h4 className="text-luxury-gold font-bold tracking-[0.4em] uppercase text-xs mb-4">Maison Lookbook</h4>
        <h1 className="text-5xl md:text-7xl font-luxury luxury-gradient font-bold mb-4">Gallery</h1>
        <p className="opacity-60 max-w-2xl mx-auto font-light tracking-wide">
          A visual exploration of our atelier's finest moments and curated collections.
        </p>
      </AnimatedContainer>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
        {galleryImages.map((img, i) => {
          // Define a bento pattern: 
          // 0: Big (2x2), 1: Wide (2x1), 2: Square (1x1), 3: Tall (1x2), 4: Big (2x2), 5: Square, 6: Wide, 7: Tall, 8: Square, 9: Wide
          const spans = [
            "md:col-span-2 md:row-span-2", // 0
            "md:col-span-2 md:row-span-1", // 1
            "md:col-span-1 md:row-span-1", // 2
            "md:col-span-1 md:row-span-2", // 3
            "md:col-span-2 md:row-span-2", // 4
            "md:col-span-1 md:row-span-1", // 5
            "md:col-span-1 md:row-span-1", // 6
            "md:col-span-1 md:row-span-2", // 7
            "md:col-span-1 md:row-span-1", // 8
            "md:col-span-2 md:row-span-1", // 9
          ];
          
          return (
            <AnimatedContainer 
              key={i} 
              delay={i * 0.05} 
              variant="fade" 
              className={`relative group overflow-hidden rounded-3xl shadow-xl glass-card !p-0 ${spans[i % spans.length]}`}
            >
               <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={i < 4}
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center space-y-4">
                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-luxury-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-2">{img.category}</p>
                    <h3 className="text-2xl font-luxury text-white mb-6">{img.title}</h3>
                    <Link 
                      href="/shop"
                      className="px-8 py-3 border border-white text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                    >
                      View Details
                    </Link>
                 </div>
              </div>
            </AnimatedContainer>
          );
        })}
      </div>
    </div>
  );
}
