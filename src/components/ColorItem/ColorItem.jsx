import React from 'react';

import './color=item.scss';

const ColorItem = ({ color, onClickAddColor }) => {
  return <div className="panel__color-item" style={{backgroundColor: color}} onClick={onClickAddColor} />
};

export default ColorItem;
