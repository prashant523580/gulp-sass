var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
    gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
    gulp.watch('src/scss/*.scss', gulp.series('sass'));
});

gulp.task('gulp-uglify', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    gulp.watch('src/js/*.js', gulp.series('gulp-uglify'));
})
gulp.task('default', gulp.parallel('sass', 'gulp-uglify'));