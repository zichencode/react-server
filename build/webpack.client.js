const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const path = require('path');

module.exports = merge(baseWebpackConfig, {
	entry: './src/client/index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, '../public')
	},
	devtool: 'inline-cheap-source-map'
})