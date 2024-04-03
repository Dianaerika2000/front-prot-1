/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2a3964',
        secondary: '#576392',
        accent: '#880000',
      },
    },
  },
  plugins: [],
}

