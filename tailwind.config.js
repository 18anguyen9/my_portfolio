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
      },
      animation:{
        'cityAnimation' :'city-Animation 20s linear infinite',
        'catAnimation' :'cat-Animation 1.9s steps(16) infinite'
      },
      keyframes:{
        'city-Animation': {
          '0%':{'background-position': '100% 0;'},
          '100%':{'background-position':'0 0;'}
        },
        'cat-Animation': {
          '0%':{'background-position': '0 0;'},
          '100%':{'background-position':'-3000px 0;'}
        }

      }
    },
    fontFamily: {
      'sans': ['Roboto']
    }
  },
  plugins: [],
}
