var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// var CompressionPlugin = require("compression-webpack-plugin"); //gzip
var isProd = JSON.parse(process.env.PROD_ENV || '0'); // `PROD_ENV=1 webpack`

module.exports = {
  entry: "./client/app.ts",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: isProd ? [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    // new BundleAnalyzerPlugin()
    // new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ] : [
    
  ]
};
