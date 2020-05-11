const path = require('path');

module.exports = {
  resolve: function resolve (dir) {
    return path.join(__dirname, '..', dir);
  },

  assetsPath: function assetsPath (_path) {
    const assetsSubDirectory = 'static';
    return path.posix.join(assetsSubDirectory, _path);
  }
};
