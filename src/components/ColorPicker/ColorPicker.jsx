import React, { Component, PropTypes } from 'react';
import { SketchPicker } from 'react-color';
import { connect } from 'react-redux';
import * as colorActions from '../../actions/colorActions';

import './color-picker.scss';

const ColorPicker = ({ title, handleChange, defaultColor, isColorPickerOpened, width }) => {
  const pickerTitle = title ? <h1 className="color-picker-container__title">{title}</h1> : '';
  const pickerOpened = isColorPickerOpened ? 
    'color-picker-container color-picker-container--active' 
    : 
    'color-picker-container;';
  const onChange = (color) => {
    handleChange(color);
  };
  const pickerWidth = width ? width : '350';
  return (
    <div className={pickerOpened}>
      {pickerTitle}
      <SketchPicker color={defaultColor} className="asdf" onChange={onChange} disableAlpha={true} presetColors={[]} width={pickerWidth} />
    </div>
  );
};

export default ColorPicker;
