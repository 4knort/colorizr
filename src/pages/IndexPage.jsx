import React from 'react';
import { Panel, ColorItem } from 'components';
import { LuminosityGroup, MixedGroup } from 'containers';
import { connect } from 'react-redux';
import * as colorActions from '../actions/colorActions';

const IndexPage = ( { luminosityGroup, mixedGroup, chosenColorsGroup, addColor } ) => {
  const handleClick = (color) => {
    addColor(color);
    // console.log('wtf')
  }
  const luminosityColors = luminosityGroup.map((color, index) => (
    <ColorItem key={`luminosity-${index}`} color={color} onClickColor={() => { handleClick(color) }} />)
  );
  const mixedColors = mixedGroup.map((color, index) => (
    <ColorItem key={`luminosity-${index}`} color={color} onClickColor={() => { handleClick(color) }} />)
  );
  const chosenColors = chosenColorsGroup.map((color, index) => (
    <ColorItem key={`luminosity-${index}`} color={color} />)
  );

  return (
    <div className="index-page">
      <LuminosityGroup />
      <Panel title={'Select up to 10 colors'}>
        {chosenColors}
      </Panel>
      <Panel title={'Darker and Lighter'}>
        {luminosityColors}
      </Panel>
      <Panel title={'Mixed with'} isColorPicker>
        <MixedGroup />
        {mixedColors}
      </Panel>
    </div>
  );
};

export default connect(state => ({
  luminosityGroup: state.colorReducer.luminosityGroup,
  mixedGroup: state.colorReducer.mixedGroup,
  chosenColorsGroup: state.colorReducer.chosenColorsGroup,
}), colorActions)(IndexPage);
