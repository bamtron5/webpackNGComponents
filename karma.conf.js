var webpackConfig = require('./webpack/webpack.config');
var testConfig = require('./webpack/test.config.js');

module.exports = function(config) {
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter

    mime: {
      'text/x-typescript': ['ts']
    },

    // list of files / patterns to load in the browser
    files: [
      'client/dist/bundle.js',
      'client/dist/test.js'
    ],

    customContextFile: 'server/views/context.html',
    customDebugFile:   'server/views/debug.html',

    frameworks: ['jasmine'],


    webpack: {
      entry: webpackConfig.entry,
      module: {
        rules: webpackConfig.module.rules,
        loaders: [
          { test: /\.scss$/, loader: 'null-loader' },
          { test: /\.css$/, loader: 'null-loader' }
        ]
      },
      devtool: 'inline-source-map'
    },

    // list of files to exclude
    exclude: [
    ],

    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-typescript'),
      require('karma-typescript-preprocessor'),
      require('karma-requirejs'),
      require('karma-jasmine-html-reporter')
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/app/**/*.spec.ts': ['webpack']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'kjhtml'],

    // karmaTypescriptConfig: {
    //   tsconfig: "./tsconfig.json"
    // },

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }
  config.set(configuration);
}
