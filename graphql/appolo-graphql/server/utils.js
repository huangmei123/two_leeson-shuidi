const fs = require('fs');
const utils = require('utils');

module.exports = {
    readFile:utils.promiseify(fs.readFile)
}