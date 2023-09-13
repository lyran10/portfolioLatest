const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      transitionDelay: {
        '1': '0.1s',
        '2': '0.3s',
        '3': '0.5s',
        '4': '0.6s',
        '5': '0.7s',
        '6': '0.9s',
        '7': '1.1s',
        '8': '1.2s',
        '9': '1.3s',
        '10': '1.4s',
        '11': '1.5s',
        '12': '1.6s',
        '13': '1.7s',
        '14': '1.8s',
        '15': '1.9s',
        '16': '2s',
        '17': '2.1s',
      },
      boxShadow: {
        "redShadow" : "0px 0px 10px red",
        "orangeShadow" : "0px 0px 10px orange",
      },
      keyframes: {
        cubelg : {
          "0%" : {transform: "rotateY(0deg) translateY(0)"} ,
          "25%" : {transform:"rotateY(-90deg)"} ,
          "50%" : {transform:"rotateY(-180deg)"} ,
          "75%" : {transform: "rotateY(-270deg)"} ,
          "100%" : {transform: "rotateY(0deg) translateY(0) scale(1)"}  ,
        },
        cube : {
          "0%" : {transform: "rotateY(0deg) translateY(0)"} ,
          "25%" : {transform:"rotateY(-90deg)"} ,
          "50%" : {transform:"rotateY(-180deg)"} ,
          "75%" : {transform: "rotateY(-270deg)"} ,
          "100%" : {transform: "rotateY(0deg) translateY(0) scale(1)"}  ,
        },
        exp : {
          "0%" : {transform : "scale(0.6)"},
          '50%': {transform : "scale(0.8)" },
          '100%': {transform : "scale(1)" },
        },
        wiggle: {
          "0%" : {backgroundColor: '#f5f5f5',
                  width:"50%"},
          '50%': {width : "70%" },
          '100%': { width: '0%', backgroundColor : "#f5f5f5" },
        },
        wiggle1: {
          "0%" : {backgroundColor: 'cyan',width:"50%"},
          '50%': { backgroundColor: 'cyan',width:"70%"},
          '100%': { width: '0%', backgroundColor: 'cyan' },
        },
        list: {
          "0%" : {backgroundColor: 'red',width:"100%",},
          '50%': { backgroundColor: 'red',width:"100%"},
          '100%': { width: '100%', backgroundColor: 'red' ,opacity : "0"},
        },
          navlistEffect :{
        from : {
          height : "20%",
          width : "20%",
          transform : 'scale(0)'
        },
        to : {
          height : "100%",
          width : "100%",
          transform : 'scale(6)',
          opacity : "0"
        }
      },
      rolesOut : {
        from : {
         opacity: "1"
        },
        to : {
          transform : "rotateX(90deg)",
          opacity : "0"
        }
      },
      rolesIn : {
        "0%" : {
          left : "50%",
          opacity : "0"
        },
        "100%": {
          left : "100%",
          opacity : "1"
        }
      },
      icons : {
        "0%" : {
          left : "50%",
          opacity : "0"
        },
        "100%": {
          left : "100%",
          opacity : "1"
        }
      }
      },
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    })
  ],
}

