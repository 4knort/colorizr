import React, { Component, PropTypes } from 'react';
import { SketchPicker } from 'react-color';
import { connect } from 'react-redux';
import * as colorActions from '../../actions/colorActions';

import './color-picker.scss';

@connect(null, colorActions)
export default class ColorPicker extends Component {
  handleChange = (color) => {
    this.props.chooseColor(color);
  }

  render() {
    return (<div className="color-picker-container">
      <h1 className="color-picker-container__title">Choose the color</h1>
      <SketchPicker onChange={this.handleChange} />
    </div>
    )
  }
}
