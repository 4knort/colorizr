import React from 'react';
import { connect } from 'react-redux';

const Container = ( { children, chosenColor } ) => (
  <div className="container" style={{background: chosenColor.hex}}>
    {children}
  </div>
);

export default connect( state => ({
  chosenColor: state.colorReducer.chosenColor,
}), null)(Container);
