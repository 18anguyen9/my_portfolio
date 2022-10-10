/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "weather" :"url('../img/weather_bg.jpg')"
      }
    },
    fontFamily: {
      'sans': ['Roboto']
    }
  },
  plugins: [],
}
