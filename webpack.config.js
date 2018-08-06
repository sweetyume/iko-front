const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path");
const env = process.env.NODE_ENV;

module.exports = {
    mode: env || 'development', 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.sc|ass$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: "sass-loader", 
                        options: {
                            sourceMap: true,
                            strictMath: true,
                            noIeCompat: true,
                            paths: path.resolve(__dirname, "node_modules")
                        }
                    }
                ]
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: 'fonts/[name].[hash].[ext]'
                }
            },
            {
                test: /\.sc|ass$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader},
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                ctx: {
                                    cssnano: {},
                                    autoprefixer: {}
                                }
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    { loader: 'image-webpack-loader' },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "main.[contenthash].css",
            chunkFilename: "[id].css",
        }),
        new DashboardPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new CleanWebpackPlugin('dist/*.*', {})
    ]
};