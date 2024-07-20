
const { gql } = require('apollo-server-express');
console.log('Loading ReviewType');

const ReviewType = gql `
type Review {
    id: ID!
    content: String!
    rating: Int!
    user: User!
}
`;

module.exports = ReviewType;
