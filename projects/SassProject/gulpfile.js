'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

const compiler = sass(require("node-sass"));

gulp.task('sass', function () {
   return gulp.src('./App.scss')
   .pipe(compiler())
   .pipe(gulp.dest('./dist/assets/css/'));
});