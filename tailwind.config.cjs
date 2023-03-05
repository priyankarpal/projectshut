/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A66EFC",
        secondary: "#000513",
      },
      fontFamily: {
        stencil: ["Allerta Stencil", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// DONOT CHANGE THIS FILE
