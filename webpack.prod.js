const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "bundle.[hash].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [{ test: /\.scss$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] }],
	},
	plugins: [new MiniCssExtractPlugin({ filename: "[name].[hash].css" })],
});
