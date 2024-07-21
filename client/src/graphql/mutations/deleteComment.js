import { gql } from '@apollo/client';

export const DELETE_COMMENT = gql `
mutation DeleteComment($id: ID!) {
    deleteComment(commentId: $id) {
        id
        content
    }
}
`;