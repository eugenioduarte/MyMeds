/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue_1: "#092676",
        blue_2: "#085CF0",
        blue_3: "#AFE9FD",
        grey_1: "#e9ecef",
        grey_2: "#868e96",
        white: "#f8f9fa",
        black: "#050A34",
        red: "#d90429",
      },
    },
  },
  plugins: [],
};
