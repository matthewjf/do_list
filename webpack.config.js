var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const jsCompress = new webpack.optimize.UglifyJsPlugin({
  compress: { warning: true }
})

const jsConfig = {
  name: 'js',
  context: __dirname,
  entry: path.resolve('app','app.js'),
  output: {
    path: 'assets',
    filename: 'bundle.js'
  },
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

const cssConfig = {
  name: 'css',
  context: __dirname,
  entry: path.resolve('stylesheets', 'application.scss'),
  output: {
    path: 'assets',
    filename: 'application.css'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('application.css')
  ]
}

module.exports = [jsConfig, cssConfig]
