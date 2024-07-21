import { gql } from '@apollo/client';

export const ADD_COMMENT = gql `
mutation AddComment($content: String!, $authorId: ID!, $postId: ID!, $forumId: ID!) {
    addComment(commentData: { content: $content, author: $authorId, post: $postId, forum: $forumId }) {
        id
        content
        author {
            id
            username
        }
        post {
            id
            title
        }
        forum {
            id
            title
        }
    }
}
`;