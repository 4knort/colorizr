import * as types from 'constants/actionTypes';
import * as helpers from '../helpers/functions';

const initialState = {
  chosenColor: '#000000',
  mixedColor: '#ff0000',
  chosenColorsGroup: helpers.getArrayEmptyColors(),
  luminosityGroup: helpers.getGradient('#000000'),
  mixedGroup: helpers.getMixedGradient('#ff0000', '#000000'),
};

export default function colorReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_COLOR: {
      return {
        ...state,
        chosenColorsGroup: helpers.addColor(state.chosenColorsGroup.slice(0), action.payload),
      };
    }
    case types.CHOOSE_COLOR: {
      return {
        ...state,
        chosenColor: action.payload.hex,
        luminosityGroup: helpers.getGradient(action.payload.hex),
        mixedGroup: helpers.getMixedGradient(state.mixedColor, action.payload.hex),
      };
    }
    case types.CHOOSE_MIXED_COLOR: {
      return {
        ...state,
        mixedColor: action.payload.hex,
        mixedGroup: helpers.getMixedGradient(action.payload.hex, state.chosenColor),
      };
    }
    default: {
      return state;
    }
  }
}
