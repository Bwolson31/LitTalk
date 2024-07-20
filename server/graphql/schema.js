// const { loadFilesSync } = require('@graphql-tools/load-files');
// const { mergeResolvers } = require('@graphql-tools/merge');
// const path = require('path');

// const resolversArray = loadFilesSync(path.join(__dirname), { extensions: ['js'] });

// const mergedResolvers = mergeResolvers(resolversArray);

// module.exports = mergedResolvers;

// const { gql } = require('apollo-server-express');

// const AuthorType = require('./typeDefs/AuthorType');
// const BookType = require('./typeDefs/BookType');
// const CommentType = require('./typeDefs/CommentType');
// const ForumType = require('./typeDefs/ForumType');
// const GenreType = require('./typeDefs/GenreType');
// const PostType = require('./typeDefs/PostType');
// const UserType = require('./typeDefs/UserType');
// const QueryType = require('./typeDefs/QueryType');
// const RootMutation = require('./typeDefs/RootMutation');

// const typeDefs = gql`
//   ${AuthorType}
//   ${BookType}
//   ${CommentType}
//   ${ForumType}
//   ${GenreType}
//   ${PostType}
//   ${UserType}
//   ${QueryType}
//   ${RootMutation}
// `;

// module.exports = typeDefs;


const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const path = require('path');

// Load GraphQL type definitions and resolvers from files
const typesArray = loadFilesSync(path.join(__dirname, 'typeDefs'), { extensions: ['js'] });
const resolversArray = loadFilesSync(path.join(__dirname, 'resolvers'), { extensions: ['js'] });

const mergedTypeDefs = mergeTypeDefs(typesArray);
const mergedResolvers = mergeResolvers(resolversArray);

module.exports = {
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
};
