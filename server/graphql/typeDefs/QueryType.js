const { gql } = require('apollo-server-express');


// console.log('Loading QueryType');

const QueryType = gql`
type Query {
    author(id: ID!): Author
    book(id: ID!): Book
    comment(id: ID!): Comment
    authors: [Author]
    books: [Book]
    comments: [Comment]
    forums: [Forum]
    forum(id: ID!): Forum
    genre(id: ID!): Genre
    genres: [Genre]
    genresByFilter(filter: GenreFilter): [Genre]
    post(id: ID!): Post
    posts(filter: PostFilter, limit: Int, sortBy: String): [Post]
    user(id: ID!): User
    users(filter: UserFilter, limit: Int, sortBy: String): [User]
}
`;

module.exports = QueryType;
