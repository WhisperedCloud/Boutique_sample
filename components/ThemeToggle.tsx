"use client";

import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div 
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-black/10 dark:bg-white/10 p-1 cursor-pointer transition-colors duration-500 flex items-center"
    >
      <motion.div
        animate={{ x: theme === "dark" ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-5 h-5 rounded-full bg-white dark:bg-luxury-gold shadow-lg flex items-center justify-center overflow-hidden"
      >
        {theme === "dark" ? (
          <Moon className="w-3 h-3 text-black" />
        ) : (
          <Sun className="w-3 h-3 text-luxury-gold" />
        )}
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
