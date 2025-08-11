/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#7ea5ff',
          500: '#6388ff',
          600: '#4c6ef5',
        },
      },
      blur: {
        '3xl': '64px',
      },
    },
  },
};
