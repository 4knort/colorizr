import React, { Component, PropTypes } from 'react';
import { SketchPicker } from 'react-color';
import { connect } from 'react-redux';
import * as colorActions from '../../actions/colorActions';

import './color-picker.scss';

const ColorPicker = ({ handleChange, defaultColor }) => {
  console.log(defaultColor)
  const onChange = (color) => {
    handleChange(color);
  };

  return (
    <div className="color-picker-container">
      <h1 className="color-picker-container__title">Choose the color</h1>
      <SketchPicker color={defaultColor} onChange={onChange} disableAlpha={true} presetColors={[]} width={350} />
    </div>
  );
};

export default ColorPicker;
