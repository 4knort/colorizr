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
  }
}