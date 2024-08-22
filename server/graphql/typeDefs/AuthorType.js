const { gql } = require('apollo-server-express');

// console.log('Loading AuthorType');


const AuthorType = gql`
type Author {
    id: ID!
    name: String!
    bio: String!
    books: [Book]
    forums: [Forum]
  }
`;

module.exports = AuthorType;
