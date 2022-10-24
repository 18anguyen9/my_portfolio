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
        'catAnimation' :'cat-Animation 1.9s steps(16) infinite',
        'titleFade' : 'fadeIt 5s ease-in-out',
        'fadeout' : 'fadeout 5s ease-out',
        'fadein' : 'fadein 1s ease-in'
      },
      keyframes:{
        'city-Animation': {
          '0%':{'background-position': '100% 0;'},
          '100%':{'background-position':'0 0;'}
        },
        'cat-Animation': {
          '0%':{'background-position': '0 0;'},
          '100%':{'background-position':'-3000px 0;'}
        },
        'fadeIt': {
          '0%':{'opacity': '0;'},
          '100%': {'opacity':'.5;'}
        },
        'fadeout': {
          '0%':{'opacity':'1;'},
          '100%':{'opacity':'0;'}
        },
        'fadein': {
          '0%':{'opacity':'0;'},
          '100%':{'opacity':'1;'}
        }

      }
    },
    fontFamily: {
      'sans': ['Roboto']
    }
  },
  plugins: [],
}
