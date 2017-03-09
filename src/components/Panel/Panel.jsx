import React from 'react';

import './panel.scss';

const Panel = ({ children, title }) => (
  <div className="panel">
    <h2 className="panel__title">{title}</h2>
    <div className="panel__colors">
      {children}
    </div>
    <div className="panel__btns">
      <button>btn</button>
      <button>another btn</button>
    </div>
  </div>
);

export default Panel;
