module.exports = function () {
	$.gulp.task('img', function () {
		return $.gulp.src('src/img/*')
			.pipe($.gp.imagemin())
			.pipe($.gulp.dest("build/img/"))
	})
}