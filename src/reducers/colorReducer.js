import * as types from 'constants/actionTypes';
import * as helpers from '../helpers/functions';
import { exploreColors } from '../helpers/exploreColors';

const initialState = {
  isColorPickerOpened: false,
  chosenColor: '#000000',
  mixedColor: '#ff0000',
  modifyColor: '#ff00ff',
  modifyColorIsAdded: false,
  colors: {
    chosenColorsGroup: helpers.getArrayEmptyColors(),
    luminosityGroup: helpers.getGradient('#000000'),
    mixedGroup: helpers.getMixedGradient('#ff0000', '#000000'),
    flatColors: exploreColors.flat,
    materialColors: exploreColors.material,
    exportGroup: [],
  }
};

export default function colorReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_VAR_NAME: {
      return {
        ...state,
        colors: {
          ...state.colors,
          exportGroup: helpers.changeVarName(state.colors.exportGroup, action.payload),
        }
      };
    }
    case types.CREATE_EXPORT_GROUP: {
      return {
        ...state,
        colors: {
          ...state.colors,
          exportGroup: helpers.createExport(state.colors.chosenColorsGroup),
        }
      };
    }
    case types.RANDOM_MODIFY_COLOR: {
      return {
        ...state,
        modifyColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
        modifyColorIsAdded: false,
      };
    }
    case types.MODIFY_COLOR_ADD: {
      return {
        ...state,
        modifyColorIsAdded: true,
      };
    }
    case types.MODIFY_COLOR: {
      return {
        ...state,
        modifyColor: helpers.modify(
          state.modifyColor,
          action.payload.modifier,
          action.payload.percent,
        ),
        modifyColorIsAdded: false,
      };
    }
    case types.CHOOSE_MODIFIED_COLOR: {
      return {
        ...state,
        modifyColor: action.payload.hex,
        modifyColorIsAdded: false,
      };
    }
    case types.SELECT_ALL: {
      return {
        ...state,
        modifyColorIsAdded: false,
        colors: {
          ...state.colors,
          chosenColorsGroup: helpers.selectAll(
            action.payload,
            state.colors
          ),
          luminosityGroup: helpers.showClickedItems(action.payload, state.colors.luminosityGroup),
          mixedGroup: helpers.showClickedItems(action.payload, state.colors.mixedGroup),
        }
      };
    }
    case types.DELETE_COLOR: {
      return {
        ...state,
        colors: helpers.deleteColors(state.colors, action.payload),
        modifyColorIsAdded: false,
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

        colors: helpers.addColor(state.colors, action.payload),

        modifyColorIsAdded: false,
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
