/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px -6px 48px 4px rgba(0,0,0,0.3)',
      },
    },
    fontFamily: {
      jost: ['Jost', 'san-serif'],
      italiana: ['Italiana', 'san-serif'],
    },
  },
  plugins: [],
};
