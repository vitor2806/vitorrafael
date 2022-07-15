/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#031a26',
        },
        primary: {
          500: '#04bd95',
        },
      },
    },
  },
  plugins: [],
};
