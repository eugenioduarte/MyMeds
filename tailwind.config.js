const colors = require("./src/constants/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue_1: colors.blue_1,
        blue_2: colors.blue_2,
        blue_3: colors.blue_3,
        grey_1: colors.grey_1,
        grey_2: colors.grey_2,
        grey_3: colors.grey_3,
        white: colors.white,
        black: colors.black,
        red: colors.red,
      },
    },
  },
  plugins: [],
};
