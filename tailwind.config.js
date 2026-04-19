/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:    "#0C0C10",
        void:   "#07070A",
        card:   "#141418",
        layer:  "#1C1C24",
        gold:   "#F59E0B",
        "gold-dim":  "#D97706",
        "gold-glow": "rgba(245,158,11,0.15)",
        snow:        "#FFFFFF",
        "snow-60":   "rgba(255,255,255,0.60)",
        "snow-35":   "rgba(255,255,255,0.35)",
        "snow-12":   "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)"    },
          "50%":     { transform: "translateY(-14px) rotate(2deg)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0px)"  },
          "50%":     { transform: "translateY(-7px)" },
        },
        "spin-slow": {
          "0%":   { transform: "rotate(0deg)"   },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.7s cubic-bezier(.16,1,.3,1) forwards",
        "fade-in":    "fade-in 0.5s ease forwards",
        float:        "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "spin-slow":  "spin-slow 22s linear infinite",
        shimmer:      "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
