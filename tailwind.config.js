/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spektr: {
          cyan: {
            50: "#03a9f4",
          }
        }
      },
      fontFamily: {
        'all-round-gothic': ['"all-round-gothic"', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 