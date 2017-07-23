var config       = require('../config')
if(!config.tasks.css) return

var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var browserSync  = require('browser-sync')
var sass         = require('gulp-sass')
var sourcemaps   = require('gulp-sourcemaps')
var handleErrors = require('../lib/handleErrors')
var autoprefixer = require('gulp-autoprefixer')
var path         = require('path')
var cssnano      = require('gulp-cssnano')
var flipper      = require('gulp-css-flipper')
var rename       = require("gulp-rename")
var clone        = require('gulp-clone');
var es           = require('event-stream');

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

var cssTask = function () {
  
  return gulp.src(paths.src)
    // .pipe(gulpif(!global.production, sourcemaps.init()))
    .pipe(sass(config.tasks.css.sass))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.tasks.css.autoprefixer))
    .pipe(gulpif(global.production, cssnano({autoprefixer: false})))
    // .pipe(gulpif(!global.production, sourcemaps.write()))
    .pipe(gulp.dest(paths.dest))
    // .pipe(browserSync.stream())
    
    
    
  // var compiled = gulp.src(paths.src)
  //   .pipe(gulpif(!global.production, sourcemaps.init()))
  //   .pipe(sass(config.tasks.css.sass))
  //   .on('error', handleErrors);
    
  // var normal = compiled
  //   .pipe(autoprefixer(config.tasks.css.autoprefixer))
  //   // .pipe(gulpif(global.production, cssnano({autoprefixer: false})))
  //   // .pipe(gulpif(!global.production, sourcemaps.write()))
  //   .pipe(gulp.dest(paths.dest))
    
  // var flipped = compiled.pipe(clone())
  //   .pipe(rename(function (path) {
  //     path.basename += ".rtl";
  //   }))
  //   .pipe(flipper())
  //   .pipe(autoprefixer(config.tasks.css.autoprefixer))
  //   .pipe(gulp.dest(paths.dest))
    
  // return es.merge(normal, flipped);
}

gulp.task('css', cssTask)
module.exports = cssTask
