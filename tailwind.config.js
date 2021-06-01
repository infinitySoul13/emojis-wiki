module.exports = {
  prefix: 'tw-',
  purge: [],
  important: '.emojis-wiki',
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    colors: {
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      grey: {
        0: '#F3F6FA', //border skin
        10: '#E4E9F0', //border input
        20: '#F3F6FA', //background
        30: '#D4DCE8', //border variations
        50: '#B8BFD4', //text nonactive
        100: '#B9BBBE',
        200: '#71777D',
        300: '#4F545C',
        400: '#2F3136',
        500: '#292B2F',
        600: '#212224',
        700: '#292B2F'
      },
      blue: '#5865f2',
      primary: {
        50:  '#3D6EFF', //button
        100: '#606D9B', // text active
      },
      skin : {
        0: '#FFC812',
        1: '#F9DFBB',
        2: '#DEC897',
        3: '#D69968',
        4: '#9E754A',
        5: '#54453B',
      }

    },
    extend: {
    }
  },
  variants: {
    extend: {
      filter: ['hover', 'focus'],
      brightness: ['hover', 'focus']
    }
  },
  plugins: []
}