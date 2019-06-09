import conf from './system/config';
import PrettierPlugin from 'prettier-webpack-plugin';
import glob from 'glob';

const entries = [];

glob
  .sync(`./${conf.src}/**/${conf.js}`, {
    ignore: `./${conf.src}/**/_${conf.js}`
  })
  .map(file => entries.push(file));

export default {
  entry: entries,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
          failOnWarning: true
        }
      }
    ]
  },
  plugins: [
    new PrettierPlugin()
  ]
};
