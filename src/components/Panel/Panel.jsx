import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as colorActions from '../../actions/colorActions';

import './panel.scss';

const Panel = (props) => {
  const handleClick = () => {
    props.toggleColorPicker();
  };

  const selectAllColors = () => {
    props.onClick(props.colors);
  };

  const colorsBlockClass = props.colorsBlockClass ? props.colorsBlockClass : 'panel__colors';
  const buttons = props.isChosenPanel 
    ? ''
    : (
        <div className="panel__btns">
          <button className={'panel__btn'} onClick={selectAllColors}>Select All</button>
        </div>
      );

  const colorPanel = props.isColorPicker 
    ? <span className="panel__color-block" style={{ backgroundColor: props.mixedColor }} onClick={handleClick} />
    : '';

  const description = props.isChosenPanel ? <p className="panel__description">Select Colors by clicking on them</p> : '';

  return (
    <div className="panel">
      <h2 className="panel__title">{props.title} {colorPanel}</h2>
        {description}
      <div className={colorsBlockClass}>
        {props.children}
      </div>
      {buttons}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  isChosenPanel: PropTypes.bool,
  isColorPicker: PropTypes.bool,
  colors: PropTypes.arrayOf(React.PropTypes.object),
  mixedColor: PropTypes.string,
  title: PropTypes.string,
};

export default connect(state => ({
  mixedColor: state.colorReducer.mixedColor,
}), colorActions)(Panel);
