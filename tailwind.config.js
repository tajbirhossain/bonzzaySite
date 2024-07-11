/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jet: ["JetBrains Mono", 'monospace'],
        clash: ["clash", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

