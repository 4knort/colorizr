import * as types from 'constants/actionTypes';

export function chooseColor(color) {
  return {
    type: types.CHOOSE_COLOR,
    payload: color,
  };
}