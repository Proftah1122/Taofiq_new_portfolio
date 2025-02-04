/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#663399', // Purple
          light: '#8B4DC8',
          dark: '#4B2570',
        },
        secondary: {
          DEFAULT: '#DAA520', // Burnt Gold
          light: '#F4C430',
          dark: '#B8860B',
        },
      },
    },
  },
  plugins: [],
};