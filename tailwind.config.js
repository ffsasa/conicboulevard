/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", 
  ],
  theme: {
    extend: {
      colors: {
        lightgrey: {
          DEFAULT: '#FFFFFF',
          150: 'rgba(211, 211, 211, 0.95)', 
          50: 'rgb(158, 152, 152)', 
        },
        gold: '#FFD700', 
        darkgreen: '#014421',
        textgreen: '#255530',
        brightgreen: '#00C779',
        luxurybronze: '#D4AF37',
        white: '#FFFFFF',
        darkgrey: '#333333',
        redbrown: '#783a33',
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};
