var webpack = require('webpack');
module.exports = {
  entry: {
    app: __dirname + '/../client/test/app.test.ts'
  },
  output: {
    path: __dirname + '/../client/dist',
    filename: 'test.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: ['/node_modules/']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
    ]
  }
}
