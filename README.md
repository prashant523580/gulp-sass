# gulp-sass

step 1 : install node js. https://nodejs.org/en/download/.

step 2 : open command prompt.

step 3 : check node version node -V.

step 4 : change directory to working directory.

step 5 : init npm .

step 6 : npm i gulp .

step 7 : npm i gulp-sass --save-dev .

step 8 : create gulpfile.js file .

step 9 : create two directory 
        one for your code src link and second for gulp output.
step 10  : open gulpfile.js in code editor. 

################################################# 

  var gulp = require('gulp');
  
  var sass = require('gulp-sass);
  
  
  gulp.task('sass', function(){
  
    gulp.src('src/scss/style.scss')
    
    .pipe(sass())
    
    .pipe(gulp.dest('dist/css'));
    
    gulp.watch('src/scss/*.scss', gulp.series('sass'));
    
  });
  
  
gulp.task('default', gulp.parallel('sass'));

######################################################## 

step 11: open cmd prompt & run gulp on working directory.

to stop watch function press ctrl + c.
