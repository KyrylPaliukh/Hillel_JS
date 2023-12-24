const { src, dest } = require('gulp');

const copyScss = () => src('dist/**/*.scss')
  .pipe(dest('build/styles'));

exports.copy = copyScss;
