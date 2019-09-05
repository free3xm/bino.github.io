"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task("sass", function () {
  return   gulp.src(__dirname + "/sass/style.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%'], { cascade: true }))
    // .pipe(cleanCSS({
    //     level: 2
    //   }))
    .pipe(gulp.dest(__dirname + "/public/css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  browserSync.init({
      server: {
          baseDir: "./public/"
      }
  });
    gulp.watch("./sass/**/style.sass", gulp.series("sass"));
    gulp.watch("./public/*.html", browserSync.reload);
    gulp.watch("./public/js/*.js", browserSync.reload);
});
