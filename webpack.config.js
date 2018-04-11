const path = require('path');
const fs = require('fs');

const webpackConfig = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'none',
  entry: ['babel-polyfill', './src/index.js'],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'test.js',
    libraryTarget: 'umd'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        query: {
          presets: ['babel-preset-env'].map(require.resolve)
        }
      }
    ]
  }
};

module.exports = webpackConfig;
