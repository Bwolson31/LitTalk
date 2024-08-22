const { gql } = require('apollo-server-express');

// console.log('Loading ForumRequestType'); 

const ForumRequestType = gql`
  type ForumRequest {
    id: ID!
    title: String!
    description: String!
    user: User!
    status: String!
    createdAt: String!
  }
`;

module.exports = ForumRequestType;
