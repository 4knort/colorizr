import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ColorPickerSketch } from 'components';
import * as colorActions from '../actions/colorActions';

const MixedGroup = ({ chooseMixedColor, isColorPickerOpened }) => {
  const handleChangeColor = (color) => {
    chooseMixedColor(color);
  };

  return <ColorPickerSketch width={220} isColorPickerOpened={isColorPickerOpened} defaultColor={'#ff0000'} handleChange={handleChangeColor} />;
};

MixedGroup.propTypes = {
  chooseMixedColor: PropTypes.func.isRequired,
  isColorPickerOpened: PropTypes.bool.isRequired,
};

export default connect(state => ({
  isColorPickerOpened: state.colorReducer.isColorPickerOpened,
}), colorActions)(MixedGroup);
