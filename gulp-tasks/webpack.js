var gulp = require('gulp');
var runSequence = require('run-sequence');
var exec = require('child_process').exec;

gulp.task('webpack', function(cb) {

  exec('webpack -d', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  }).stdout.on('data',function(data){console.log(data)});
  });
