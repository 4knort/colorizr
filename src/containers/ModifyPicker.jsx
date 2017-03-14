import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ColorPickerChrome } from 'components';
import * as colorActions from '../actions/colorActions';

const ModifyPicker = ({ modifyColor }) => {
  return <ColorPickerChrome defaultColor={modifyColor} />;
};

ModifyPicker.propTypes = {

};

export default connect(state => ({
  modifyColor: state.colorReducer.modifyColor,
}), colorActions)(ModifyPicker);
