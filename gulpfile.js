'use strict';

var gulp = require("gulp"),
    util = require("gulp-util"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    log = util.log;

var sassOpts = {
  outputStyle: 'expanded',
  includePaths: [
  ]
};

gulp.task('sass', function() {
  log("Generate CSS files "+ (new Date()).toString());
  gulp.src("./sass/**/*.scss")
    .pipe(sass(sassOpts))
    .pipe(autoprefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
    .pipe(gulp.dest("./theme/static/css"))
    .pipe(rename({suffix: ".min"}))
    .pipe(minifycss())
    .pipe(gulp.dest("./theme/static/css"));
})

gulp.task('sass:watch', function() {
  log("Watching for changes to SCSS files");
  gulp.watch('./sass/**/*.scss', ['sass']);
})