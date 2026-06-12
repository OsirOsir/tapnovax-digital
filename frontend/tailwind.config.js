/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c0d0f8',
          300: '#91adf0',
          400: '#5a80e4',
          500: '#3358d4',
          600: '#2242b8',
          700: '#1b3396',
          800: '#162978',
          900: '#0d1b4e',
          950: '#070e2e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
