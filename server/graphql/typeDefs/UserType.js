const { gql } = require('apollo-server-express');

// console.log('Loading UserType');


const UserType = gql`
  type User {
    id: ID!
    username: String!
    email: Email!
    role: Role!
    forums: [Forum]
    posts: [Post]
    comments: [Comment]
    token: String
  }

  extend type Query {
    user(id: ID!): User
    users(filter: UserFilter, limit: Int, sortBy: String): [User]
  }

  input UserFilter {
    username: String
    email: Email
    isActive: Boolean
  }
`;

module.exports = UserType;
