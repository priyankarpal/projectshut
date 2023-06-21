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
      padding: {
        custom: "52rem", // Add your custom padding value
      },
    },
  },
  variants: {
    extend: {
      after: ["responsive,transform"], // Add the variants you want to enable for the after pseudo-element
      fill: ["checked"],
    },
    plugins: [
      function myUtilities({ addUtilities }) {
        addUtilities(
          {
            ".after-util": {
              content: '""',
              width: "34px",
              height: "34px",
              position: "absolute",
              backgroundColor: "#ebebeb",
              top: "4px",
              left: "4px",
              right: "18px",
              borderRadius: "34px",
              background: "linear-gradient(180deg, #777, #3a3a3a)",
              transition: "0.3s",
            },
          },
          ["responsive"]
        );
      },
      function addCheckedVariant({ addVariant, e }) {
        addVariant("checked", ({ modifySelectors, separator }) => {
          modifySelectors(
            ({ className }) =>
              `.${e(`checked${separator}${className}`)}:checked + label`
          );
        });
      },

      function myFunction({ addVariant, e }) {
        addVariant("transform", ({ modifySelectors, separator }) => {
          modifySelectors(
            ({ className }) =>
              `.${e(
                `transform${separator}${className}`
              )}:checked + label::after`
          );
        });
      },
    ],
  },
};
