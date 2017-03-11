import React from 'react';

import './color=item.scss';

const ColorItem = ({ color, onClickColor }) => {
  return <div className="panel__color-item" style={{backgroundColor: color}} onClick={onClickColor} />
};

export default ColorItem;
