const { gql } = require('apollo-server-express');

const Inputs = gql`
  input AuthorInput {
    name: String!
    bio: String!
  }

  input BookInput {
    title: String!
    description: String!
    author: ID!
    genres: [ID!]
    reviews: [ID!]
  }

  input CommentInput {
    content: String!
    author: ID!
    post: ID!
    forum: ID!
  }

  input ForumInput {
    title: String!
    description: String
  }

  input PostInput {
    title: String!
    content: String!
    author: ID!
    forum: ID!
  }

  input UserInput {
    username: String!
    email: Email!
    role: Role!
  }

  input ForumFilter {
    title: String
    description: String
  }

  input ForumSort {
    title: String
    description: String
  }

  input PostSort {
    title: String
    content: String
  }

  input CommentFilter {
    content: String
  }

  input CommentSort {
    content: String
  }

  input UserSort {
    username: String
    email: Email
  }

  input ForumRequestFilter {
    title: String
  }

  input ForumRequestSort {
    title: String
  }
`;

module.exports = Inputs;
