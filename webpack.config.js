const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const config = {
    mode: 'development',
    entry: {
        index: [
            './src/app/index.js',
            'webpack-hot-middleware/client?timeout=20000&reload=true'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    target: 'web',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                /*
                for any file with extension presentation/jsx pipe it
                through babel-loader
                 */
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true,
        hotOnly: true,
        inline: true,
        historyApiFallback: true,
        open: true,
        overlay: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve('./src/index.html'),
            excludeChunks: [ 'server' ]
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = config;
