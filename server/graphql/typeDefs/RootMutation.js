const { gql } = require('apollo-server-express');

const RootMutation = gql`
  type Mutation {
    login(username: String!, password: String!): Auth!
    addUser(username: String!, email: String!, password: String!, role: String = "USER"): User!
    updatePost(postId: ID!, title: String, content: String): Post!
    deletePost(postId: ID!): Post!
    updateComment(commentId: ID!, content: String!): Comment!
    deleteComment(commentId: ID!): Comment!
    updateForumDescription(forumId: ID!, description: String!): Forum!
    submitForumRequest(title: String!, description: String!): ForumRequest!
    approveForumRequest(requestId: ID!): Forum!
    rejectForumRequest(requestId: ID!): ForumRequest!
    addAuthor(authorData: AuthorInput!): Author!
    updateAuthor(id: ID!, authorData: AuthorInput!): Author!
    addBook(bookData: BookInput!): Book!
    updateBook(id: ID!, bookData: BookInput!): Book!
    addComment(commentData: CommentInput!): Comment!
    addForum(forumData: ForumInput!): Forum!
    updateForum(id: ID!, forumData: ForumInput!): Forum!
    addPost(postData: PostInput!): Post!
    updateUser(id: ID!, userData: UserInput!): User!
  }
`;

module.exports = RootMutation;
