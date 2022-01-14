const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.(svg|png|jpg|jpeg|gif|ttf)$/,
				loader: "file-loader",
				options: {
					name: "[path].[name].[ext]",
				},
			},
		],
	},
	plugins: [new MiniCssExtractPlugin({ filename: "[name].css" })],
});
