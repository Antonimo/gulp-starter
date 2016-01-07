var config       = require('../config')
if(!config.tasks.css) return

var gulp           = require('gulp')
// var browserSync = require('browser-sync')
var sass           = require('gulp-sass')
var sourcemaps     = require('gulp-sourcemaps')
var handleErrors   = require('../lib/handleErrors')
var autoprefixer   = require('gulp-autoprefixer')
var path           = require('path')
var flipper        = require('gulp-css-flipper');
var rename         = require('gulp-rename');
var gutil          = require("gulp-util")
var sizereport     = require("gulp-sizereport")
var size           = require('gulp-size')

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.css.dest),
  rtl :{
    src: path.join(config.root.dest, config.tasks.css.dest, '/**/*.css')
  }
}

var cssTask = function () {
  
  // console.log('css paths', paths);
  
  var sass_options = config.tasks.css.sass;
  
  if( GLOBAL.enabled.production ){
    var sass_options = config.tasks.css.sass_production;
  }
  
  // console.log( 'GLOBAL.enabled.production', GLOBAL.enabled.production );
  
  
  var stream = gulp.src(paths.src)
    // .pipe(sourcemaps.init())
    .pipe(sass(sass_options))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.tasks.css.autoprefixer))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    // .pipe(browserSync.stream())
    
    // .pipe(size())
    
    
    //! move to its own task ?
    
    // .pipe(rename(function (path) {
    //     path.basename += ".rtl";
    // }))
    // .pipe(flipper())
    // .pipe(gulp.dest(paths.dest))
    
    // .pipe(size())
    
    
  return stream;
  
}

gulp.task('css', cssTask)
module.exports = cssTask
