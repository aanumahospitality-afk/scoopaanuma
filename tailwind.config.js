/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: '#76DB00',
        neonPink: '#f206ba',
        neonYellow: '#f2eb06',
        darkGrey: '#1a1a1a',
      },
      fontFamily: {
        schabo: ['"Bebas Neue"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
