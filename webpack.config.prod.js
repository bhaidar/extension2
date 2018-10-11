var path = require('path');

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');
var ngw = require('@ngtools/webpack');
var ROOT_DIR = path.resolve(__dirname, "./");
var APP_DIR =  path.resolve(__dirname, "./src/");

module.exports = webpackMerge(commonConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      },
      {
        test: /\.ts$/,
        use: [
          {loader: 'awesome-typescript-loader'},
          {loader: 'angular2-template-loader'},
        //   {loader: 'angular-router-loader?aot=true'}
        ]
      }
    ]
  },
//   externals: [
//     function (context, request, callback) {
//         if (/^@angular/.test(request)) {
//             return callback(null, 'commonjs ' + request);
//         }
//         callback();
//     }
//   ],
  plugins: [
    new ngw.AngularCompilerPlugin({
      tsConfigPath: './tsconfig.aot.json',
      entryModule: APP_DIR + '/app/b1.module#BModule'
    })
  ]
});