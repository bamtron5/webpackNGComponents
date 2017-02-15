var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var path = require('path');
var Noop = require('noop-loader');
var OpenBrowserWebpackExpressPlugin = require('open-browser-webpack-express-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var isProd = JSON.parse(process.env.PROD_ENV || '0'); // `PROD_ENV=1 webpack`
var analyze = JSON.parse(process.env.ANALYZE || '0');

module.exports = {
  entry: {
    app: "./client/app.ts"
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: isProd ? [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    analyze ? new BundleAnalyzerPlugin() : function(){},
    analyze ? new OpenBrowserPlugin({url: '127.0.0.1:8888'}) : function(){}
  ] : [
    // DEV PLUGINS
    new HtmlWebpackPlugin({filename: 'index.html', template: 'server/views/index.ejs'}),
    new OpenBrowserWebpackExpressPlugin({url: 'http://localhost:8080'}),
    analyze ? new BundleAnalyzerPlugin() : function(){},
    analyze ? new OpenBrowserPlugin({url: '127.0.0.1:8888'}) : function(){}
  ]
};
