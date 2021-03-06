const childProcess = require('child_process');

module.exports = (command, cb) => {
  childProcess.exec(command, {}, (err, stdout) => {
    const branches = stdout
      .replace(/\n/g, '/-/')
      .replace(/\s/g, '')
      .split('/-/')
      .filter((branch) => branch.length > 0);

    cb(branches);
  });
};
