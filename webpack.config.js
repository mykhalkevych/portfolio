const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'vendor': [ './src/js/vendor.js'],
		'main': ['./src/js/main.js']
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: './js/[name].bundle.js'
	},
	devtool: "cheap-eval-source-map",
	module: {
		rules: [
			{
			  test: /\.(scss|sass|css)$/,
			  use: ExtractTextPlugin.extract({
			  	fallback: 'style-loader',
          use: [
          	'css-loader',
          	{
          		loader: 'sass-loader',
          		options: {
          			 includePaths: ['/materialize-css/sass/']
          		}
          	}],
			  })
			},
			{ test: /\.(gif|png|jpe?g)$/i,
				loader: 'file-loader?name=[name].[ext]&outputPath=./images/&publicPath=../images/'
			},
			{ test: /\.woff(2)?$/, loader:"url-loader?name=./fonts/[name].[ext]?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)?$/, loader: "file-loader?name=./fonts/[name].[ext]" }
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 9500,
		open: true,
		stats: "errors-only"
	},
	plugins: [
		new HtmlWebpackPlugin({
		template: './src/index.html'
	}),
		new ExtractTextPlugin(
			{
				filename: './css/style.css',
				disable: false,
				allChunks: true
			}),
		new webpack.ProvidePlugin({
			'window.$': 'jquery',
			'window.jQuery': 'jquery'
		}),
	],
	 resolve: {
     modules: [
      "./node_modules"
    ],
    extensions: [".js", ".json", ".scss", ".css", ".html"]
  }

}