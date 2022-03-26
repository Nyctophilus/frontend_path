const { src, dest, watch, series } = require("gulp");
const dartSass = require("sass");
const gulpSass = require("gulp-sass");
const sass = gulpSass(dartSass);
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("gulp-autoprefixer");
const pug = require("gulp-pug");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

// Html Task
function pugTask() {
  return src("build/index.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("dist"));
}

// Sass Task
function scssTask() {
  return src("build/sass/**/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(
      autoprefixer({
        grid: "autoplace",
        AUTOPREFIXER_GRID: "autoplace",
      })
    )
    .pipe(postcss([cssnano()]))
    .pipe(concat("main.css"))
    .pipe(dest("dist/css", { sourcemaps: "." }));
}

// JavaScript Task
function jsTask() {
  return src("build/js/app.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("dist/js", { sourcemaps: "." }));
}
// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "./dist",
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
  // watch pug files
  watch(
    "build/**/*pug",
    series(pugTask, browsersyncReload)
  );

  //   watch scss files
  watch(
    "build/sass/**/*.scss",
    series(scssTask, browsersyncReload)
  );

  // watch js files
  watch(
    "build/js/**/*.js",
    series(jsTask, browsersyncReload)
  );
}

exports.default = series(
  pugTask,
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask
);
