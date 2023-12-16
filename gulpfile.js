const { src, dest } = require('gulp');

const copyScss = () => src('dist/**/*.scss')
  .pipe(dest('build/styles'));

exports.copy = copyScss;

const { parallel } = require('gulp');

const sassCompile = (done) => {
  console.log('Compile SASS to CSS');

  done();
};

const pugCompile = (done) => {
  console.log('Compile Pug to HTML');

  done();
};

const imagesOptimize = (done) => {
  console.log('Optimize Images');

  done();
};

exports.layoutCompile = parallel(sassCompile, pugCompile);
exports.assetsOptimize = imagesOptimize;

const { series } = require('gulp');

exports.default = series(copyScss, exports.layoutCompile, exports.assetsOptimize);
