import React, { Component, PropTypes } from 'react';

import './modified-color.scss';

const ModifiedColor = ({ color, onClickAddColor, isAdded }) => {
  const buttonFunctionality = isAdded ? 'Remove' : 'Add'
  return (
    <div className="modified-color">
      <button className="modified-color__add" onClick={() => { onClickAddColor(isAdded, color); }}>{buttonFunctionality}</button>
      <div className="modified-color__item" style={{ backgroundColor: color }} />
      <p className="modified-color__value">{color}</p>
    </div>
  );
};

ModifiedColor.propTypes = {
  color: PropTypes.string.isRequired,
  onClickAddColor: PropTypes.func.isRequired,
  isAdded: PropTypes.bool.isRequired,
};

export default ModifiedColor;
