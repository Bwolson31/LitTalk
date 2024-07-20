const { gql } = require('apollo-server-express');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const path = require('path');

// Load GraphQL type definitions from files
const typesArray = loadFilesSync(path.join(__dirname), { extensions: ['js'] });

const validTypesArray = typesArray.filter((type, index) => {
  const source = type.loc?.source?.name || 'undefined';
  console.log(`Type ${index} from file ${source}:`, type);
  if (typeof type === 'object' && Object.keys(type).length === 0) {
    console.log(`Empty type detected at index ${index} from file ${source}`);
    return false;
  }
  return true;
});

const Inputs = require('./Inputs');
const { GraphQLScalarType, Kind } = require('graphql');

// Custom scalar for validating email addresses
const emailScalar = new GraphQLScalarType({
  name: 'Email',
  description: 'An Email scalar type that checks for valid email addresses',
  serialize(value) {
    return value;
  },
  parseValue(value) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-0.-]+\.[A-Z]{2,}$/i.test(value)) {
      throw new Error('Invalid email format');
    }
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return ast.value;
    }
    return null;
  }
});

// Define scalar type
const scalarTypeDefs = gql`
  scalar Email
`;

try {
  const mergedTypeDefs = mergeTypeDefs([...validTypesArray, scalarTypeDefs, Inputs]);
  module.exports = mergedTypeDefs;
  module.exports.emailScalar = emailScalar;
} catch (error) {
  console.error('Error merging typeDefs:', error);
  process.exit(1);
}
