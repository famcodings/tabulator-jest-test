const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => ({
  entry: "./src/main.js",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src/"),
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
});
