var config       = require('../config')
var path         = require('path')
var gulp         = require('gulp')
var concat       = require('gulp-concat')
var sourcemaps   = require('gulp-sourcemaps')
var uglify       = require('gulp-uglify');
var handleErrors = require('../lib/handleErrors')
var size         = require('gulp-size')
var debug        = require('gulp-debug')
var manifest     = require('asset-builder')( config.root.src + '/manifest.json' )




var jsTask = function() {

	var paths = {
    src: [],
    dest: path.join(config.root.dest, config.tasks.js.dest),
  }

  manifest.forEachDependency('js', function(dep) {
    
    // console.log( '### forEachDependency: js' );
    // console.log( 'dep.globs', dep.globs );
    // console.log( 'dep.name',  dep.name );
    
    paths.src.append(dep.globs);
  });

  paths.src.push(
    path.join(config.root.src, config.tasks.js.src, '/**/*.' + config.tasks.js.extensions + '') 
  );
  
  // console.log( 'js task', paths)
  
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(concat(config.tasks.js.concat))
    .pipe(uglify())
    // .pipe(debug())
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    // .pipe(size())
}

gulp.task('js', jsTask)
module.exports = jsTask