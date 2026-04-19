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
        brand: {
          bg:      "#08080F",
          surface: "#111120",
          panel:   "#1A1A2E",
          orange:  "#F97316",
          "orange-hover": "#EA6B00",
          white:   "#FFFFFF",
          muted:   "#94A3B8",
          border:  "rgba(255,255,255,0.08)",
          "border-lg": "rgba(255,255,255,0.14)",
        },
      },
      fontFamily: {
        display: ["'Sora'",   "sans-serif"],
        body:    ["'DM Sans'","sans-serif"],
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
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)"   },
          "50%":      { transform: "translateY(-14px) rotate(3deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px)"    },
          "50%":      { transform: "translateY(12px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
        "slide-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        "rotate-slow": {
          "0%":   { transform: "rotateX(20deg) rotateY(0deg)"   },
          "100%": { transform: "rotateX(20deg) rotateY(360deg)" },
        },
        "border-glow": {
          "0%, 100%": { boxShadow: "0 0 0px rgba(249,115,22,0)" },
          "50%":      { boxShadow: "0 0 20px rgba(249,115,22,0.3)" },
        },
        scanline: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        "fade-up":      "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":      "fade-in 0.5s ease forwards",
        float:          "float 5s ease-in-out infinite",
        "float-reverse":"float-reverse 4s ease-in-out infinite",
        shimmer:        "shimmer 3s linear infinite",
        "slide-up":     "slide-up 0.5s ease forwards",
        "rotate-slow":  "rotate-slow 14s linear infinite",
        "border-glow":  "border-glow 2.5s ease-in-out infinite",
        scanline:       "scanline 6s linear infinite",
      },
    },
  },
  plugins: [],
};
