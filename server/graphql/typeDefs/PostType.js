const { gql } = require('apollo-server-express');

// console.log('Loading PostType');

const PostType = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    forum: Forum!
    comments: [Comment]
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    post(id: ID!): Post
    posts(filter: PostFilter, limit: Int, sortBy: String): [Post]
  }

  input PostFilter {
    title: String
    author: String
    forum: String
  }
`;

module.exports = PostType;
