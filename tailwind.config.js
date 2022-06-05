module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      screens:{
        'xxs': {'max':'672px'},
        'xs': {'min':'672px','max':'768px'},
        '4xl': {'min':'768px','max':'834px'},        
        '5xl': {'min':'834px','max':'1394px'},        
        '6xl': {'min':'1394px','max':'1542px'},
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
