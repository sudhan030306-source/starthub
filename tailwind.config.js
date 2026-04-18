/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── BRAND COLORS — edit these to change the site palette ───
      colors: {
        brand: {
          ink:    "#0D1B2A",   // deep navy — primary text / backgrounds
          slate:  "#1E3A5F",   // medium navy — card accents
          gold:   "#F59E0B",   // amber gold  — primary accent / CTAs
          warm:   "#FFFBF3",   // warm off-white — page background
          muted:  "#64748B",   // muted slate — secondary text
          light:  "#F1F5F9",   // light blue-grey — section backgrounds
          border: "#E2E8F0",   // subtle borders
        },
      },
      // ─── FONTS — loaded via Google Fonts in layout.js ───
      fontFamily: {
        display: ["'Sora'", "sans-serif"],   // headings
        body:    ["'DM Sans'", "sans-serif"], // body text
      },
      // ─── ANIMATIONS ───
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-right": {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up":     "fade-up 0.6s ease-out forwards",
        "fade-in":     "fade-in 0.5s ease-out forwards",
        "slide-right": "slide-right 0.6s ease-out forwards",
        float:         "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
