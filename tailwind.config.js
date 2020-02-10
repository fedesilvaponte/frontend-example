module.exports = {
  theme: {
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1600px'
    },
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    },
    inset: {
      '-1': '-.5rem',
      '-2': '-1rem'
    },
    extend: {
      colors: {
        error: 'red',
        uc: {
          'blue': '#4497ff',
          'dark-blue': '#2a4d95',
          'error': 'red',
          'light-green': '#a8c700',
          'light-green-hover': '#739e07'
        },
        warning: {
          100: '#fde6bc',
          400: 'orange',
          700: '#ff7918'
        },
        black: '#333',
      }
    }
  },
  variants: {},
  plugins: [],
}
