"use client";

import { motion } from "framer-motion";

interface DecorativeElementsProps {
  theme: string;
}

const DecorativeElements = ({ theme }: DecorativeElementsProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Top Left Blob */}
      <motion.div
        animate={{
          x: [0, 100, -50],
          y: [0, -50, 50],
          scale: [1, 1.2, 0.9],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-luxury-green/20 blur-[120px] rounded-full"
      />

      {/* Bottom Right Blob */}
      <motion.div
        animate={{
          x: [0, -100, 50],
          y: [0, 100, -50],
          scale: [1, 1.1, 0.8],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-luxury-gold/10 blur-[150px] rounded-full"
      />

      {/* Middle Floating Shape */}
      <motion.div
        animate={{
          rotate: [0, 360],
          x: [200, 300, 200],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-luxury-pink/10 blur-[100px] rounded-full"
      />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: `radial-gradient(var(--luxury-gold) 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />
    </div>
  );
};

export default DecorativeElements;
