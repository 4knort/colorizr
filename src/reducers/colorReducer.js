import * as types from 'constants/actionTypes';
import * as helpers from '../helpers/functions';
import { exploreColors } from '../helpers/exploreColors';

const initialState = {
  isColorPickerOpened: false,
  chosenColor: '#000000',
  mixedColor: '#ff0000',
  modifyColor: '#ff00ff',
  modifyColorIsAdded: false,
  chosenColorsGroup: helpers.getArrayEmptyColors(),
  luminosityGroup: helpers.getGradient('#000000'),
  mixedGroup: helpers.getMixedGradient('#ff0000', '#000000'),
  flatColors: exploreColors.flat,
  materialColors: exploreColors.material,
  exportGroup: [],
};

export default function colorReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_VAR_NAME: {
      return {
        ...state,
        exportGroup: helpers.changeVarName(state.exportGroup, action.payload),
      };
    }
    case types.CREATE_EXPORT_GROUP: {
      return {
        ...state,
        exportGroup: helpers.createExport(state.chosenColorsGroup),
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
        chosenColorsGroup: helpers.selectAll(
          action.payload,
          state.luminosityGroup.slice(0),
          state.mixedGroup.slice(0),
          state.flatColors.slice(0),
          state.materialColors.slice(0),
          state.chosenColorsGroup.slice(0),
        ),
        modifyColorIsAdded: false,
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
        flatColors: helpers.deleteGroupColor(state.flatColors.slice(0), action.payload),
        materialColors: helpers.deleteGroupColor(state.materialColors.slice(0), action.payload),
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
        chosenColorsGroup: helpers.addColor(
          state.chosenColorsGroup.slice(0),
          state.luminosityGroup.slice(0),
          state.mixedGroup.slice(0),
          state.flatColors.slice(0),
          state.materialColors.slice(0),
          action.payload
        ),
        luminosityGroup: helpers.clickColorItem(state.luminosityGroup.slice(0), action.payload),
        mixedGroup: helpers.clickColorItem(state.mixedGroup.slice(0), action.payload),
        flatColors: helpers.clickColorItem(state.flatColors.slice(0), action.payload),
        materialColors: helpers.clickColorItem(state.materialColors.slice(0), action.payload),
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
