const { gql } = require('apollo-server');

module.exports = gql`
type Mutation {
  login(username: String!, password: String!): Auth!
  addUser(username: String!, email: String!, password: String!, role: Role!): User!
  updatePost(postId: ID!, title: String, content: String): Post!
  deletePost(postId: ID!): Post!
  updateComment(commentId: ID!, content: String!): Comment!
  deleteComment(commentId: ID!): Comment!
  updateForumDescription(forumId: ID!, description: String!): Forum!
  submitForumRequest(title: String!, description: String!): ForumRequest!
  approveForumRequest(requestId: ID!): Forum!
  rejectForumRequest(requestId: ID!): ForumRequest!
}
`;
