"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CollectionCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  index: number;
}

const CollectionCard = ({ title, subtitle, image, href, index }: CollectionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative h-[600px] overflow-hidden rounded-3xl glass"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>

      <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end space-y-4">
        <div className="space-y-2">
          <p className="text-luxury-gold font-bold tracking-[0.4em] uppercase text-[10px]">{subtitle}</p>
          <h3 className="text-4xl md:text-5xl font-luxury text-white leading-tight">{title}</h3>
        </div>
        
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-white/70 hover:text-luxury-gold transition-colors text-sm font-bold tracking-widest uppercase group/link"
        >
          Explore Collection 
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default CollectionCard;
