const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        popup: './src/popup/popup.js',
        background: './src/background.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'popup.html',
            template: './src/popup/index.html',
            chunks: ['popup'],
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: 'static', to: '.' }]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}