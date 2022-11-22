/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-light-green': '#14884F',
        'custom-black': '#130C0E'
      },
      fontFamily: {
        'poppins-semibold': '"Poppins"'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), require('@tailwindcss/typography'), // optional
    require('flowbite/plugin')
  ] 
}
