const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", "./app/index.js"],

    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: './'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            }, {
                test: /\.(jpe?g|png|gif)$/i,
                loader: "file-loader",
                query: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                }
            }, {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            }, {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                'env', {
                                    "targets": {
                                        "ie": 11
                                    }
                                }
                            ]
                        ]
                    }
                }
            }, {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery", "window.jQuery": "jquery'", "window.$": "jquery"}),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({template: './app/index.html'})
    ],

    devtool: 'eval-source-map'
};