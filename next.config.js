const withSass = require('@zeit/next-sass')
module.exports = withSass({
  // sass options
  cssModules: true,

  // next.js options
  webpack: config => {
    config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
    config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})

    return config
  }
});
