const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const path = require('path');

module.exports = merge(baseWebpackConfig, {
	entry: './src/client/index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, '../public')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', {
					loader: 'css-loader',
					options: {
						modules: {
							localIdentName: "[name]__[local]--[hash:base64:3]"
						}
					}
				}]
			}
		]
	},
	devtool: 'inline-cheap-source-map'
})
// {
// 	localIdentName: "[name]__[local]--[hash:base64:3]",
// },