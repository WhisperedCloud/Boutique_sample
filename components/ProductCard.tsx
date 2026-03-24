"use client";

import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group card-float glass rounded-2xl overflow-hidden p-4 space-y-4">
      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
           <button className="p-2 glass rounded-full hover:bg-white/20 transition-colors">
              <Heart className="w-4 h-4 text-white" />
           </button>
        </div>
      </div>
      
      <div className="space-y-1">
        <p className="text-[10px] text-luxury-gold font-bold uppercase tracking-widest">{product.category}</p>
        <h3 className="text-lg font-luxury font-medium group-hover:text-luxury-pink transition-colors">{product.name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
