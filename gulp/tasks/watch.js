module.exports = function () {
	$.gulp.task('watch', function () {
		$.gulp.watch('src/sass/**/*.scss', ['sass', $.browserSync.reload]);
		$.gulp.watch('src/img/', ['img', $.browserSync.reload]);
		$.gulp.watch('src/pug/**/*.pug', ['pug', $.browserSync.reload]);
		$.gulp.watch('src/js/**/*.js', ['scripts', $.browserSync.reload ]);
	})

}