module.exports = function () {
	$.gulp.task('browser-sync', function () {
		$.browserSync.init({
			server: {
				baseDir: 'build'
			},
			notify: false,
			open: false
		})
	})
}