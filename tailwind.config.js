/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors:{
      bgBlur: 'transparent',
      milk: '#efece8',
      white: 'white',
      dark: 'black',
      darkRed:'#96000C',
      lightRed: '#b40a18',
      grey: '#777'
    },
    extend: {
      screens:{
        'sm': {'max': '476px'},
        'md': {'max': '769px'},
        'lg': {'min': '992px'}
      },
    },
  },
  plugins: [],
}

