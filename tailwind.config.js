/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "240px",
      xs: "400px",
      sm: "640px",
      md: "760px",
      tab: "840px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // these are the theme colors don't change them
        primary: "#A66EFC",
        secondary: "#000513",
      },
    },
  },
};
