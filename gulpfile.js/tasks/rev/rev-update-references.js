var config     = require('../../config')
var gulp       = require('gulp')
var path       = require('path')
var revReplace = require('gulp-rev-replace')
var debug        = require('gulp-debug')

    

// 2) Update asset references with reved filenames in compiled css + js
gulp.task('rev-update-references', function(){
  var manifest = gulp.src(path.join(config.root.dest, "rev-manifest.json"))

  return gulp.src(path.join(config.root.dest,'/**/**.{css,js}'))
  	.pipe(debug())
    .pipe(revReplace({manifest: manifest}))
    .pipe(debug())
    .pipe(gulp.dest(config.root.dest))
})
