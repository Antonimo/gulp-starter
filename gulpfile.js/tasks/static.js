var config   = require('../config')
var changed  = require('gulp-changed')
var gulp     = require('gulp')
var path     = require('path')
var manifest = require('asset-builder')( config.root.src + '/manifest.json' )
var flatten  = require('gulp-flatten')
var debug    = require('gulp-debug')

var paths = {
  src: path.join(config.root.src, config.tasks.static.src, '/**'),
  dest: path.join(config.root.dest, config.tasks.static.dest)
}

var staticTask = function() {
  
  // fonts
  
  gulp.src(manifest.globs.fonts)
    .pipe(flatten())
    // .pipe(debug())
    .pipe(gulp.dest(paths.dest + 'fonts'));


  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
}

gulp.task('static', staticTask)
module.exports = staticTask