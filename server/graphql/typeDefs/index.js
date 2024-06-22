const { loadFilesSync } = require('@graphql-tools/load-files');
const path = require('path');

const typesArray = loadFilesSync(path.join(__dirname), { extensions: ['js'] });

module.exports = typesArray;
