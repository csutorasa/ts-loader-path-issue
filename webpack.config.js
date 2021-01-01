const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
          test: /\.tsx?$/,
          use: 'ts-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.ts'],
  }
};