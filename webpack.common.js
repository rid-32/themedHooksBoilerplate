const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ConfigWebpackPlugin = require('config-webpack')

const rootAssetPath = path.join(__dirname, 'public/assets')

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public/application.html'),
  }),
  new webpack.DefinePlugin({
    'process.env.CONFIG': JSON.stringify(require('config')),
  }),
  new webpack.ProgressPlugin(),
  new ConfigWebpackPlugin(),
]

const jsxLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
}

const cssLoader = {
  test: /\.(s)?css$/,
  use: ['css-loader', 'postcss-loader', 'sass-loader'],
}

const fileLoader = {
  test: /\.(wav|webm|mp3|woff|woff2|ttf|eot|svg|png|jpe?g|gif|ico)(\?.*)?$/i,
  use: {
    loader: 'file-loader',
    options: {
      name: '[path][name].[hash].[ext]',
      context: rootAssetPath,
    },
  },
}

const alias = {
  assets: path.resolve(__dirname, rootAssetPath),
}

const extensions = ['.js', '.jsx', '.json', '.scss', '.css']

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'src/index.js')],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    alias,
    extensions,
  },
  module: {
    rules: [jsxLoader, cssLoader, fileLoader],
  },
  plugins,
}
