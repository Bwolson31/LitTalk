import { gql } from '@apollo/client';

export const UPDATE_USER = gql `
mutation UpdateUser($id: ID!, $email: String!) {
    updateUser(id: $id, userData: { email: $email }) {
        id
        email
    }
}
;`