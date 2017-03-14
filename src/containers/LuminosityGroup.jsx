import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ColorPickerSketch } from 'components';
import * as colorActions from '../actions/colorActions';

const LuminosityGroup = ({ chooseColor }) => {
  const handleChangeColor = (color) => {
    chooseColor(color);
  };

  return <ColorPickerSketch title={'Choose the color'} defaultColor={'#000000'} handleChange={handleChangeColor} />;
};

LuminosityGroup.propTypes = {
  chooseColor: PropTypes.func.isRequired,
};

export default connect(null, colorActions)(LuminosityGroup);
