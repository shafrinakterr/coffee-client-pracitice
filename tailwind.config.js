/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ranco: "'Rancho', cursive;",
        raleway: "'Raleway', sans- serif",
    },
  },
},
  plugins: [require("daisyui")],
}