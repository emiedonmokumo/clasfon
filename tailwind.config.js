/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBlur: 'transparent',
        milk: '#efece8',
        white: 'white',
        dark: 'black',
        darkRed: '#96000C',
        lightRed: '#b40a18',
        grey: '#777'
      },
      screens: {
        sm: { 'max': '480px' },
        md: { 'min': '481px', 'max': '768px' },
        lg: { 'min': '769px' }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        sintony: ['Sintony', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
