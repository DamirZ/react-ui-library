/* global __dirname, require, module*/

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const globImporter = require("node-sass-glob-importer");
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin; // Minify JS

const config = {
	// An entry point indicates which module webpack should use to begin building out its internal dependency graph.
	entry: {
		style: path.resolve(__dirname, "./src/damir-ui.scss"), //Import all styles from file on this location
		script: path.resolve(__dirname, "./src/index.js") //Import all components from file on this location
	},

	// The output property tells webpack where to emit the bundles it creates and how to name these files.
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js",
		publicPath: 'build/',
		chunkFilename: "[name]-[hash].js",
		libraryTarget: "umd",
		umdNamedDefine: true
	},

	// Loaders allow webpack to process other types of files and convert them into valid modules
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, // Test these extensions
				exclude: /(node_modules)/, // Exclude these modules
				use: {
					loader: "babel-loader" // Use babel-loader for testing
				}
			},
			{
				test: /\.(s*)css$/,
				use: ExtractTextPlugin.extract([
					{
						loader: "css-loader" // translates CSS into CommonJS
					},
					{
						loader: "postcss-loader" // Autoprefixer
					},
					{
						loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default
						options: {
							importer: globImporter() // Allows wildcards in imports
						}
					}
				])
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: "url-loader",
				options: {
				fallback: 'file-loader',
				limit: Infinity // everything
				}
			},
			{
				test: /\.json$/,
				loader: "json"
			}
		]
	},

	// Plugins to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.
	plugins: [
		//We need this plugin to take all
		new ExtractTextPlugin("styles.min.css", {
			allChunks: true
		}),
		// Minify, update imports, and move images to this folder
		new CopyWebpackPlugin([{ from: "src/images", to: "images" }]),

		new UglifyJsPlugin({ minimize: true, output: { comments: false } }) // Minify JS
	],

	devtool: "source-map",

	// These options change how modules are resolved.
	resolve: {
		extensions: ["*", ".js", ".jsx", ".json"], // Enables users to leave off the extension when importing
		modules: [path.resolve("./node_modules"), path.resolve("./src")],
		alias: {
			DamirUI: path.resolve(__dirname, "./build/index.js")
		}
	}
};

module.exports = config;