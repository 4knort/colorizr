import * as types from 'constants/actionTypes';

const initialState = {
  user: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case types.LOGOUT_USER: {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
}
