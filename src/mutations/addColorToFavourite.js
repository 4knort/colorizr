import gql from 'graphql-tag';

export default gql `
  mutation AddfavouriteToUser($content: String, $userId: ID){
    addFavouriteToUser(content: $content, userId: $userId) {
      id
      email
      favourites{
        content
      }
    }
  }
`;
