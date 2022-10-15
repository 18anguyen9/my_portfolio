/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "weather" :"url('../img/weather_bg.jpg')"
      },
      borderWidth:{
        '6': '6px'
      },
      flex:{
        '3': '0 0 33.333333%'
      }
    },
    fontFamily: {
      'sans': ['Roboto']
    }
  },
  plugins: [],
}
