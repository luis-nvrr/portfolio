const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir LT Std', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
