const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/',
  },
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 3000,
    publicPath: '/',
    historyApiFallback: true,
  },
  devtool: 'source-map',
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(css|scss)$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  stats: {
    errorDetails: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
