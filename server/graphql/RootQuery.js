const { gql } = require('apollo-server');

const RootQuery = gql`
type Query {
  # Retrieves a user based on their unique ID.
  user(id: ID!): User

  # Provides a list of all users, with options to filter, sort, and paginate the results.
  users(filter: UserFilter, sort: UserSort, page: Int, limit: Int): [User]!

  # Gets a specific forum by its ID.
  forum(id: ID!): Forum

  # Returns a collection of forums, allowing for filtered, sorted, and paginated results.
  forums(filter: ForumFilter, sort: ForumSort, page: Int, limit: Int): [Forum]!

  # Finds a single post using its ID.
  post(id: ID!): Post

  # Retrieves a list of posts. You can filter, sort, and control page size for easier navigation.
  posts(filter: PostFilter, sort: PostSort, page: Int, limit: Int): [Post]!

  # Fetches a specific comment by ID, useful for direct access to user feedback.
  comment(id: ID!): Comment

  # Lists comments with options for filtering and sorting, which helps in managing large volumes of user comments.
  comments(filter: CommentFilter, sort: CommentSort, page: Int, limit: Int): [Comment]!

  # Obtains details about a single forum request by its ID, essential for tracking request statuses.
  forumRequest(id: ID!): ForumRequest

  # Accesses a range of forum requests with tools to filter, sort, and paginate through them, perfect for administrative oversight.
  forumRequests(filter: ForumRequestFilter, sort: ForumRequestSort, page: Int, limit: Int): [ForumRequest]!

  genre(name: String!): Genre
  # Retrieves a genre based on its unique name.
genres: [Genre]
  # Provides a list of all genres.

  genresByFilter(filter: GenreFilter): [Genre]
  # Provides a list of genres based on a set of filtering criteria.


}
`;

module.exports = RootQuery;
