var gulp = require('gulp');
var browserify = require('browserify');
var del = require('del');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('clean', function(done){
  del('./build/*', done);
});

gulp.task('sass', ['clean'], function(){
  gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/'));
});

gulp.task('browserify', ['clean'], function(){
  browserify(['./src/index.js'])
    .transform(reactify, {debug:true})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('copy', ['clean'], function(){
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function(){
  gulp.watch(['./src/*.scss'], sass);
  gulp.watch(['./src/*.js', './views/*.js'], browserify);
});

gulp.task('default', ['watch', 'sass', 'browserify', 'copy']);