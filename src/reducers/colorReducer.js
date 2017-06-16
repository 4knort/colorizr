import * as types from 'constants/actionTypes';
import * as helpers from '../helpers/functions';
import { exploreColors } from '../helpers/exploreColors';

const CHOSE_START_COLOR = '#000000';
const MIXED_START_COLOR = '#FF0000';

const initialState = {
  isColorPickerOpened: false,
  chosenColor: CHOSE_START_COLOR,
  mixedColor: MIXED_START_COLOR,
  modifyColor: '',
  modifyColorIsAdded: false,
  colors: {
    chosenColorsGroup: helpers.getArrayEmptyColors(),
    luminosityGroup: helpers.getGradient(CHOSE_START_COLOR),
    mixedGroup: helpers.getMixedGradient(MIXED_START_COLOR, CHOSE_START_COLOR),
    flatColors: exploreColors.flat,
    materialColors: exploreColors.material,
    exportGroup: [],
  },
};

export default function colorReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_VAR_NAME: {
      return {
        ...state,
        colors: {
          ...state.colors,
          exportGroup: helpers.changeVarName(state.colors.exportGroup, action.payload),
        },
      };
    }
    case types.CREATE_EXPORT_GROUP: {
      return {
        ...state,
        colors: {
          ...state.colors,
          exportGroup: helpers.createExport(state.colors.chosenColorsGroup),
        },
      };
    }
    case types.RANDOM_MODIFY_COLOR: {
      return {
        ...state,
        modifyColor: helpers.getRandomColor(),
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
        },
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
        colors: {
          ...state.colors,
          luminosityGroup: helpers.getGradient(action.payload.hex),
          mixedGroup: helpers.getMixedGradient(state.mixedColor, action.payload.hex),
        },
        chosenColor: action.payload.hex,
      };
    }
    case types.CHOOSE_MIXED_COLOR: {
      return {
        ...state,
        mixedColor: action.payload.hex,
        colors: {
          ...state.colors,
          mixedGroup: helpers.getMixedGradient(action.payload.hex, state.chosenColor),
        },
      };
    }
    default: {
      return state;
    }
  }
}
