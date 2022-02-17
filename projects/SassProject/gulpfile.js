'use strict';

var gulp = require('gulp');
var minify = require('gulp-minifier');
var preprocess = require("gulp-preprocess");

var sass = require('gulp-sass');
var compiler = sass(require("node-sass"));

/// SASS task
gulp.task('sass', function() {
   return gulp.src('./App.scss')
      .pipe(compiler())
      .pipe(minify({ minify: true, minifyCSS: true, }))
      .pipe(gulp.dest('./dist/assets/css'));
});

/// HTML Task
gulp.task('html', function() {
   let CONTEXT = { 
      context: { 
         NODE_ENV: "production", 
         PRODUCTIONS_CSS: '<link rel="stylesheet" type="text/css" href="assets/css/app.css">' 
      }
   };
   return gulp.src('./index.html')
      .pipe(preprocess(CONTEXT))
      .pipe(gulp.dest('./dist/'));
});

/// Images task
gulp.task('images', function() {
   return gulp.src('./assets/images/**/*')
      .pipe(gulp.dest('./dist/assets/images'));
});

/// Scripts task
gulp.task('scripts', function() {
   return gulp.src('./assets/js/*')
      .pipe(minify({ minify: true, minifyJS: true, }))
      .pipe(gulp.dest('./dist/assets/js'));
});

/// Default task
gulp.task('default', gulp.series('html', 'images', 'scripts', 'sass'));