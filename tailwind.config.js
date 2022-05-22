module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      screens:{
        'xs': {'max':'768px'},
      },
      backgroundImage: {
        'body-pattern': "url('../img/pattern.png')",
      },
      colors: {
        'light-blue': '#37bcf9',
        'dark-blue': '#0370b9'
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
}
