var webpack = require("webpack");
var version = require("./package.json").version;
var banner =
  "/**\n" +
  " * StockDB v" + version + "\n" +
  " * https://github.com/stockdb/stockdb-js\n" +
  " * MIT License\n" +
  " */\n";

module.exports = {
  entry: "./src/common.js",
  target: "node",
  output: {
    path: "./dist",
    filename: "stockdb.common.js",
    library: "StockDB",
    libraryTarget: "umd"
  },
  externals: /^[^.]/,
  plugins: [
    new webpack.BannerPlugin(banner, { raw: true })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel" ,exclude: /node_modules/ }
    ]
  },
}
