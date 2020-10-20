const path = require("path");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    port: 3000,
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  devtool: "eval-source-map",
  resolve: {
    alias: {        
        'react-router-dom': path.resolve('./node_modules/react-router-dom')
    }
}
};
