/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suite: ["SUITE Variable", "sans-serif"],
      },
      colors: {
        primary: "#f7cac9",
        secondary: "#92a8d1",
      },
    },
  },
  plugins: [],
};
