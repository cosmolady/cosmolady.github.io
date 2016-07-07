"use strict";
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('script', function () {
	gulp.src(['js/*.js'])
		.pipe(concat('main.script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build'))
});

gulp.task('sass', function () {
	gulp.src('styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('build'))
});


gulp.task('default', function () {
	gulp.start(['script', 'sass']);


	gulp.watch('styles/*.scss', function () {
		gulp.start('sass');
	});


	gulp.watch("js/*.js", function (e) {
		gulp.start('script');
	});

});
