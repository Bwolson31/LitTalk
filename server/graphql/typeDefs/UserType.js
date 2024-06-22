const { gql } = require('apollo-server');
const { GraphQLScalarType, Kind } = require('graphql');

// Custom scalar for validating email addresses
const emailScalar = new GraphQLScalarType({
  name: 'Email',
  description: 'An Email scalar type that checks for valid email addresses',
  serialize(value) {
    // Convert outgoing data
    return value;
  },
  parseValue(value) {
    // Convert incoming data
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      throw new Error("Invalid email format");
    }
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return ast.value;
    }
    return null;
  }
});

const typeDefs = gql`
  scalar Email

  type User {
    id: ID!
    username: String!
    email: Email!
    role: Role!
    forums: [Forum]
    posts: [Post]
    comments: [Comment]
  }

  input UserFilter {
    username: String
    email: Email
    isActive: Boolean
  }
`;
