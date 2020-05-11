module.exports = {
  module: {
    rules: [{
      test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }]
    }]
  }
};
