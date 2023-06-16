/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // first: "hsl(var(--color-blue))",
      // second: "hsl(var(--color-indigo))",
      // circleBlue: "hsla(var(--circle-blue))",
      // circleIndigo: "hsla(var(--circle-indigo))",
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      rose: colors.rose
    },
    fontFamily: {
      hanken: "Hanken Grotesk, sans-serif"
    },
    // borderRadius: {
    //   none: "0",
    //   sm: "0.125rem",
    //   DEFAULT: "0.25rem",
    //   DEFAULT: "4px",
    //   md: "0.375rem",
    //   lg: "0.5rem",
    //   full: "9999px",
    //   large: "12px",
    //   xl: "1.25rem",
    //   "2xl": "1.42rem",
    //   "3xl": "2rem"
    // },
    extend: {}
  },
  plugins: []
}
