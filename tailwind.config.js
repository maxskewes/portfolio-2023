const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#191A19',
        'greydk': '#262626',
        yellow: '#FFF734',
        green: '#68F590',
        grey: '#575757',
        violet: '#550180',
        'grey-light': '#FAFAFA',
        'green-light': '#d2eff1',
        white: '#fff',
        'teal': '#221a69',
        'teallt': '#7986CB',
        slate: '#444444',
      },
    },
    fontFamily: {
      sans: ['Merriweather', 'sans-serif'],
      serif: ['Helvetica', 'serif'],
      display: ['Oswald'],
    },
    fontSize: {
      sm: '0.85rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.5rem',
    },
    extend: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
