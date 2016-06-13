"use strict";
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('script', function () {
    gulp.src(['js/*.js'])
        .pipe(concat('main.script.min.js'))
        .pipe(gulp.dest('dest'));
});

gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dest'));
});


gulp.task('default', function () {
    gulp.start(['script', 'sass']);


    gulp.watch('sass/*.scss', ['sass'], function () {
        gulp.start('sass');
    });


    gulp.watch("js/*.js", function (event) {
        gulp.start('script');
    });

});
