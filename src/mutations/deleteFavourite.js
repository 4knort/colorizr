import gql from 'graphql-tag';

export default gql `
  mutation DeleteFavourite($favouriteId: ID){
    deleteFavourite(favouriteId: $favouriteId){
      id
    }
  }
`;
