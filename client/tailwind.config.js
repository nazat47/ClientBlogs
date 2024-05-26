/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "yellow-custom": "10px 10px 0px 0px rgba(255, 255, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
