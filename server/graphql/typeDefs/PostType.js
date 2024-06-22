const { gql } = require('apollo-server');

module.exports = gql`
type Forum {
  id: ID!
  title: String!
  description: String
  posts: [Post]
  comments: [Comment]
  moderators: [User]
}
`;