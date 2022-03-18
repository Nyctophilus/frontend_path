// new es modular
import { task, src, dest } from "gulp";
import concat from "gulp-concat";

// css task
export const css = () => {
  return src([
    "build/css/header.css",
    "build/css/footer.css",
  ])
    .pipe(autoprefixer("last 2 versions"))
    .pipe(concat("main.css"))
    .pipe(dest("dist/css"));
};

// js task
export const jsTask = () => {
  return src("build/js/*.js")
    .pipe(concat("all.js"))
    .pipe(dest("dist/js"));
};
