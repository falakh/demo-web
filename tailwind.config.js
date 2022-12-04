/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      kedaBlue: "#43ccf1",
      kedaPurple: "#4375f8",
      white: "#FFF",
    },
    minHeight: {
      "600px": "600px",
    },
    height: {
      "500px": "500px",
    },
    extend: {},
  },
  plugins: [],
};
