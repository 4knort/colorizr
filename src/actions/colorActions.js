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
