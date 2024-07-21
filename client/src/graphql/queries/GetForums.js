import { gql } from '@apollo/client';

const GET_FORUMS = gql`
query GetForums {
    forums {
        id
        title 
        description
    }
}
`;

export default GET_FORUMS;
