var webpack = require('webpack')

module.exports = {
  lintOnSave: false,
  // baseUrl: '/sub-path/',
  productionSourceMap: false,
  configureWebpack: {
    // entry: ["babel-polyfill", "./src/main.js"]
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Chartist: 'chartist',
        Raphael: 'raphael'
      })
    ]
  }
}
