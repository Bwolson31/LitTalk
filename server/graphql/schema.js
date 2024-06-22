const { gql } = require('apollo-server');
const { loadFilesSync, mergeTypeDefs } = require('@graphql-tools/load-files');
const path = require('path');

const typesArray = loadFilesSync(path.join(__dirname), { extensions: ['js'] });
const mergedTypeDefs = mergeTypeDefs(typesArray);

module.exports = mergedTypeDefs;
