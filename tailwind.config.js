/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink': 'linear-gradient(180deg, #000F55 31.77%, #B30048 84.9%)',
        'inkBlue': '#000F55',

      },
    },
  },
  plugins: [],
}
