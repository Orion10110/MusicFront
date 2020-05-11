// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require('../utils');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: utils.resolve('src/index.html')
    })
  ]
};
