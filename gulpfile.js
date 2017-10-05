var gulp = require('gulp')
var sass = require('gulp-sass')
var livereload = require('gulp-livereload')

gulp.task('default', ['sass', 'html', 'watch'])

gulp.task('sass', function() {
	gulp.src('server/static/scss/**/*.scss')
		.pipe(sass({outputStyle:'expanded'})
			.on('error', sass.logError))
		.pipe(gulp.dest('server/static/css'))
		.pipe(livereload());
});

gulp.task('html', function() {
	gulp.src('server/templates/*.html')
		.pipe(livereload());
})

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('server/static/scss/**/*.scss', ['sass']);
	gulp.watch('server/templates/*.html', ['html'])
});