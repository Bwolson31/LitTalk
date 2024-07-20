const { gql } = require('apollo-server-express');

console.log('Loading AuthType');

const AuthType = gql`
type Auth {
  token: ID!  
  user: User! 
}
`;

module.exports = AuthType;
