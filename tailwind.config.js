/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./public/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        mammoth: '8rem'
      },
      colors:{
        primary: '#FF6363',
        secondary:{
          100: 'white',
          200: '#888883',
        }
      },
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
}

