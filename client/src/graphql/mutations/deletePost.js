import { gql } from '@apollo/client';

export const DELETE_POST = gql `
mutation DeletePost($id: ID!) {
    deletePost(postId: $id) {
        id
        title
        content
    }
}
`;
