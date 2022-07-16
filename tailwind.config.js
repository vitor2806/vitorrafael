/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0b1829',
        },
        primary: {
          500: '#04bd95',
          600: '#03a381',
        },
        secondary: {
          500: '#1e4670',
        },
      },
    },
  },
  plugins: [],
};
