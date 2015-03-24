var gulp = require('gulp');
var del = require('del');
var react = require('gulp-react');
var source = require('vinyl-source-stream');

gulp.task('clean', function(done){
  del('./lib/*', done);
});

gulp.task('reactify', ['clean'], function(){
  gulp.src('./src/*.js')
    .pipe(react())
    .pipe(gulp.dest('./lib/'));
});

gulp.task('default', ['reactify']);