var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var APP_DIR =  path.resolve(__dirname, "./src/");

module.exports = {
    entry: APP_DIR + '/app/b.module.ts',
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loaders: ['html-loader']
            },
            {
                test: /\.css$/,
                loaders: ['raw-loader']
            }
        ],
        exprContextCritical: false
    }/*,
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]*/
};