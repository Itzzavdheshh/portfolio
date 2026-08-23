/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0C0C0C',
        accent: '#D7E2EA',
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
