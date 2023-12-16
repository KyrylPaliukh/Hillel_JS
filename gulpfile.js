const { watch } = require('gulp');

const changeAppStylesFile = (done) => {
  console.log('Файл index.scss змінився');

  done();
};

const checkFileStructure = (done) => {
  console.log('Змінилась структура файлів');

  done();
};

const watchers = () => {
  watch('src/style/scss/index.scss', { events: 'change' }, changeAppStylesFile);
  watch('src/style/scss/', { events: ['add', 'unlink'] }, checkFileStructure);
};

exports.watchers = watchers;

const { series } = require('gulp');

exports.default = series(watchers);
