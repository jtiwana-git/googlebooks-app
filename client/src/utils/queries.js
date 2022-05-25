import { gql } from '@apollo/client';

// Look at code (may need to delete "query me")
export const GET_ME = gql`
  query me {
    me {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          title
          authors
          description
          image
          link
        }
      }
    }
`;