var config       = require('../config')
var gulp         = require('gulp')
var path         = require('path')
var watch        = require('gulp-watch')
var freemem      = require('../lib/freemem')
var gulpSequence = require('gulp-sequence')

var watchTask = function(cb) {
  var watchableTasks = ['fonts', 'iconFont', 'images', 'svgSprite','html', 'css']
  
  watchableTasks = config.watchableTasks;
  
  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName]
    if(task) {
      var glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
      
      console.log('watching ', glob);
      
      watch(glob, {
        verbose: true,
        usePolling: true
      }, function() {
        
         // require('./' + taskName)()
         
         gulpSequence( taskName )()
         
         freemem()
      })
      
    }
  })
}

gulp.task('watch', watchTask)
// gulp.task('watch', ['browserSync'], watchTask)
module.exports = watchTask