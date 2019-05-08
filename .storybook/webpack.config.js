const path = require("path");
const globImporter = require("node-sass-glob-importer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	module: {
		rules: [
/* 			{
				test: /\.svg$/,
				loader: "svg-sprite-loader"
			}, */
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract([
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader",
						options: {
							importer: globImporter()
						}
					}
				])
			},
			{
				test: /\.(png|jpg|svg|gif)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "style.css"
		})
	]
};
