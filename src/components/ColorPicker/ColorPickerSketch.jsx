import React, { PropTypes } from 'react';
import { SketchPicker } from 'react-color';

import './color-picker.scss';

const ColorPickerSketch = ({ title, handleChange, defaultColor, isColorPickerOpened, width }) => {
  const pickerTitle = title ? <h1 className="color-picker-container__title">{title}</h1> : '';
  const pickerOpened = isColorPickerOpened 
  ? 'color-picker-container color-picker-container--active'
  : 'color-picker-container';

  const onChange = (color) => {
    handleChange(color);
  };

  const pickerWidth = width ? width : '350';

  return (
    <div className={pickerOpened}>
      {pickerTitle}
      <SketchPicker color={defaultColor} className="asdf" onChange={onChange} disableAlpha presetColors={[]} width={pickerWidth} />
    </div>
  );
};

ColorPickerSketch.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultColor: PropTypes.string.isRequired,
  isColorPickerOpened: PropTypes.bool,
  width: PropTypes.number,
  title: PropTypes.string,
};

export default ColorPickerSketch;
