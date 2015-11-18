module.exports = {
	entry: './app/js/main.js',
	output: {
		path: './app',
		filename: 'bundle.js',
		publicPath: '/'    
	},
	devServer: {
        colors:             true,
        contentBase:        './app',
        historyApiFallback: true,
        inline:             true,
        progress:           true
    },
	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: ["style", "css", "sass"],
		},
		{
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