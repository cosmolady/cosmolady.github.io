"use strict"
var gulp = require('gulp');
var imagemin = require('gulp-imagemin'); 
var uglify = require('gulp-uglify');
var concat = require('gulp-concat'); 
var sass = require('gulp-sass');
var glue = require("gulp-sprite-glue");
var connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server();
});

gulp.task('script', function(){
    gulp.src(['js/*.js'])
        .pipe(concat('main.script.min.js'))
		.pipe(uglify())
        .pipe(gulp.dest('js/release'))
		.pipe(connect.reload());;
})	

gulp.task('sass', function () {
  gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/css'))
  	.pipe(connect.reload());;
})

gulp.task('image', function() {			
	gulp.src(['img/images/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('img/release'))
		.pipe(connect.reload());;
})

gulp.task('glue', function() {		
gulp.src("img/sprites")
	.pipe(glue({
	    css: 'styles',
	    img: 'img/release'
	}));
})

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('default', function(){
	gulp.start(['script', 'sass', 'connect'])
	
 
	gulp.watch('styles/*.scss', ['sass'], function () {
	gulp.start('sass');
  })
  	gulp.watch(['*.html'], ['html']);

	gulp.watch("js/*.js", function(event){
    gulp.start('script');
  })
   
});
