import * as types from 'constants/actionTypes';

export function chooseColor(color) {
  return {
    type: types.CHOOSE_COLOR,
    payload: color,
  };
}

export function chooseMixedColor(color) {
  return {
    type: types.CHOOSE_MIXED_COLOR,
    payload: color,
  };
}

export function addColor(color) {
  return {
    type: types.ADD_COLOR,
    payload: color,
  };
}

export function toggleColorPicker() {
  return {
    type: types.TOGGLE_PICKER,
  };
}

export function deleteColor(color) {
  return {
    type: types.DELETE_COLOR,
    payload: color,
  };
}

export function selectAll(colors) {
  return {
    type: types.SELECT_ALL,
    payload: colors,
  };
}

export function changeColor(modifier, percent) {
  return {
    type: types.MODIFY_COLOR,
    payload: {
      modifier,
      percent,
    },
  };
}

export function chooseModifiedColor(color) {
  return {
    type: types.CHOOSE_MODIFIED_COLOR,
    payload: color,
  };
}

export function modifyColorAdd() {
  return {
    type: types.MODIFY_COLOR_ADD,
    payload: false,
  };
}

export function getRandomModifyColor() {
  return {
    type: types.RANDOM_MODIFY_COLOR,
  };
}

export function createExportGroup() {
  return {
    type: types.CREATE_EXPORT_GROUP,
  };
}

export function changeVarName(value, id) {
  return {
    type: types.CHANGE_VAR_NAME,
    payload: { value, id },
  };
}
