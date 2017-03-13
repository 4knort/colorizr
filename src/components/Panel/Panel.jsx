import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as colorActions from '../../actions/colorActions';

import './panel.scss';

const Panel = (props) => {
  const handleClick = () => {
    props.toggleColorPicker();
  };

  const selectAllColors = (colors) => {
    props.onClick(colors);
  };

  const buttons = props.isChosenPanel ? ''
    :
    (<div className="panel__btns">
      <button onClick={() => {selectAllColors(props.colors)}}>Select All</button>
    </div>);

  const colorPanel = 
    props.isColorPicker ? 
    <span className="panel__color-block" style={{ backgroundColor: props.mixedColor }} onClick={handleClick}></span> 
    : 
    '';
  const description = props.isChosenPanel ? <p className="panel__description">Select Colors by clicking on them</p> : '';
  return (
    <div className="panel">
      <h2 className="panel__title">{props.title} {colorPanel}</h2>
      {description}
      <div className="panel__colors">
        {props.children}
      </div>
      {buttons}
    </div>
  );
};

export default connect(state => ({
  mixedColor: state.colorReducer.mixedColor,
}), colorActions)(Panel);
