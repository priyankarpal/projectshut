/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
        'custom': '52rem', // Add your custom padding value
      },
    },
  },
  plugins: [],
}
