const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const nodeExternals = require('webpack-node-externals');

module.exports = merge(baseWebpackConfig, {
	target: 'node',
	externals: [nodeExternals()],
})
