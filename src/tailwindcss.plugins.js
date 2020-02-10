const plugin = require('tailwindcss/plugin');

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

module.exports = [skew];
