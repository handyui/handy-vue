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
      // vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      docs: resolve('docs'),
      site: resolve('site'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(vue)$/,
        loader: 'vue-loader',
        exclude: /\.(en-US.md|zh-CN.md)$/,
      },
      {
        test: /\.md$/,
        use: ['vue-loader', require.resolve("../packages/markdown-loader/src/index")]
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /pickr.*js/,
        options: {
          cacheDirectory: true,
          // presets: [
          //   [
          //     '@babel/preset-env',
          //     {
          //       targets: {
          //         browsers: [
          //           'last 2 versions',
          //           'Firefox ESR',
          //           '> 1%',
          //           'ie >= 9',
          //           'iOS >= 8',
          //           'Android >= 4',
          //         ],
          //       },
          //     },
          //   ],
          // ],
        },
      },
      // {
      //   test: /\.ts$/,
      //   loader: 'ts-loader',
      //   options: {
      //     appendTsSuffixTo: [/\.vue$/],
      //   }
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use:[
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 10000,
              name: 'img/[name].[hash:7].[ext]',
            },
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'media/[name].[hash:7].[ext]',
            },
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'fonts/[name].[hash:7].[ext]',
            },
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          'css-loader',
        ],
      },
    ],
  },
};
