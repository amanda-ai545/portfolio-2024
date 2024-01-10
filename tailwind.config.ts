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
    screens: {
      phone: { min: '280px', max: '480px' },
      tablet: { min: '481px', max: '768px' },
      laptop: { min: '769px', max: '1024px' },
      desktop: { min: '1025px', max: '1200px' },
    },
  },
  plugins: [],
};
