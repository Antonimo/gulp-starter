var config          = require('../config')
var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')
var getEnabledTasks = require('../lib/getEnabledTasks')


var productionTask = function(cb) {

  var tasks = getEnabledTasks('production')
  // gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'rev', 'static', cb)
  
  GLOBAL.enabled.production = true;
  
  if( tasks.assetTasks.length == 0 ){
    gulpSequence('clean', tasks.codeTasks, 'rev', 'static', cb); return;
  }
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'rev', 'static', cb)
  
}

gulp.task('production', productionTask)
module.exports = productionTask