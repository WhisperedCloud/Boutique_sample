"use client";

import { Mail, Globe, Search } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="glass mt-20 border-t border-white/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-luxury luxury-gradient font-bold tracking-widest">BOUTIQUE</h3>
            <p className="text-sm opacity-60">
              Curating the finest textures and forms for the modern connoisseur.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link href="/shop" className="hover:text-luxury-pink transition-colors">All Collections</Link></li>
              <li><Link href="/gallery" className="hover:text-luxury-pink transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-luxury-pink transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link href="/contact" className="hover:text-luxury-pink transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-luxury-pink transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="hover:text-luxury-pink transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Newsletter</h4>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="email@example.com"
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs flex-1 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
              />
              <button className="bg-luxury-gold text-white px-4 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform">
                JOIN
              </button>
            </div>
            <div className="flex space-x-4 mt-6">
              <Mail className="w-5 h-5 cursor-pointer hover:text-luxury-pink" />
              <Globe className="w-5 h-5 cursor-pointer hover:text-luxury-pink" />
              <Search className="w-5 h-5 cursor-pointer hover:text-luxury-pink" />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-[10px] opacity-40 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} BOUTIQUE LUXE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
