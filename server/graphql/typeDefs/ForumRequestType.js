const { gql } = require('apollo-server');

const ForumRequestType = gql`
type ForumRequest {
  id: ID!
  title: String!       
  description: String! 
  user: User!           
  status: String!      
  createdAt: String! 
}
`;

module.exports = ForumRequestType;
