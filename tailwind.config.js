/** @type {import('tailwindcss').Config} */ import { withAnimations } from "animated-tailwindcss";
export default withAnimations({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  daisyui: {
    themes: ["winter", "luxury"],
  },
});
