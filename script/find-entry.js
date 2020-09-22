const Glob = require('glob');
const path = require('path');
const chalk = require('chalk');

module.exports = function () {
  const entries = {};
  const partten = path.join(__dirname, '../src/**/index.ts');
  try {
    console.log(chalk.blue('build components entries start'));
    Glob.sync(partten, {}).forEach((file) => {
      if (file.indexOf('src/index.ts') >= 0) {
        entries['handy-vue.common'] = file;
      } else {
        const pathArray = file.split('/');
        const key = pathArray[pathArray.length - 2];
        console.log(chalk.yellow(`${key}: ${file}`));
        entries[key] = file;
      }
    });
    return entries;
  } catch (err) {
    throw new Error(err.message);
  }
};
