const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px'
    },
    colors: {
      orange: colors.orange
    },
    fontFamily: {
      sans: ['Archer', 'sans-serif'],
      serif: ['Cinzel', 'serif'],
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      console.log(theme);
      const fontFamily = theme('fontFamily.serif');
      addBase({
        h1: { fontFamily },
        h2: { fontFamily },
        h3: { fontFamily },
        h4: { fontFamily },
        h5: { fontFamily },
        h6: { fontFamily }
      });
    })
  ]
};
