import * as types from 'constants/actionTypes';

export function addUser(user) {
  return {
    type: types.ADD_USER,
    payload: user,
  };
}
export function deleteFavourites(favourites) {
  return {
    type: types.DELETE_FAVOURITE,
    payload: favourites,
  };
}

export function logoutUser() {
  return {
    type: types.LOGOUT_USER,
  };
}
