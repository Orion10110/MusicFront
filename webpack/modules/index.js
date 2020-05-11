// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const images = require('./images');
const alias = require('./alias');
const js = require('./js');
const plugins = require('./plugins');
const fonts = require('./fonts');


module.exports = merge(
  alias,
  js,
  images,
  fonts,
  plugins);
