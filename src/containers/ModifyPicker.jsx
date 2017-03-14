import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ColorPickerChrome } from 'components';
import * as colorActions from '../actions/colorActions';

const ModifyPicker = ({ modifyColor, chooseModifiedColor }) => {
  const handleChangeColor = (color) => {
    chooseModifiedColor(color);
  };

  return <ColorPickerChrome defaultColor={modifyColor} handleChange={handleChangeColor} />;
};

ModifyPicker.propTypes = {
  chooseModifiedColor: PropTypes.func.isRequired,
  modifyColor: PropTypes.string.isRequired,
};

export default connect(state => ({
  modifyColor: state.colorReducer.modifyColor,
}), colorActions)(ModifyPicker);
