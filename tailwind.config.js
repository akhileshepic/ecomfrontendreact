/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#6d4aae",
        'black-1a': '#0000001a',
      },
    },
  },
  plugins: [],
}