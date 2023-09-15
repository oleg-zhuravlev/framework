const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : false;

const getFilename = (ext) =>
  devMode ? `[name].bundle.${ext}` : `[name].[contenthash].bundle.${ext}`;

const getPlugins = () => {
  const base = [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ];

  if (devMode) {
    base.push(new ESLintPlugin());
  } else {
    base.push(new MiniCssExtractPlugin({
      filename: getFilename('css'),
    }));
  }

  return base;
};

/** @type {import('webpack/types').Configuration} */
module.exports = {
  mode,
  target,
  devtool,
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'build'),
    filename: getFilename('js'),
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: getPlugins(),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-preset-env'],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
          },
        },
      },
    ],
  },
};
