// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      primary: '#062148',
      primary_light: '#0A93EB',
      accent: '#004381'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
