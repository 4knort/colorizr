import React, { Component, PropTypes } from 'react';
import { SketchPicker } from 'react-color';
import { connect } from 'react-redux';
import * as colorActions from '../../actions/colorActions';

import './color-picker.scss';

const ColorPicker = ({ handleChange }) => {
  const onChange = (color) => {
    handleChange(color);
  };

  return (
    <div className="color-picker-container">
      <h1 className="color-picker-container__title">Choose the color</h1>
      <SketchPicker onChange={onChange} />
    </div>
  )
};

export default ColorPicker;
