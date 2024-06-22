const { gql } = require('apollo-server');

const GenreType = gql`
  # Defines a genre with its associated books and authors
  type Genre {
    id: ID!
    name: String!
    books: [Book]
    authors: [Author]
  }

  # Input type for filtering genres in queries
  input GenreFilter {
    name: String
    associatedBookTitle: String
    associatedAuthorName: String
  }
`;

module.exports = GenreType;
