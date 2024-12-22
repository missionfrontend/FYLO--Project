/** @type {import('tailwindcss').Config.js} */
module.exports = {
  
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
        'logo-light-mode': "url('../images/logo-light-mode.svg')",
        'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')",
        'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')"
      }),
      colors: {
        'dark-color': "#00072D",
      }
    },
  },
  variants: {
    extends: {
      backgroundImage: ['dark']
    }
  },
  plugins: [],
}

