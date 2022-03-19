// new es modular
import { src, dest, watch } from "gulp";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import pug from "gulp-pug";
import livereload from "gulp-livereload";
import sourcemaps from "gulp-sourcemaps";
import GulpUglify from "gulp-uglify";

// html task
export const html = () => {
  return src("build/index.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("dist"))
    .pipe(livereload({ start: true }));
};

// css task
export const css = () => {
  return (
    src(["build/css/sass/*.scss"])
      .pipe(sourcemaps.init())
      //  complie with sass
      .pipe(sass({ outputStyle: "compressed" }))
      // add prefixers
      .pipe(autoprefixer("last 2 versions"))
      //  cancat all files in on file
      .pipe(concat("main.css"))
      .pipe(sourcemaps.write("."))
      //   move compiled files to destination
      .pipe(dest("dist/css"))
      .pipe(livereload({ start: true }))
  );
};

// js task
export const jsTask = () => {
  return src("build/js/**/*.js")
    .pipe(concat("all.js"))
    .pipe(GulpUglify())
    .pipe(dest("dist/js"))
    .pipe(livereload({ start: true }));
};

// watch task
export const watchTask = () => {
  require("./server.js");
  livereload.listen(); // u have to use script or chrome extension
  watch("build/**/*.pug", html);
  watch("build/css/**/*.scss", css);
  watch("build/js/**/*.js", jsTask);
};
