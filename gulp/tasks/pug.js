module.exports = function () { 
	$.gulp.task('pug', function () {
      return $.gulp.src('src/pug/pages/**/*.pug')
         .pipe($.gp.pug())
         .pipe($.gp.htmlBeautify())
         .pipe($.gulp.dest('build'))
  })
}