/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulpfile.js/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  gulpfile.js/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
  
*/

// console.log( process.env );
// console.log( process.env.NODE_ENV );
// process.exit()


console.log('Run `gulp -T` for a task summary');
console.log('Run `gulp` for dev build and watch');
console.log('Run `gulp wiredep` for importing bower components into your main.sass');
console.log('Run `gulp production` for production build: rev, no sourcemaps');


//! helpers
Array.prototype.append = function(array)
{
  this.push.apply(this, array)
}

// CLI options
GLOBAL.enabled = {
  production: false,
  // Disable source maps when production
  maps: !false,
  // Fail due to JSHint warnings only when production
  failJSHint: false,
  // Strip debug statments from javascript when production
  stripJSDebug: false
};

require('./lib/freemem')();

var requireDir = require('require-dir')

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./tasks', { recurse: true })



