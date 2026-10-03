/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        nexora: {
          blue: '#0E56D0',
          teal: '#00A99D',
          light: '#EFF6FF',
        }
      }
    },
  },
  plugins: [],
}
