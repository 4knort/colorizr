import React, { Component, PropTypes } from 'react'

import './modified-color.scss';

const ModifiedColor = ({ color }) => {
  return (
    <div className="modified-color">
      <div className="modified-color__item" style={{ backgroundColor: color }}></div>
      <p className="modified-color__value">{color}</p>
    </div>
  );
};

ModifiedColor.propTypes = {
  color: PropTypes.string.isRequired,
}

export default ModifiedColor;
