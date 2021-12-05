module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Oswald, sans-serif"],
        secondary: ["Roboto"],
      },
      colors: {
        mainColor: "#9FEF00",
        secondColor: "#1A2332",
        tercerColor: "#141D2B",
        fourthColor: "#111927",
        fifthColor: "#212A39",
        sixthColor: "#FA811B",
        seventhColor: "#28A745",
        eighthColor: "#18BC9C",
        red: {
          100: "#FF3333",
          200: "#61252E",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
