const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const nodeExternals = require('webpack-node-externals');

module.exports = merge(baseWebpackConfig, {
	target: 'node',
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['isomorphic-style-loader', {
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
})

/**
 * isomorphic-style-loader 帮我们解析了 css
 */