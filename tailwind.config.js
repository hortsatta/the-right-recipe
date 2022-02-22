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
      display: ['Hoefler', 'serif'],
      body: ['Archer', 'sans-serif']
    },
    extend: {
      colors: {
        border: {
          200: '#d5cec7',
          400: '#98948e'
        }
      },
      fontFamily: {
        sans: ['Archer', ...defaultTheme.fontFamily.sans],
        serif: ['Hoefler SC', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      const fontFamily = theme('fontFamily.display');
      addBase({
        h1: { fontFamily, fontSize: theme('fontSize.3xl') },
        h2: { fontFamily, fontSize: theme('fontSize.2xl') },
        h3: { fontFamily, fontSize: theme('fontSize.xl') },
        h4: { fontFamily, fontSize: theme('fontSize.xl') },
        h5: { fontFamily },
        h6: { fontFamily }
      });
    })
  ]
};
