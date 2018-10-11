var path = require('path');

var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'b.module.js',
        libraryTarget: 'commonjs',
        chunkFilename: '[id].chunk.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: 'awesome-typescript-loader', options: {
                        transpileOnly: true
                    }},
                    { loader: 'angular2-template-loader' },
                    { loader: 'angular-router-loader' }
                ]
            }
        ]
    },
    externals: [
        function (context, request, callback) {
            if (/^@angular/.test(request)) {
                return callback(null, 'commonjs ' + request);
            }
            callback();
        }
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});