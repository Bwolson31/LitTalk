import { gql } from '@apollo/client';

const ADD_POST = gql`
mutation AddPost($title: String!, $content: String!, $forumId: ID!) {
    addPost(postData: { title: $title, content: $content, forumId: $forumId }) {
        id
        title
        content
    }
}
`;


export default ADD_POST;