module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'lblack':'#101010',
        'mblack':'#181818',
        'dgreen':'#040E00',
        'dbg':'#080808',
        'lblue':'rgba(221,241,255,50%)',
        'lblue':'#e1e1e1',
        'danger':'rgb(220 38 38)',
        'danger-900':'rgb(127 29 29)',
        'primary':'rgb(9, 128, 76)',
        'primary-100':'rgb(10, 143, 85)',
        'primary-900':'rgb(7, 95, 58)',
        'lgrey':'#Fefefe',
        'lgreen':'#D4FFBF',
        'mgreen':'#3DBE00'
      },
      fontFamily:{
        'titillium':["'Titillium Web'", 'sans-serif'],
        'opensans':["'Open Sans'", 'sans-serif'],
        'roboto':[ "'Roboto'", 'sans-serif']
      },
    },

  },
  plugins: [],
}