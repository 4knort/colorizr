import * as types from 'constants/actionTypes';
import * as helpers from '../helpers/functions';
import exploreColors from '../helpers/exploreColors';

const initialState = {
  isColorPickerOpened: false,
  chosenColor: '#000000',
  mixedColor: '#ff0000',
  chosenColorsGroup: helpers.getArrayEmptyColors(),
  luminosityGroup: helpers.getGradient('#000000'),
  mixedGroup: helpers.getMixedGradient('#ff0000', '#000000'),
  exploringColors: exploreColors,
};

export default function colorReducer(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_ALL: {
      return {
        ...state,
        chosenColorsGroup: helpers.selectAll(
          action.payload,
          state.luminosityGroup.slice(0),
          state.mixedGroup.slice(0),
          state.chosenColorsGroup.slice(0),
        ),
        luminosityGroup: action.payload.map((item, index) => {
          if (item.color === state.luminosityGroup[index].color) {
            item.isClicked = true;
            return item;
          }
          return state.luminosityGroup[index];
        }),
        mixedGroup: action.payload.map((item, index) => {
          if (item.color === state.mixedGroup[index].color) {
            item.isClicked = true;

            return item;
          }

          return state.mixedGroup[index];
        }),
      };
    }
    case types.DELETE_COLOR: {
      return {
        ...state,
        chosenColorsGroup: helpers.deleteColor(state.chosenColorsGroup.slice(0), action.payload),
        luminosityGroup: helpers.deleteGroupColor(state.luminosityGroup.slice(0), action.payload),
        mixedGroup: helpers.deleteGroupColor(state.mixedGroup.slice(0), action.payload),
      };
    }
    case types.TOGGLE_PICKER: {
      return {
        ...state,
        isColorPickerOpened: !state.isColorPickerOpened,
      };
    }
    case types.ADD_COLOR: {
      return {
        ...state,
        chosenColorsGroup: helpers.addColor(
          state.chosenColorsGroup.slice(0),
          state.luminosityGroup.slice(0),
          state.mixedGroup.slice(0),
          action.payload
        ),
        luminosityGroup: helpers.clickColorItem(state.luminosityGroup.slice(0), action.payload),
        mixedGroup: helpers.clickColorItem(state.mixedGroup.slice(0), action.payload),
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
