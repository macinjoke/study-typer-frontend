const path = require('path')
const config = require('config')

config.frontend.version = process.env.npm_package_version
module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    host: config.dev_server.host,
    port: config.dev_server.port,
    disableHostCheck: true,
    contentBase: 'dist',
  },
  externals: {
    config: JSON.stringify(config.frontend),
  },
}
