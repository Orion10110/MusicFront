const merge = require('webpack-merge');
const css = require('./modules/css-prod');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, css, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
});
