import { gql } from '@apollo/client';

export const ADD_USER = gql `
mutation AddUser($username: String!, $email: String!, $password: String!, $role: String!) {
    addUser(userData: {username: $username, email: $email, password: $password, role: $role }) {
        id
        username
    }
}
`;