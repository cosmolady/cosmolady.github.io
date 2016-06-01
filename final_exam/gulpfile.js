"use strict"
var gulp = require('gulp');
var imagemin = require('gulp-imagemin'); 
var uglify = require('gulp-uglify');
var concat = require('gulp-concat'); 
var sass = require('gulp-sass');

gulp.task('script', function(){
    gulp.src(['js/*.js'])
        .pipe(concat('main.script.min.js'))
		.pipe(uglify())
        .pipe(gulp.dest('js/release'));
})	

gulp.task('sass', function () {
  gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/css'));
})

gulp.task('image', function() {			
	gulp.src(['img/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('img/release'));
})		

gulp.task('default', function(){
	gulp.run('script', 'sass', 'image')
	
 
	gulp.watch('styles/*.scss', ['sass'], function () {
	gulp.run('sass');
  })
  

	gulp.watch("js/*.js", function(event){
    gulp.run('script');
  })
   
	gulp.watch("img/*", function(event){
    gulp.run('image');
  })
});
