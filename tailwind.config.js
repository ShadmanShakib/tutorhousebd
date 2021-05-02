module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:"#27d6c0",
        secondary:"#7d3fa8"
      }
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
