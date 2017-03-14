import React, { PropTypes } from 'react';
import { ChromePicker } from 'react-color';

import './color-picker.scss';

const ColorPickerChrome = ({ defaultColor, handleChange }) => {
  const onChange = (color) => {
    handleChange(color);
  };

  return <ChromePicker color={defaultColor} disableAlpha onChange={onChange} />;
};

ColorPickerChrome.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultColor: PropTypes.string.isRequired,
};

export default ColorPickerChrome;
