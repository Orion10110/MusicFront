module.exports = {
  module: {
    rules: [{
      test: /\.(css|s[ac]ss)$/,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader'
      ]
    }]
  }
};
