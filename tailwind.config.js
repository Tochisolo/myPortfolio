/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4169E1",
        "primary-dark": "#2a50c8",
        "primary-light": "#6b8ff0",
        dark: "#0d0d0d",
        "dark-card": "#1a1a1a",
        "dark-border": "#2a2a2a",
      },
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        body: ["Cabinet Grotesk", "sans-serif"],
      },
      
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "skill-fill": "skillFill 1.2s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        skillFill: {
          "0%": { width: "0%" },
          "100%": { width: "var(--skill-width)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};