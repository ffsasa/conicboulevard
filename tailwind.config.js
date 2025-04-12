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
        vibes: ['Great Vibes', 'cursive'],
        allura: ['Allura', 'cursive'],
      },
      keyframes: {
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        pulseScale: 'pulseScale 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
