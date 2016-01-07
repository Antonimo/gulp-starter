var config       = require('../config')
if(!config.tasks.wiredep) return
  
/*
  todo:
    wiredep for js and statics (fonts, etc) ?
*/

var gulp           = require('gulp')
var handleErrors   = require('../lib/handleErrors')
var path           = require('path')
var gutil          = require("gulp-util")

var wiredepTask = function () {
  
  paths = config.tasks.wiredep.src.map(function (depSrc) {
    return path.join(config.root.src, depSrc)
  });
  
  console.log('wiredep paths', paths);
  // return;
  
  var wiredep = require('wiredep').stream;
  
  return gulp.src(paths)
    .pipe(wiredep())
    .pipe(gulp.dest( path.join(config.root.src, config.tasks.css.src) ))
}

gulp.task('wiredep', wiredepTask)
module.exports = wiredepTask
