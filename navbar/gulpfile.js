var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
    gulp.watch('src/scss/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass'));