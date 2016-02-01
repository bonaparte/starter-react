var path = require("path");

module.exports = {
	entry: './app/main.js',
	output: {
		path: 'dist',
		filename: 'bundle.js',
		publicPath: '/'    
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			exclude: (/node_modules/),
			query: {
				cacheDirectory: true,
				presets: ['es2015', 'react']
			}
		}]
	}
};