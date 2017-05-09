var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  // devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项
  entry: ['./app/router.js'],
  output: {
    path: './build',
    filename: 'bundle-[hash].js'
  },
  devServer: { //webpack-dev-server配置
    historyApiFallback: true, //不跳转
    hot: true,
    inline: true,
    progress: true,
    port: 9090, //端口你可以自定义 
    contentBase: './build'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader!postcss"
    }, {
      test: /\.less/,
      loader: 'style-loader!css-loader!postcss!less-loader'
    }]
  },
  postcss: [
    require('autoprefixer') //调用autoprefixer插件
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  },
  // externals: {
  //     "jquery": "jQuery"
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/modules/template.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    // new ExtractTextPlugin("style.css")
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor'],
    //   filename: 'vendor.js'
    // })
  ]
};