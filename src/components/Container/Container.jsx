import React from 'react';
import { connect } from 'react-redux';

const Container = ( { children, chosenColor } ) => {

  return (
    <div className="container" style={{ backgroundColor: chosenColor }}>
      {children}
    </div>
  );
};


export default connect(state => ({
  chosenColor: state.colorReducer.chosenColor,
}), null)(Container);
