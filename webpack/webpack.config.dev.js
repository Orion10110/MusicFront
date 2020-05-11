const webpack = require('webpack');
const merge = require('webpack-merge');
const css = require('./modules/css-dev');
const devServer = require('./modules/dev-server');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, css, devServer, {
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
