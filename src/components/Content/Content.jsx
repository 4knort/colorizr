import React from 'react';
import { connect } from 'react-redux';

const Content = ( { children, chosenColor } ) => {

  return (
    <div className="content" style={{ backgroundColor: chosenColor }}>
      {children}
    </div>
  );
};


export default connect(state => ({
  chosenColor: state.colorReducer.chosenColor,
}), null)(Content);
