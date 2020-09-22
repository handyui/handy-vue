const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const OptimizeCss=require('optimize-css-assets-webpack-plugin');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const {merge} = require('webpack-merge');
const utils = require('./utils');
const config = require('../config');
const entries = require('../script/css-entry')();

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
  // new OptimizeCSSPlugin({
  //   cssProcessorOptions: config.build.productionSourceMap ? { safe: true, map: { inline: false } } : { safe: true },
  // }),
];

delete baseWebpackConfig.output;
delete baseWebpackConfig.entry;

// 按需加载组件，通用reset样式
entries.base = path.resolve(__dirname, '../styles/base');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../release/lib/theme'),
    filename: '[name].js',
  },
  plugins,
  optimization:{ // 优化项
    minimizer:[
      new OptimizeCss({
        assetNameRegExp:/\.css$/g,
        cssProcessor:require('cssnano')
      })
    ]
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      userPostCss: true,
      extract: true,
    }),
  },
});
