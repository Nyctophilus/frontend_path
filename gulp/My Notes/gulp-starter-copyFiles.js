// new es modular
import { task, src, dest } from "gulp";

export const hello = (done) => {
  console.log(`hello`);
  done();
};

export const copy = () => {
  return src("build/*.html").pipe(dest("dist"));
};

// Old es
// var gulp = require("gulp");

// gulp.task("default", function (done) {
//   console.log(`hey`);
//   done();
// });

// gulp.task("copy", function () {
//   return gulp
//     .src(["build/*.html", "build/*.css"])
//     .pipe(gulp.dest("dist"));
// });
