/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '456' : '456.35px'
      },
      colors:{
        'colorBlack': 'rgb(11,13,23)',
        'skyBlue': 'rgb(208, 214, 249)',
      },
        gridTemplateColumns: {
        // Simple 2 column grid
        'mxc1': 'max-content',
        'mxc2': 'repeat(2, max-content)',
        'frc2fr': 'repeat(2, 1fr)',

        'mxc3': 'repeat(3, max-content)',
        'frc3fr': 'repeat(3, 1fr)',

        'mxc4': 'repeat(4, max-content)',
        'frc4fr': 'repeat(4, 1fr)',

        'mxr5': 'repeat(5, max-content)',
        'fr5fr': 'repeat(5, 1fr)',

        'mxc2fr': 'max-content 1fr',
        'mxc3fr': 'max-content max-content 1fr',
        'mxc4fr': 'max-content max-content max-content 1fr',
      },
      gridTemplateRows: {
        // Simple 2 row grid
        'mxr1': 'max-content',
        'mxr2': 'repeat(2, max-content)',
        'frR2fr': 'repeat(2, 1fr)',

        'mxr3': 'repeat(3, max-content)',
        'frR3fr': 'repeat(3, 1fr)',

        'mxr4': 'repeat(4, max-content)',
        'frR4fr': 'repeat(4, 1fr)',

        'mxr5': 'repeat(5, max-content)',
        'fr5fr': 'repeat(5, 1fr)',

        'mxr2fr': 'max-content 1fr',
        'mxr3fr': 'max-content max-content 1fr',
        'mxr4fr': 'repeat(3, max-content) 1fr',
        'mxr5fr': 'max-content repeat(4, 1fr)'
      }
  }
},
  plugins: []
}