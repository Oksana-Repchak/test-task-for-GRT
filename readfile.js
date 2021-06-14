const fs = require('fs');

const file = './src/data/data.js';

fs.readFile(file, (err, data) => {
  if (err) {
    console.error(err.message);
    return;
  }

  if (!fs.existsSync('./temp')) {
    fs.mkdirSync('./temp');
  }

  fs.writeFile(
    './temp/rezult.js',
    `${data.toString()}console.log('Successfully updated')`,
    err => {
      if (err) {
        console.log(err);
        return;
      }
    },
  );
});
