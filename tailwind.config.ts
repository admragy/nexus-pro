import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",  // غيرنا من ["class"] لـ "class"
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cairo)", "sans-serif"],
      },
      colors: {
        primary: "#8b5cf6",
        secondary: "#ec4899",
        accent: "#06d6a0",
        background: "#0a0a1a",
        card: "rgba(139, 92, 246, 0.1)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "pulse-glow": "pulseGlow 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(139, 92, 246, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
