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

console.log('Run `gulp -T` for a task summary');
console.log('Run `gulp` for dev build and watch');
// console.log('Run `gulp wiredep` for importing bower components into your main.sass');
// console.log('Run `gulp production` for production build: rev, no sourcemaps');

var requireDir = require('require-dir')

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./tasks', { recurse: true })
