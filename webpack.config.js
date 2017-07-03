const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundles.js'
  },
  module: {
    loaders: [
      { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" },
      { enforce: "pre", test: /\.jsx$/, exclude: /node_modules/, loader: "eslint-loader" },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: [ 'style-loader', 'css-loader' ] }
    ]
  },
  devServer: {
    historyApiFallback: true
  },

  plugins: [HtmlWebpackPluginConfig]
}
