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
      props.deleteColor(color);
    }
  };

  const onClickDeleteColor = (color) => {
    if(color !== '#f5f5f5') {
      props.deleteColor(color);
    }
  };

  const selectAllColors = (colors) => {
    props.selectAll(colors);
  };

  const chosenColors = props.chosenColorsGroup.map((color, index) => (
    <ColorItem 
      key={`chosen-${index}`} 
      choose color={color} 
      onClickAddColor={() => { onClickDeleteColor(color) }} 
    />
  ));
  const luminosityColors = props.luminosityGroup.map((item, index) => (
    <ColorItem 
      key={`luminosity-${index}`}
      isClicked={item.isClicked}
      color={item.color}
      onClickAddColor={(isAdded) => { onClickAddColor(isAdded, item.color) }} 
    />
  ));
  const mixedColors = props.mixedGroup.map((item, index) => (
    <ColorItem 
      key={`mixed-${index}`}
      isClicked={item.isClicked}
      color={item.color}
      onClickAddColor={(isAdded) => { onClickAddColor(isAdded, item.color) }} 
    />
  ));

  return (
    <div className="index-page">
      <LuminosityGroup />
      <Panel choose title={'Select up to 10 colors'}>
        {chosenColors}
      </Panel>
      <Panel onClick={selectAllColors} colors={props.luminosityGroup} title={'Darker and Lighter'}>
        {luminosityColors}
      </Panel>
      <Panel onClick={selectAllColors} colors={props.mixedGroup} title={'Mixed with'} isColorPicker>
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
