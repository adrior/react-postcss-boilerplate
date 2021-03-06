const path = require("path");

module.exports = {
  entry: { main: "./src/app.js" },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: { importLoaders: 1, sourceMap: true }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  }
};
