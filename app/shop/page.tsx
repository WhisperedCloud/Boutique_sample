"use client";

import { motion } from "framer-motion";
import AnimatedContainer from "@/components/AnimatedContainer";
import ProductCard from "@/components/ProductCard";

const collections = [
  {
    name: "Iconic Evening",
    description: "The Gala Edit - Discover stunning silhouettes for after-dark elegance.",
    products: [
      { id: 1, name: "Velvet Night Gown", category: "Evening Wear", image: "/uploads/sample1.jpg" },
      { id: 4, name: "Satin Evening Dress", category: "Premium", image: "/uploads/sample4jpg.jpg" },
    ]
  },
  {
    name: "Heritage Silk",
    description: "Traditional craftsmanship meets contemporary luxury in our finest silks.",
    products: [
      { id: 2, name: "Gold Leaf Blouse", category: "Luxury Casual", image: "/uploads/sample2.jpg" },
      { id: 6, name: "Silk Scarf", category: "Summer", image: "/uploads/sample6.avif" },
      { id: 7, name: "Heritage Drapery", category: "Bespoke", image: "/uploads/sample7.jpg" },
    ]
  },
  {
    name: "Modern Essentials",
    description: "Refined textiles for the sophisticated daily wardrobe.",
    products: [
      { id: 3, name: "Cashmere Wrap", category: "Accessories", image: "/uploads/sample3.jpg" },
      { id: 5, name: "Leather Tote", category: "Accessories", image: "/uploads/sample5.avif" },
      { id: 8, name: "Textile Art Piece", category: "Curated", image: "/uploads/sample8.jpg" },
    ]
  }
];

const categories = ["All", "Evening Wear", "Luxury Casual", "Accessories", "Summer", "Bespoke"];

export default function Shop() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedContainer variant="fade" className="mb-16">
        <h1 className="text-5xl md:text-7xl font-luxury luxury-gradient font-bold mb-4">The Collections</h1>
        <p className="opacity-60 max-w-2xl font-light tracking-wide">
          Browse our exclusive range of high-end fashion and lifestyle products crafted 
          from the most exquisite materials.
        </p>
      </AnimatedContainer>

      <div className="space-y-32">
        {collections.map((collection, index) => (
          <section key={index} className="space-y-12">
            <div className="max-w-2xl">
               <h2 className="text-3xl md:text-4xl font-luxury font-bold mb-4">{collection.name}</h2>
               <p className="opacity-60 font-light">{collection.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collection.products.map((product) => (
                <ProductCard key={product.id} product={product as any} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
