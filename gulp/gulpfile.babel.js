// new es modular
import { task, src, dest } from "gulp";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import pug from "gulp-pug";

// html task
export const html = () => {
  return src("build/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("dist"));
};

// css task
export const css = () => {
  return (
    src(["build/css/sass/*.scss"])
      //  complie with sass
      .pipe(sass({ outputStyle: "compressed" }))
      // add prefixers
      .pipe(autoprefixer("last 2 versions"))
      //  cancat all files in on file
      .pipe(concat("test.css"))
      //   move compiled files to destination
      .pipe(dest("dist/css"))
  );
};

// js task
export const jsTask = () => {
  return src("build/js/*.js")
    .pipe(concat("all.js"))
    .pipe(dest("dist/js"));
};

// var concat = require('gulp-concat');
// // Css Task
// gulp.task('css', function () {
//   return gulp.src('project/.css')
//             pipe(concat('main.css'))
//            -pipe(gulp.dest('dist'))
// });

export const copy = () => {
  return src("build/*.html").pipe(dest("dist"));
};
