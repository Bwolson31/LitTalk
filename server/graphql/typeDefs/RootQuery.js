const { gql } = require('apollo-server-express');

const RootQuery = gql`
  type Query {
    user(id: ID!): User
    users(filter: UserFilter, sort: UserSort, page: Int, limit: Int): [User]!
    forum(id: ID!): Forum
    forums(filter: ForumFilter, sort: ForumSort, page: Int, limit: Int): [Forum]!
    post(id: ID!): Post
    posts(filter: PostFilter, sort: PostSort, page: Int, limit: Int): [Post]!
    comment(id: ID!): Comment
    comments(filter: CommentFilter, sort: CommentSort, page: Int, limit: Int): [Comment]!
    forumRequest(id: ID!): ForumRequest
    forumRequests(filter: ForumRequestFilter, sort: ForumRequestSort, page: Int, limit: Int): [ForumRequest]!
    genre(name: String!): Genre
    genres: [Genre]
    genresByFilter(filter: GenreFilter): [Genre]
  }
`;

module.exports = RootQuery;
