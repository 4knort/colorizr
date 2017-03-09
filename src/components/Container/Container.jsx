import React from 'react';
import { connect } from 'react-redux';

const Container = ( { children, chosenColor } ) => {
  const color = chosenColor ? chosenColor.hex : '#000000';

  return (
    <div className="container" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};


export default connect(state => ({
  chosenColor: state.colorReducer.chosenColor,
}), null)(Container);
