// new es modular
import { src, dest, watch } from "gulp";
import concat from "gulp-concat";

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

// watch task
export const watch = () => {
  require("./server.js");
  return watch("./build/", ["html"]);
};
