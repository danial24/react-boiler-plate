// /**
// *
// * Copyright 2015 Google Inc. All rights reserved.
// *
// * Licensed under the Apache License, Version 2.0 (the 'License');
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// *     http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an 'AS IS' BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// */

// var gulp = require('gulp');
// var del = require('del');
// var gulpif = require('gulp-if');
// var runSequence = require('run-sequence');
// var minifyCSS = require('gulp-minify-css');
// var autoprefixer = require('gulp-autoprefixer');
// var sass = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps');
// var license = require('gulp-license');
// var browserSync = require('browser-sync');
// var reload = browserSync.reload;
// var rename = require('gulp-rename');
// var config = require('../config');


// var AUTOPREFIXER_BROWSERS = [
//   'ie >= 10',
//   'ie_mob >= 10',
//   'ff >= 30',
//   'chrome >= 34',
//   'safari >= 7',
//   'opera >= 23',
//   'ios >= 7',
//   'android >= 4.4',
//   'bb >= 10'
// ];

// gulp.task('css', function() {  //why not applying on css? @Rohail, can you please look?
//     return gulp.src('../'+ config.dest +'/assets/styles/application.css')
//         .pipe(cssbeautify({
//             indent: '  ',
//             openbrace: 'separate-line',
//             autosemicolon: true
//         }))
//         .pipe(gulp.dest('../'+ config.dest +'/assets/styles/'));;
// });


// gulp.task('styles:watch', function() {
//   gulp.watch(GLOBAL.config.src + '/**/*.*cs*', ['styles',reload]);
// });

// // Delete any files currently in the scripts destination path
// gulp.task('styles:clean', function(cb) {
//   del([GLOBAL.config.dest + '/**/*.css'], {dot: true})
//   .then(function() {
//     cb();
//   });
// });

// gulp.task('styles:sass', function() {
//   return gulp.src(GLOBAL.config.src + '/**/*.scss')
//   // Only create sourcemaps for dev
//   .pipe(gulpif(GLOBAL.config.envConfig.IS_PRODUCTION, sourcemaps.init()))
//   .pipe(sass().on('error', sass.logError))
//   .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
//   .pipe(gulpif(GLOBAL.config.envConfig.IS_PRODUCTION , minifyCSS()))
//   .pipe(license(GLOBAL.config.license, GLOBAL.config.licenseOptions))
//   .pipe(gulpif(GLOBAL.config.envConfig.IS_PRODUCTION, sourcemaps.write()))
//   .pipe(gulp.dest(GLOBAL.config.dest));
// });



// gulp.task('styles:rename', function() {
//   var jsonfile = require('jsonfile');
//   var buildManifestFilePath = config.dest + '/js/build-manifest.json';
//   var buildManifest = jsonfile.readFileSync(buildManifestFilePath);
//   var hash = buildManifest['index.js'].replace(/[\.indexjs_]/g , "");

//   gulp.src(config.dest + '/assets/styles/application.css')
//   .pipe(rename('application_'+hash+'.css'))
//   .pipe(gulp.dest(GLOBAL.config.dest+'/assets/styles'));
// });

// gulp.task('styles', function(cb) {
//   runSequence(
//     'styles:clean',
//     'styles:sass',
//     'styles:rename',
//     cb
//   );
// });