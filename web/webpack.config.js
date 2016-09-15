'use strict';
//var Promise = require('es6-promise').Promise; // polyfill
var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    appPath = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        demo: path.join(appPath, 'index.jsx'),
        vendor: ['react']
    },
    resolve: {
        root: appPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '',
        filename: 'plun-[name]-[hash].js',
        pathInfo: true
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css?importLoaders=1!postcss'},
            {test: /\.jsx?$/, loader: 'babel?presets[]=es2015&presets[]=react', exclude: /node_modules/},
            {test: /\.s?css$/,loaders: ["style", "css", "sass"]}
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
    ],
    devServer : {
        contentBase: './tmp',
        historyApiFallback: true
    },
    devtool: "eval-cheap-module-source-map",
    debug: true
};