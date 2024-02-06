/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mini': {'min': '760px', 'max': '800px'},
        'small': {'min': '360px', 'max': '400px'},
      },
    },
  },
  plugins: [],
}

