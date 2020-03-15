// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({
 
    content: [
      './src/**/*.html',
      // etc.
    ],
  
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })
  
  module.exports = {
    plugins: [
      require('tailwindcss'),
      purgecss,
      require('cssnano'),
      require('autoprefixer'),
    ]
  }