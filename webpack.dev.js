/* eslint import/no-extraneous-dependencies: 0 */
const config = require('config')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: config.dev_server.host,
    port: config.dev_server.port,
    disableHostCheck: true,
    contentBase: 'dist',
  },
})
