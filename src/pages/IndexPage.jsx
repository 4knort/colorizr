import React, { PropTypes } from 'react';
import { Panel, ColorItem } from 'components';
import { LuminosityGroup, MixedGroup } from 'containers';
import { connect } from 'react-redux';
import * as colorActions from '../actions/colorActions';

import './css/pages.scss';

const IndexPage = (props) => {
  const emptyColor = '#f5f5f5';

  const onClickAddColor = (isAdded, color) => {
    if (!isAdded) {
      props.addColor(color);
    } else {
      props.deleteColor(color);
    }
  };

  const onClickDeleteColor = (color) => {
    if (color !== emptyColor) {
      props.deleteColor(color);
    }
  };

  const selectAllColors = (colors) => {
    props.selectAll(colors);
  };

  const chosenColors = props.colors.chosenColorsGroup.map((color, index) => (
    <ColorItem
      key={`chosen-${index}`}
      isChosenPanel
      color={color}
      onClickDeleteColor={onClickDeleteColor}
    />
  ));
  
  const luminosityColors = props.colors.luminosityGroup.map((item, index) => (
    <ColorItem
      key={`luminosity-${index}`}
      isClicked={item.isClicked}
      color={item.color}
      onClickAddColor={onClickAddColor}
    />
  ));
  const mixedColors = props.colors.mixedGroup.map((item, index) => (
    <ColorItem
      key={`mixed-${index}`}
      isClicked={item.isClicked}
      color={item.color}
      onClickAddColor={onClickAddColor}
    />
  ));
  return (
    <div className="index-page" style={{ backgroundColor: props.chosenColor }}>
      <div className="container">
        <LuminosityGroup />
        <Panel isChosenPanel colorsBlockClass={'panel__colors panel__colors--choose'} title={'Select up to 10 colors'}>
          {chosenColors}
        </Panel>
        <Panel onClick={selectAllColors} colors={props.colors.luminosityGroup} title={'Darker and Lighter'}>
          {luminosityColors}
        </Panel>
        <Panel onClick={selectAllColors} colors={props.colors.mixedGroup} title={'Mixed with'} isColorPicker>
          <MixedGroup />
          {mixedColors}
        </Panel>
      </div>
    </div>
  );
};

IndexPage.propTypes = {
  colors: PropTypes.objectOf(React.PropTypes.array).isRequired,
};

export default connect(state => ({
  colors: state.colorReducer.colors,
  chosenColor: state.colorReducer.chosenColor,
  user: state.userReducer.user,
}), colorActions)(IndexPage);
