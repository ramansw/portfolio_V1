/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        league: ["var(--font-league-spartan)"],
      },
      colors:{
        primary:   "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        red:       "rgb(var(--color-red) / <alpha-value>)",
        navy:      "rgb(var(--color-navy) / <alpha-value>)",
        light:     "rgb(var(--color-light) / <alpha-value>)",
        base:      "rgb(var(--color-bg) / <alpha-value>)",
      },
    },
  },
  plugins: [],
}