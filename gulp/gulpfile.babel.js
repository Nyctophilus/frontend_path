// new es modular
import { src, dest, watch } from "gulp";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import pug from "gulp-pug";
import livereload, { options } from "gulp-livereload";
import sourcemaps from "gulp-sourcemaps";
import GulpUglify from "gulp-uglify"; //minify
import notify from "gulp-notify";
import GulpZip from "gulp-zip";
import FtpConnection from "vinyl-ftp";
import ftp from "gulp-git-pages";

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
  return src(["build/js/**/*.js", "!build/js/exclude.js"]) // -HL exclude file
    .pipe(concat("all.js"))
    .pipe(GulpUglify())
    .pipe(dest("dist/js"))
    .pipe(livereload({ start: true }));
};

// compress files
export const compress = () => {
  return src("dist/**/*.*")
    .pipe(GulpZip("project.zip"))
    .pipe(dest("."))
    .pipe(notify("Files have been compressed!"));
};

// ftp
// export const deploy = () => {
//   const conn = FtpConnection.create({
//     host: "mywebsite.tld",
//     user: "me",
//     password: "mypass",
//     parallel: 10,
//   });

//   // using base = '.' will transfer everything to /public_html correctly
//   // turn off buffering in gulp.src for best performance

//   return src(["dist/**/*.*"], { base: ".", buffer: false })
//     .pipe(conn.newer("/public_html")) // only upload newer files
//     .pipe(conn.dest("/public_html"))
//     .pipe(livereload({ start: true }));
// };

// watch task

export const deploy = () => {
  return src("./dist/**/*.*").pipe(ftp(options));
};

export const watchTask = () => {
  require("./server.js");
  livereload.listen(); // u have to use script or chrome extension
  watch("build/**/*.pug", html);
  watch("build/css/**/*.scss", css);
  watch("build/js/**/*.js", jsTask);
};

// Default task
export default () => {
  require("./server.js");
  livereload.listen(); // u have to use script or chrome extension
  watch("build/**/*.pug", html);
  watch("build/css/**/*.scss", css);
  watch("build/js/**/*.js", jsTask);
  watch("dist/**/*.*", compress);
  watch("dist/**/*.*", deploy);
};
