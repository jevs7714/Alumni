/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: '0F2767'
      },
      fontFamily: {

        mRegular: ["Matemasie-Regular", "sans-serif"],
      }
    },
  },
  plugins: [],
}

