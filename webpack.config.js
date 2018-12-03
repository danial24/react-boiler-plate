var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');
var path = require('path');

var isProduction = false;

var getPlugins = function(){
    var pluginsList = [
      // new webpack.DefinePlugin({
      //   'process.env': { NODE_ENV: JSON.stringify(config.env) }
      // }),
      new webpack.NamedModulesPlugin(),
      new ManifestPlugin({
        fileName: 'build-manifest.json'
      }),
    ];
    return pluginsList;
  }
  module.exports = {
    mode:'production',
    optimization: {
      minimize: false,
      splitChunks: {
        chunks: 'async',
        minSize: 50000,
        maxSize: 0,
        minChunks: 5,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups:{
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            priority: 10,
            enforce: true
          }
        }
        // cacheGroups: {
        //   vendors: {
        //     test: /[\\/]node_modules[\\/]/,
        //     priority: -10
        //   },
        //   default: {
        //     minChunks: 2,
        //     priority: -20,
        //     reuseExistingChunk: true
        //   }
        // }
      }
    },
    cache: true,
    entry: {
        index: [
            './main.js'
        ],
      },
    output: {
        path:path.join(__dirname, "dist/js"),
        filename: (isProduction ? "[name]_[hash].js" : "[name].js"),
        chunkFilename: (isProduction ? "[name]_[hash].js" : "[name].js"),
        publicPath:"/js/"
      },
     
    devServer: {
      contentBase: path.join(__dirname, "dist"),      
      //  inline: true,
      //  port: 80
       port: 8083,
       host: "0.0.0.0",
       historyApiFallback: true,
       disableHostCheck: true,
       compress: true
       // hot: true,
    },
    plugins: getPlugins(),    
    module: {

        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
             }
          ]
    }
 }
