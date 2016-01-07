var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')
var getEnabledTasks = require('../lib/getEnabledTasks')

var defaultTask = function(cb) {
  var tasks = getEnabledTasks('watch')
  
  console.log( "Enabled Tasks for watch:", tasks );
  
  if( tasks.assetTasks.length == 0 ){
  	gulpSequence('clean', tasks.codeTasks, 'static', 'watch', cb); return;
  }
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'static', 'watch', cb)
}

gulp.task('default', defaultTask)
module.exports = defaultTask
