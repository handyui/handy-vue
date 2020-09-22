const path = require('path');
const config = require('../config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const allSource = [resolve('src'), resolve('example'), resolve('test')];

module.exports = {
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.md', '.json', '.ts', '.tsx'],
    alias: {
      // vue: "@vue/runtime-dom",
      '@': resolve('src'),
      docs: resolve('docs'),
      site: resolve('site'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: { loader: "vue-loader" },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: { appendTsSuffixTo: [/\.vue$/] },
        },
      },
      {
        test: /\.md$/,
        use: ['vue-loader', require.resolve("../packages/markdown-loader/src/index")]
      },
      {
        test: /\.css$/,
        use: [
          // { loader: "style-loader" },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            // options: {
            //   prependData: '@import "src/components/color/src/index.scss";',
            // },
          },
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif|webp|ico)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 4096,
            fallback: {
              loader: "file-loader",
              options: { name: "img/[name].[hash:8].[ext]" },
            },
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 4096,
            fallback: {
              loader: "file-loader",
              options: { name: "fonts/[name].[hash:8].[ext]" },
            },
          },
        },
      },
    ],
  },
};
