import * as types from 'constants/actionTypes';
import { getGradient } from '../helpers/functions';

const initialState = {
  chosenColor: null,
  luminosityGroup: ['#ff1111', '#000000', '#aa3333'],
  mixedGroup: [],
};

export default function colorReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHOOSE_COLOR: {
      return {
        ...initialState,
        chosenColor: action.payload,
        luminosityGroup: getGradient(action.payload.hex),
      };
    }
    default: {
      return state;
    }
  }
}
