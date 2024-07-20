const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeResolvers } = require('@graphql-tools/merge');
const path = require('path');

// Load all resolver files from the current directory
const resolversArray = loadFilesSync(path.join(__dirname), { extensions: ['js'] });

// Merge all resolvers into a single object
const mergedResolvers = mergeResolvers(resolversArray);

module.exports = mergedResolvers;
