import { gql } from '@apollo/client';

export const GET_BOOK_BY_ID = gql `
query GetBookById($id: ID!) {
    book(id: $id) {
        id
        title
        description
        author {
            id
            name
        }
        genres {
            id
            name
        }
        reviews {
            id
            content
            rating
            user {
                id
                username
            }
        }
    }
}
`;