const { gql } = require('apollo-server-express');

console.log('Loading ForumType');

const ForumType = gql`
  type Forum {
    id: ID!
    title: String!
    description: String
    posts: [Post]
    comments: [Comment]
    moderators: [User]
  }

  type Query {
    forum(id: ID!): Forum
    forums: [Forum]
  }
`;

module.exports = ForumType;
