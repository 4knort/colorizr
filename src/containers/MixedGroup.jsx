import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ColorPicker } from 'components';
import * as colorActions from '../actions/colorActions';

const MixedGroup = ({ chooseMixedColor }) => {
  const handleChangeColor = (color) => {
    chooseMixedColor(color);
  };

  return <ColorPicker defaultColor={'#ff0000'} handleChange={handleChangeColor} />;
};

export default connect(null, colorActions)(MixedGroup);
