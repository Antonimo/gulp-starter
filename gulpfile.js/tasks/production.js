var config       = require('../config')
var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')
var getEnabledTasks = require('../lib/getEnabledTasks')

var productionTask = function(cb) {
  global.production = true
  var tasks = getEnabledTasks('production')
  
  
  if( tasks.assetTasks.length == 0 ){
    tasks.assetTasks = false;
  }
  // gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'static', cb)
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, cb)
  
}

gulp.task('production', productionTask)
module.exports = productionTask