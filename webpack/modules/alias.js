const utils = require('../utils');

module.exports = {
  resolve: {
    alias: {
      address: utils.resolve('src/addresses'),
      pages: utils.resolve('src/components/pages'),
      components: utils.resolve('src/components'),
      router: utils.resolve('src/router'),
      assets: utils.resolve('src/assets'),
      $scss: utils.resolve('src/scss'),
      services: utils.resolve('src/services'),
      constants: utils.resolve('src/constants'),
      fonts: utils.resolve('src/assets/fonts'),
      shared: utils.resolve('src/shared'),
      $redux: utils.resolve('src/redux')
    }
  }
};
