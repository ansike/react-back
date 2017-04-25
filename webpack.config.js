var path = require('path');
var webpack = require('webpack');
console.log(__dirname)
module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8181
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        compact: true,
        presets: ['es2015', 'react']
      }

    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.less/,
      loader: 'style-loader!css-loader!less-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  // externals: {
  //     "jquery": "jQuery"
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};