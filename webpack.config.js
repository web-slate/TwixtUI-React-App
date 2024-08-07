const webpack = require("webpack");
const path = require("path");
const PACKAGE = require("./package.json");

// WebPack Plugins.
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@tw/images": path.resolve(__dirname, "src", "static", "assets", "images"),
      "@tw/components": path.resolve(__dirname, "src", "components"),
      "TwixtUI": path.resolve(__dirname, "src/TwixtUI"),
      "@tw/examples": path.resolve(__dirname, "src", "examples"),
    },
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "tw.js",
    chunkFilename: "[name].js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      VERSION: PACKAGE.version,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "src/static/index.html"),
      APP_ROOT_ID: "twixt",
      APP_TITLE: "React App - Twixt UI",
      APP_VERSION: PACKAGE.version,
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/static/images", to: "images" },
        { from: "./src/static/style.css", to: "style.css" },
        // { from: "./src/static/tailwind.min.css", to: "tailwind.min.css" },
      ],
    }),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "src/static"),
    },
    hot: true,
    port: 3001,
    proxy: {
      "/api": "http://YOUR_API_URL:9000",
    },
  },
};
