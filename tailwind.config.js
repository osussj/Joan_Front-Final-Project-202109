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
        violet: {
          100: "#A200FF",
          200: "#7E00C6",
          300: "#5A008E",
          400: "#360055",
          500: "#12001C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
