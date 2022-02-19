const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1600px'
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose
    }),
    fontFamily: {
      display: ['Cinzel', 'serif'],
      body: ['Archer', 'sans-serif']
    },
    extend: {
      fontFamily: {
        sans: ['Archer', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      const fontFamily = theme('fontFamily.display');
      addBase({
        h1: { fontFamily, fontSize: theme('fontSize.2xl') },
        h2: { fontFamily, fontSize: theme('fontSize.xl') },
        h3: { fontFamily, fontSize: theme('fontSize.lg') },
        h4: { fontFamily, fontSize: theme('fontSize.md') },
        h5: { fontFamily },
        h6: { fontFamily }
      });
    })
  ]
};
