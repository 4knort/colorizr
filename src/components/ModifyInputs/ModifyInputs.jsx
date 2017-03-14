import React, { PropTypes } from 'react'

const ModifyInputs = () => {
  return (
    <div className="modify-inputs">
      <div className="modify-inputs__modifiers">
        <input type="text" className="modify-inputs__input" />
        <button className="modify-inputs__button">Darken</button>
      </div>
      <div className="modify-inputs__modifiers">
        <input type="text" className="modify-inputs__input" />
        <button className="modify-inputs__button">Lighten</button>
      </div>
    </div>
  );
};

export default ModifyInputs;
