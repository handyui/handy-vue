/* eslint-disable no-console */
const path = require('path');
const fs = require('fs-extra');

fs.readFile(path.join(__dirname, '../package.json'), (err, data) => {
  if (!err) {
    try {
      const jsonData = JSON.parse(data);
      jsonData.main = 'lib/handy-vue.common.js';
      const releaseData = JSON.stringify(jsonData, null, 2);
      fs.writeFile(path.join(__dirname, '../release/package.json'), releaseData);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log(err);
  }
});


// fs.copy('D:/gitPro/handy-vue/README.md', 'D:/gitPro/handy-vue/release', function(err) {
//   if (err) return console.error(err)
//   console.log("success!")
// });
