// tailwind.config.js
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
  },
  plugins: [
    function ({ addUtilities }) {
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
        ["responsive"],
      )
    },
    function ({ addVariant, e }) {
      addVariant("checked", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`checked${separator}${className}`)}:checked + label`
        })
      })
    },
    function ({ addVariant, e }) {
      addVariant("transform", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`transform${separator}${className}`)}:checked + label::after`
        })
      })
    },
  ],
}
