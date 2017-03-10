import React from 'react';

import './panel.scss';

const Panel = ({ children, title, isColorPicker }) => {
  const colorPanel = 
  isColorPicker ? 
  <span className="panel__color-block"></span> 
  : 
  '';

  return (
    <div className="panel">
      <h2 className="panel__title">{title} {colorPanel}</h2>
      <div className="panel__colors">
        {children}
      </div>
      <div className="panel__btns">
        <button>btn</button>
        <button>another btn</button>
      </div>
    </div>
  );
};

export default Panel;
