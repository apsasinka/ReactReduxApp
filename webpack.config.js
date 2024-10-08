const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HTMLWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill", './src/index.jsx'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        publicPath: '/',
    },
    plugins: [
        new HTMLWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin(),
        new Dotenv(),
        new webpack.IgnorePlugin({
            resourceRegExp: /typescript/
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },    
    devServer: {
        port: 3000,
        static: "./src",
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ["file-loader"]
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"]
                  }
                }
              }
        ]
    }
}