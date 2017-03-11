import React, { Component, PropTypes } from 'react';
import { SketchPicker } from 'react-color';
import { connect } from 'react-redux';
import * as colorActions from '../../actions/colorActions';

import './color-picker.scss';

const ColorPicker = ({ title, handleChange, defaultColor }) => {
  const pickerTitle = title ? <h1 className="color-picker-container__title">{title}</h1> : ''
  const onChange = (color) => {
    handleChange(color);
  };

  return (
    <div className="color-picker-container">
      {pickerTitle}
      <SketchPicker color={defaultColor} onChange={onChange} disableAlpha={true} presetColors={[]} width={350} />
    </div>
  );
};

export default ColorPicker;
