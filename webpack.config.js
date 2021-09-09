const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          // "postcss-loader",
        ],
      },
    ],
  },
  // Optional for webpack-dev-server
  devServer: {
    watchFiles: ['src/**/*', 'dist/**/*'],
    static: path.resolve(__dirname, "dist"),
    open: true,
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'app.css'}),
  ]
}