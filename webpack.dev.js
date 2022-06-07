const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        contentBase: "./dist",
        port: 3001,
        open: true,
        hot: true,
        stats: {
            children: false,
            maxModules: 0
        }
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js'
    },
    plugins: [ 
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: "Development",
            template: "./src/index.html",
            filename: "index.html",
        }),
        new TerserWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization:{
        minimize: true,
        minimizer: [new TerserWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()]
    },
    module:{
        rules:[
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css-loader'],
                test: /\.css$/,
            },
            {
                test: /\.pug$/,
                use: ['pug-loader'],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ]
    }
}