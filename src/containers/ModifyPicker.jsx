import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ColorPickerChrome } from 'components';
import * as colorActions from '../actions/colorActions';

const ModifyPicker = () => {
  return <ColorPickerChrome defaultColor={'#000000'} />;
};

ModifyPicker.propTypes = {

};

export default connect(null, colorActions)(ModifyPicker);
