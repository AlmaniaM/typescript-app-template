const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
    ],
    alias: {
      'handlebars': 'handlebars/dist/handlebars.js',
    },
  },
  plugins: [
    new webpack.IgnorePlugin(/^pg-native$/),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/production/ts-app'),
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  mode: 'production'
};