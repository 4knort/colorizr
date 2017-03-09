import * as types from 'constants/actionTypes';

const initialState = {
  chosenColor: {},
  colors: [],
};

export default function colorReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHOOSE_COLOR: {
      return {
        ...initialState,
        chosenColor: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
