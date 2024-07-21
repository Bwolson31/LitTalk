import { gql } from '@apollo/client';

export const GET_POSTS_BY_FORUM_ID = gql `
query GetPostsByForumId($forumId: ID!) {
    posts(filter: { forum: $forumId }) {
        id
        title
        content
        author {
            id
            username
        }
        comments {
            id
            content
        }
    }
}
`;