import { gql } from '@apollo/client';


export const GET_COMMENTS_BY_POST_ID = gql `
query GetCommentsByPostId($postId: ID!) {
    comments(filer: {post: $postId }) {
        id
        content
        author {
            id
            username
        }
    }
}
`;