const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const browserSync = require('browser-sync').create();

const html = () => {
  return src('./src/**.*.html').pipe(browserSync.stream());
};
const sassToCSS = () => {
  return src('./src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))
    .pipe(browserSync.stream());
};

//Server
const server = () => {
  browserSync.init({
    server: {
      baseDir: './src/',
    },
  });
};

//наблюдениеsrc/html/**/*.html
const watcher = () => {
  watch('./src/', browserSync.reload);
  watch('./src/scss/**/*.scss', sassToCSS);
};

exports.sassToCSS = sassToCSS;
exports.watch = watcher;
exports.html = html;

exports.dev = series(html, sassToCSS, parallel(watcher, server));
