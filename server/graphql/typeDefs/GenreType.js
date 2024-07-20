const { gql } = require('apollo-server-express');

console.log('Loading GenreType');

const GenreType = gql`
  type Genre {
    id: ID!
    name: String!
    books: [Book]
    authors: [Author]
  }

  type Query {
    genre(id: ID!): Genre
    genres: [Genre]
    genresByFilter(filter: GenreFilter): [Genre]
  }

  input GenreFilter {
    name: String
    associatedBookTitle: String
    associatedAuthorName: String
  }
`;

module.exports = GenreType;
