const path = require('path')
const config = require('config')

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.jsx?$/,
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
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: config.dev_server.host,
    port: config.dev_server.port,
    disableHostCheck: true,
  },
  externals: {
    config: JSON.stringify(config.frontend),
  },
}
