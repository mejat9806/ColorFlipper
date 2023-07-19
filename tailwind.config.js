/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["1.colorfliper\index.html"],
  theme: {
    extend: {
      colors:{
        'choco':'#faead6'
      }
      
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

