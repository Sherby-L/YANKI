const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const browserSync = require('browser-sync').create();

const html = () => {
  return src('./*.html').pipe(browserSync.stream());
};
const sassToCSS = () => {
  return src('./scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
};

//Server
const server = () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
};

//наблюдениеsrc/html/**/*.html
const watcher = () => {
  watch('./**/*.html', html);
  watch('./scss/**/*.scss', sassToCSS);
};

exports.sassToCSS = sassToCSS;
exports.watch = watcher;
exports.html = html;

exports.dev = series(html, sassToCSS, parallel(watcher, server));
