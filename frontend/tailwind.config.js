/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2F3C7E',
        'primary-cream': '#FBEAEB',
      },
      fontFamily: {
        roboto: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
