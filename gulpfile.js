const {
  src, dest, parallel, series, watch,
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const buildSass = () => {
  console.log('Компиляція SASS');

  return src('dist/sass/*.scss')
    .pipe(sass())
    .pipe(dest('build/styles/'))
    .pipe(browserSync.stream());
};

const buildPug = () => {
  console.log('Компіляція Pug');

  return src('dist/pages/*.pug')
    .pipe(pug())
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
};

const watchers = () => {
  watch('dist/sass/*.scss', buildSass);
  watch('dist/pages/*.pug', buildPug);
};

const browserSyncJob = () => {
  browserSync.init({
    server: 'build/',
  });

  watch('dist/sass/*.scss', series(buildSass, browserSync.reload));
  watch('dist/pages/*.pug', series(buildPug, browserSync.reload));
};

exports.build = parallel(buildSass, buildPug);
exports.development = series(exports.build, parallel(watchers, browserSyncJob));

exports.default = exports.development;
