const { gql } = require('apollo-server');

const BookType = gql`
type Book {
    id: ID!
    title: String!
    description: String!
    author: Author
    reviews: [Review]
    genres: [Genre]
  }
`;

module.exports = BookType;