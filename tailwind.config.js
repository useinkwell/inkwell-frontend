/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ellipse':"url(../public/images/ellipse.png)",
        'secondSlide':"url(../public/images/secondSlide.svg)"
      },
      colors: {
        'ink': 'linear-gradient(180deg, #000F55 31.77%, #B30048 84.9%)',
        'primary': '#000F55',
        'secondary':'#B20048'
      },
    },
  },
  plugins: [],
}
