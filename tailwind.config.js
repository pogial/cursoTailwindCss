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
        'banner-background': "url('../img/bakbaner.png')"
      },
      backgroundPosition:{
        'banner-position': '-200px -200px'
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
