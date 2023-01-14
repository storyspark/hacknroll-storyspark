/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      custom1: ["Custom-1", "cursive"],
      custom2: ["Custom-2", "serif"],
    },
    extend: {
      backgroundImage: {
        'book-cover': "url('../public/book-cover.png')",
        'book-cover2': "url('../public/book-cover2.png')",
      }
    },
  },
  plugins: [],
}
