const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    demo: resolve('./example/main.ts'),
    site: resolve('./site/main.ts'),
  },
  devServer: {
    // historyApiFallback: {
    //   rewrites: [{ from: /./, to: '/index.html' }],
    // },
    disableHostCheck: true,
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
        filename: 'demo.html',
        template: 'example/index.html',
        favicon: 'example/assets/images/favicon.ico',
        chunks: ['demo'],
        inject: true,
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'site/index.html',
        favicon: 'site/assets/images/favicon.ico',
        pathname: '/',
        chunks: ['site'],
        inject: true,
    }),
    new VueLoaderPlugin()
  ],
})
