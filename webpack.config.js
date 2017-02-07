var webpack = require('webpack');

module.exports = {
	entry: [
		'./src/app.jsx'
	],
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: 'dist/assets',
		filename: 'bundle.js',
		publicPath: 'assets'
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						babelrc: false,
						presets: [
						'latest',
						'stage-0',
						'react'
						]
					}
				}]
			},
			{
				test:/\.css$/,
				use: ['style-loader', 'css-loader', 'autoprefixer-loader']
			},
			{
				test:/\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
			}
		] 
	},
	devtool: 'eval'
}