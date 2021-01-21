const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/server/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_module | bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						// plugins: [
						// 	"@babel/plugin-transform-async-to-generator",
						// 	"@babel/plugin-proposal-class-properties",
						// 	["@babel/plugin-transform-runtime",
						// 		{
						// 			"regenerator": true
						// 		}
						// 	]
						// ]
					}
				}
			}
		]
	}
}