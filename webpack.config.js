const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	entry: ['@babel/polyfill', './src/index.js'],
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react'],
					plugins: [
						'transform-class-properties',
						'transform-object-rest-spread'
					]
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.sc|ass$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'resolve-url-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							strictMath: true,
							noIeCompat: true,
							paths: path.resolve(__dirname, 'node_modules')
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(eot|otf|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[hash].[ext]'
				}
			},
			{
				test: /\.sc|ass$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: 'css-loader',
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
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: ['file-loader', { loader: 'image-webpack-loader' }]
			}
		]
	},
	devServer: {
		proxy: [
			{
				path: ['/', '/all', '/users'],
				target: 'http://localhost:8086',
				secure: false,
				changeOrigin: true,
				bypass: function(req, res, proxyOptions) {
					if (req.headers.accept.indexOf('html') !== -1) {
						console.log('skipping proxy for browser request');
						return '/index.html';
					}
				}
			}
		],
		// Fichiers à distribuer
		contentBase: path.resolve('./public'),
		// CORS
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers':
				'X-Requested-With, content-type, Authorization'
		}
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
			//   hash: true
		}),
		new MiniCssExtractPlugin({
			filename: 'main.[contenthash].css',
			chunkFilename: '[id].css'
		}),
		new DashboardPlugin(),
		new FriendlyErrorsWebpackPlugin(),
		new CleanWebpackPlugin('dist/*.*', {})
	]
};
