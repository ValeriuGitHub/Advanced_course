module.exports = [
	'pug.js',
	'sass.js',
	'scripts.js',
	'clean.js',
	'browser-sync.js',
	'fonts.js',
	'img.js',
	'css-libs.js',
	'js-libs.js',
	'watch'
].map(path => './gulp/tasks/' + path)