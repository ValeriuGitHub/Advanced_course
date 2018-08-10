module.exports = function () {
	$.gulp.task('sass', function () {
		return $.gulp.src('src/sass/main.scss')
			.pipe($.gp.sass())
			.pipe($.gp.autoprefixer())
			.pipe($.gp.cssbeautify())
			.pipe($.gp.cssmin())
			.pipe($.gp.cssUnit({
				type	 : 'px-to-rem',
				rootSize :  16
			}))
			.pipe($.gulp.dest('build'))
			.pipe($.browserSync.stream())
	})
}