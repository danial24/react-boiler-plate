var gulp = require('gulp');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('server', function() {
  browserSync({
    server: {
     baseDir: 'dist',
      middleware: [historyApiFallback()]
    },
    port:3000
  });
});
