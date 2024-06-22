const { mergeResolvers } = require('@graphql-tools/merge');
const userResolvers = require('./userResolver');
const forumResolvers = require('./forumResolver');
const postResolvers = require('./postResolver');
const commentResolvers = require('./commentResolver');
const genreResolvers = require('./genreResolver');
const bookResolvers = require('./bookResolver');
const authorResolvers = require('./authorResolver');
const forumRequestResolvers = require(',/forumRequestResolver');

const resolvers = mergeResolvers([
  userResolvers,
  forumResolvers,
  postResolvers,
  commentResolvers,
  genreResolvers,
  bookResolvers,
  authorResolvers,
  forumRequestResolvers
]);

module.exports = resolvers;
