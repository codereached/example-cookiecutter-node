var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    babel = require('babel-register');

gulp.task('test', function() {
    return gulp.src(['test/*.js'])
        .pipe(mocha({
            compilers:babel
        }));
});

gulp.task('watch', function() {
  gulp.watch('test/*.js', ['test']);
  gulp.watch('src/*.js', ['test']);
})