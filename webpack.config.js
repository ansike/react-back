'use strict';
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
  externals: {
    'jquery': 'jQuery'
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
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader!postcss-loader'
      })
    }, {
      test: /\.less/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader!postcss-loader!less-loader'
      })
    }]
  },
  postcss: [
    require('autoprefixer') //调用autoprefixer插件
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function() {
          return [require('autoprefixer')];
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: './app/modules/template.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),

    // 分离css      
    new ExtractTextPlugin("[name].css"),

    //抽取公共的js
    new webpack.optimize.CommonsChunkPlugin({
      // 与 entry 中的 vendors 对应
      name: 'vendors',
      // 输出的公共资源名称
      filename: 'common.bundle-[hash].js',
      // 对所有entry实行这个规则
      minChunks: Infinity
    }),

    // 把jquery作为全局变量插入到所有的代码中
    // 然后就可以直接在页面中使用jQuery了
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),

  ]
};