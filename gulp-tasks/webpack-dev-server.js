var webpackConfig = require("../webpack.config.js");
var gulp = require('gulp');
var WebpackDevServer = require("webpack-dev-server");
var gutil = require("gulp-util");
var webpack = require("webpack");


gulp.task("webpack-dev-server", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: "/dist/",
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});
