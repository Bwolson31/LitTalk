const { gql } = require('apollo-server');

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