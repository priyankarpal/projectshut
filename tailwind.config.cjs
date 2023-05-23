/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: '240px',
      xs: '400px',
      sm: '640px',
      md: '770px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#A66EFC",
        secondary: "#000513",
      },
      // changed here
      padding: {
        custom: "52rem", // Add your custom padding value
      },
    },
  },
  plugins: [],
}
