const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ConfigWebpackPlugin = require('config-webpack')

const rootAssetPath = path.join(__dirname, 'assets')

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.html'),
  }),
  new webpack.DefinePlugin({ CONFIG: JSON.stringify(require('config')) }),
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

const svgInlineLoader = {
  test: /\.inlinesvg$/,
  loader: 'svg-inline-loader',
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
  Assets: path.resolve(__dirname, 'assets'),
  Api: path.resolve(__dirname, 'src/Api'),
  UI: path.resolve(__dirname, 'src/UI'),
  UIKit: path.resolve(__dirname, 'src/UIKit'),
  Stylesheets: path.resolve(__dirname, 'src/Stylesheets'),
  Models: path.resolve(__dirname, 'src/Models'),
  AppRoutes: path.resolve(__dirname, 'src/routes'),
  AppStore: path.resolve(__dirname, 'src/store'),
  AppSettings: path.resolve(__dirname, 'src/Stylesheets/settings'),
  Utils: path.resolve(__dirname, 'src/Utils'),
  Decorators: path.resolve(__dirname, 'src/Decorators'),
  Ducks: path.resolve(__dirname, 'src/Ducks'),
  Constants: path.resolve(__dirname, 'src/Constants'),
  Context: path.resolve(__dirname, 'src/Context'),
}

const extensions = ['.js', '.jsx', '.json', '.scss', '.css']

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, '/src/index.js')],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias,
    extensions,
  },
  module: {
    rules: [jsxLoader, cssLoader, svgInlineLoader, fileLoader],
  },
  plugins,
}
