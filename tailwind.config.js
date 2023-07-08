/** @type {import('tailwindcss').Config} */
module.exports = {

  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {},
  variants: {},
  plugins: [],




  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      fontFamily:{
        montserrat: "'Montserrat', serif",
        lato: "'lato',sans-serif",
      },
    
      colors:{
        'text-gray-color': '#858585',
        'gray-color': '#F5F5F5',
        'base-color': '#F5F5F5' , 
        'card-color1': '#DDEFE0',
        'card-color2': '#F4ECDD',
        'card-color3': '#EFDADA',
        'card-color4': '#DEE0EF',
        
      },
    },
  },
  plugins: [

  ],
}

