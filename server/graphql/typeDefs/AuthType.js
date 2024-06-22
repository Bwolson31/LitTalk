const { gql } = require('apollo-server');

const AuthType = gql`
type Auth {
  token: ID!  
  user: User! 
}
`;

module.exports = AuthType;
