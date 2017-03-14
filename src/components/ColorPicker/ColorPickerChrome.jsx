import React, { PropTypes } from 'react';
import { ChromePicker } from 'react-color';

import './color-picker.scss';

const ColorPickerChrome = ({ defaultColor }) => {
  return <ChromePicker color={defaultColor} disableAlpha />;
};

ColorPickerChrome.propTypes = {
  defaultColor: PropTypes.string.isRequired,
};

export default ColorPickerChrome;
