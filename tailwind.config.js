const colors = require("tailwindcss/colors")

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './**/*.ts'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cool-gray": colors.coolGray
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
