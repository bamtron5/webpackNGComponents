var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter

    mime: {
      'text/x-typescript': ['ts']
    },

    // list of files / patterns to load in the browser
    files: [
      'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
      'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
      'node_modules/jasmine-core/lib/jasmine-core/boot.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'client/dist/bundle.js',
      'client/app/**/*.spec.ts'
    ],

    // customContextFile: 'test/unit/context.html',
    // customDebugFile:   'test/unit/debug.html',

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
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-typescript',
      'karma-typescript-preprocessor',
      'karma-requirejs'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/app/**/*.spec.ts': ['webpack']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

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


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
