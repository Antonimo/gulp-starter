var config       = require('../config')
if(!config.tasks.js) return

var gulp         = require('gulp')
var browserSync  = require('browser-sync')
var sourcemaps   = require('gulp-sourcemaps')
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var handleErrors = require('../lib/handleErrors')
var path         = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.js.src, '/**/*.js'),
  dest: path.join(config.root.dest, config.tasks.js.dest)
}

var jsTask = function() {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(uglify()) 
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    // .pipe(browserSync.reload({stream:true}));
}

gulp.task('js', jsTask)
module.exports = jsTask