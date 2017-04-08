var webpack = require('webpack')
var path = require('path')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const jsCompress = new webpack.optimize.UglifyJsPlugin()

var plugins = []
if (process.env.NODE_ENV === 'production') plugins.push(jsCompress)

const jsConfig = {
  name: 'js',
  context: __dirname,
  entry: path.resolve('app','app.js'),
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

var cssPlugins = [new ExtractTextPlugin('application.css')]
if (process.env.NODE_ENV === 'production') cssPlugins.push(new OptimizeCssAssetsPlugin())

const cssConfig = {
  name: 'css',
  context: __dirname,
  entry: path.resolve('stylesheets', 'application.scss'),
  output: {
    path: 'build',
    filename: 'application.css'
  },
  module: {
    loaders: [
      {
        test: /\.scss$|.css$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: cssPlugins
}

module.exports = [jsConfig, cssConfig]
