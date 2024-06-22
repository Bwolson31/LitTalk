const { gql } = require('apollo-server');

const RoleType = gql`
enum Role {
  USER
  MODERATOR
  ADMIN
}
`;

module.exports = RoleType;
