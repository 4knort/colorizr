import React, { PropTypes } from 'react';
import { Panel, ColorItem, Colors } from 'components';
import { connect } from 'react-redux';
import * as colorActions from '../actions/colorActions';

import './css/pages.scss';

const ExplorePage = ({ deleteColor, colors }) => {
  const emptyColor = '#f5f5f5';
  
  const onClickDeleteColor = (color) => {
    if (color !== emptyColor) {
      deleteColor(color);
    }
  };

  const chosenColors = colors.chosenColorsGroup.map((color, index) => (
    <ColorItem
      key={`chosen-${index}`}
      choose 
      color={color}
      isChosenPanel
      onClickDeleteColor={onClickDeleteColor}
    />
  ));
  return (
    <div className="explore-page">
      <div className="container">
        <Panel isChosenPanel colorsBlockClass={'panel__colors panel__colors--choose'} title={'Select up to 10 colors'}>
          {chosenColors}
        </Panel>
        <div className="colors-wrap">
          <Colors colors={colors.flatColors} title={'Flat'} />
          <Colors colors={colors.materialColors} title={'Material'} />
        </div>
      </div>
    </div>
  );
};

ExplorePage.propTypes = {
  colors: PropTypes.objectOf(React.PropTypes.array).isRequired,
};

export default connect(state => ({
  colors: state.colorReducer.colors,
}), colorActions)(ExplorePage);
