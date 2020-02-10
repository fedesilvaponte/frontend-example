const plugin = require('tailwindcss/plugin');
const lightenDarkenColor = require('./utils/index');

const skew = plugin(({addUtilities}) => {
  const newUtils = {
    '.skew-10deg': {
      transform: 'skewY(-10deg)'
    },
    '.skew-15deg': {
      transform: 'skewY(-15deg)'
    }
  };
  return addUtilities(newUtils);
});

const button = plugin(({addComponents}) => {
  const buttons = {
    '.button': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'inline-block'
    },
    '.button-blue': {
      backgroundColor: '#3490dc',
      color: 'white',
      '&:hover': {
        backgroundColor: lightenDarkenColor('#3490dc', -20)
      }
    },

  };
  return addComponents(buttons);
});

module.exports = [skew, button];
