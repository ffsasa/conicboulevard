/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", 
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', 
        darkgreen: '#014421',
        brightgreen: '#00C779',
        luxurybronze: '#D4AF37',
        white: '#FFFFFF',
        darkgrey: '#333333',
        lightgrey: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
