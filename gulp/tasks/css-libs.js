module.exports = function () {
	$.gulp.task('css-libs', function () { console.log($.path.cssLibs)
		return $.gulp.src($.path.cssLibs.map(path => 'node_modules/' + path))
			.pipe($.gp.concat('libs.min.css'))
			.pipe($.gp.csso())
			.pipe($.gulp.dest('/build/'))
	})
}