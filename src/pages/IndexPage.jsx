import React from 'react';
import { ColorPicker, Panel, ColorItem } from 'components';
import { connect } from 'react-redux';

const IndexPage = ( { luminosityGroup } ) => {
  const luminosityColors = luminosityGroup.map((color, index) => (
    <ColorItem key={`luminosity-${index}`} color={color} />)
  );

  return (
    <div className="index-page">
      <ColorPicker />
      <Panel title={'hello'}>
        {luminosityColors}
      </Panel>
    </div>
  );
};

export default connect(state => ({
  luminosityGroup: state.colorReducer.luminosityGroup,
}), null)(IndexPage);
