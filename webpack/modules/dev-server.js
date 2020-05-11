const HOST = 'localhost';
const PORT = 8083;

module.exports = {
  devServer: {
    clientLogLevel: 'warning',
    contentBase: 'dist',
    compress: false,
    host: HOST,
    port: PORT,
    openPage: 'main',
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    quiet: true
  }
};
