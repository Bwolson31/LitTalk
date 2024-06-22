const { gql } = require('apollo-server');

const CommentType = gql`
type Comment {
  id: ID!
  content: String!     
  author: User!         
  post: Post!           
  forum: Forum!         
  createdAt: String!    
  updatedAt: String!    
}
`;

module.exports = CommentType;