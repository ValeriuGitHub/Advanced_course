module.exports = function () {
	$.gulp.task('fonts', function () {
		return $.gulp.src('fonts/**/*')
			.pipe($.gulp.dest('build/fonts/'))
	})
}