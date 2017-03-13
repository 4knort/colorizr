import React from 'react';
import { Panel, ColorItem } from 'components';
import { LuminosityGroup, MixedGroup } from 'containers';
import { connect } from 'react-redux';
import * as colorActions from '../actions/colorActions';

const IndexPage = ( props ) => {
  const onClickAddColor = (isAdded, color) => {
    if (!isAdded) {
      props.addColor(color);
    } else {
      console.log('delete');
    }
  };
  const onClickDeleteColor = (color) => {
    if(color !== '#f5f5f5') {
      console.log('delete');
    }
  }
  const chosenColors = props.chosenColorsGroup.map((color, index) => (
    <ColorItem key={`chosen-${index}`} choose color={color} onClickAddColor={() => { onClickDeleteColor(color) }} />)
  );
  const luminosityColors = props.luminosityGroup.map((color, index) => (
    <ColorItem key={`luminosity-${index}`} color={color} onClickAddColor={(isAdded) => { onClickAddColor(isAdded, color) }} />)
  );
  const mixedColors = props.mixedGroup.map((color, index) => (
    <ColorItem key={`mixed-${index}`} color={color} onClickAddColor={(isAdded) => { onClickAddColor(isAdded, color) }} />)
  );

  return (
    <div className="index-page">
      <LuminosityGroup />
      <Panel choose title={'Select up to 10 colors'}>
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
