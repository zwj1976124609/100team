var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './entry.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'foo.bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'url-loader'
			},{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};