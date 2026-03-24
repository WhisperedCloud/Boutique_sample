import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Luxury Dark Palette
        luxury: {
          purple: "#2D1B4B",
          pink: "#FF00FF",
          gold: "#D4AF37",
          white: "#FFFFFF",
        },
        // Boutique Light Palette
        boutique: {
          pink: "#FFE4E1",
          green: "#F0FFF0",
          yellow: "#FFFACD",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        luxury: ["var(--font-luxury)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 10px #FF00FF' },
          'to': { boxShadow: '0 0 20px #FF00FF, 0 0 30px #FF00FF' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
