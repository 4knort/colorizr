import gql from 'graphql-tag';

export default gql `
  mutation DeleteFavouriteFromUser($userId:ID, $favouriteId:ID){
    deleteFavouriteFromUser(userId:$userId, favouriteId:$favouriteId){
      id
      email
      favourites{
        id
        content
      }
    }
  }
`;
