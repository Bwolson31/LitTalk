const { gql } = require('apollo-server-express');

// console.log('Loading RoleType');

const RoleType = gql`
enum Role {
  USER
  MODERATOR
  ADMIN
}
`;

module.exports = RoleType;
