import { src, dest, watch, series } from "gulp";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import cssnano from "cssnano";
import terser from "gulp-terser";
const browsersync = require("browser-sync").create();

// Sass Task
function scssTask() {
  return src("app/scss/style.scss", { sourcemaps: true });
  pipe(sass());
  pipe(postcss([cssnano()]));
  pipe(dest("dist", { sourcemaps: "." }));
}

// JavaScript Task
function jsTask() {
  return src("app/js/script.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("dist", { sourcemaps: "." }));
}
// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

// reload on changes
function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch task
function watchTask() {
  watch("*.html", browsersyncReload);
  watch(
    ["app/scss/**/*.scss", "app/js/**/*.js"],
    series(scssTask, jsTask, browsersyncReload)
  );
}

const _default = series(
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask
);
export { _default as default };
