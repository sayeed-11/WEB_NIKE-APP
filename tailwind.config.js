/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      abc : ["Roboto", "sans-serif"],
      text : ["Nunito", "sans-serif"],
      nike : ["Kanit", "sans-serif"]
    }
  },
  plugins: [],
}