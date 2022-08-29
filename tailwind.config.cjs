/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  separator: '_',
  theme: {
    extend: {
      width: {
        '1of2': '50%',
        '1of3': '33.3333%',
        '1of4': '25%',
        '1of5': '20%',
        '1of6': '16.6666%',
        '1of12': '8.3333%',
      },
    },
  },
  plugins: [],
};
