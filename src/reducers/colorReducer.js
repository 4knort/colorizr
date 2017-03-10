import * as types from 'constants/actionTypes';
import { getGradient, getMixedGradient } from '../helpers/functions';

const initialState = {
  chosenColor: '#000000',
  mixedColor: '#ff0000',
  luminosityGroup: getGradient('#000000'),
  mixedGroup: getMixedGradient('#ff0000', '#000000'),
};

export default function colorReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHOOSE_COLOR: {
      return {
        ...state,
        chosenColor: action.payload.hex,
        luminosityGroup: getGradient(action.payload.hex),
        mixedGroup: getMixedGradient(state.mixedColor, action.payload.hex),
      };
    }
    case types.CHOOSE_MIXED_COLOR: {
      return {
        ...state,
        mixedColor: action.payload.hex,
        mixedGroup: getMixedGradient(action.payload.hex, state.chosenColor),
      };
    }
    default: {
      return state;
    }
  }
}
