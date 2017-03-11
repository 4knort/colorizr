import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ColorPicker } from 'components';
import * as colorActions from '../actions/colorActions';

const LuminosityGroup = ({ chooseColor }) => {
  const handleChangeColor = (color) => {
    chooseColor(color);
  };

  return <ColorPicker title={'Choose the color'} defaultColor={'#000000'} handleChange={handleChangeColor} />;
};

export default connect(null, colorActions)(LuminosityGroup);
