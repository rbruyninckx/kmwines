/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'logo': '#686a2c',
        'alchemy': '#791c15',
        'logo-light': "#e6ebb8",
        'logo-lightest': "#e3e4d9"
      },
    },
  },
  plugins: [],
}
