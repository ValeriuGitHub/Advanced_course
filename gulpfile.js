global.$ = {
	gulp: require('gulp'),
	path: {
		task: require('./gulp/path/tasks.js'),
		cssLibs: require('./gulp/path/css-libs.js'),
		jsLibs: require('./gulp/path/js-libs.js')
	},
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    del: require('del')
}

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', [
	'pug',
	'sass',
	'scripts',
	'clean',
	'browser-sync',
	'fonts',
	'img',
	'css-libs',
	'js-libs',
	'watch'
])

$.gulp.task('build', [
	'pug',
	'sass',
	'scripts',
	'clean',
	'fonts',
	'img',
	'css-libs',
	'js-libs'
])

