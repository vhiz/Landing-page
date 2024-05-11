/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */ import { withAnimations } from "animated-tailwindcss";
const heropatterns = require("tailwindcss-hero-patterns/src/patterns");
export default withAnimations({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    heroPatterns: {
      topography: heropatterns.topography,
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar"),
    require("tailwindcss-hero-patterns"),
  ],
  daisyui: {
    themes: ["winter", "luxury"],
  },
});
