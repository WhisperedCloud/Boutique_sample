"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Loader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only show loader on home page
    if (pathname !== "/") {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (pathname !== "/" && !loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-start pt-[20vh]"
        >
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-luxury luxury-gradient font-bold tracking-[0.8em]"
            >
              BOUTIQUE
            </motion.h1>
            <motion.div 
               className="absolute -bottom-4 left-0 h-[2px] bg-luxury-gold"
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-[10px] uppercase tracking-[0.4em] font-bold"
          >
            Curating Excellence
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
