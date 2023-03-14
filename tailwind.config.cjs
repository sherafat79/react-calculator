/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 
      extend: {
        colors: {
          primary: "#5E32C0",
        },
        fontFamily:{
          "iranSans":["iranSans"],
        }
      },
    
  },
  plugins: [],
}
