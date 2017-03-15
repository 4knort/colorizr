import React, { PropTypes } from 'react';
import { Panel, ColorItem, Colors } from 'components';
import { connect } from 'react-redux';
import * as colorActions from '../actions/colorActions';

import './css/pages.scss';

const ExplorePage = ({ deleteColor, chosenColorsGroup, flatColors, materialColors }) => {
  const onClickDeleteColor = (color) => {
    if (color !== '#f5f5f5') {
      deleteColor(color);
    }
  };

  const chosenColors = chosenColorsGroup.map((color, index) => (
    <ColorItem
      key={`chosen-${index}`}
      choose color={color}
      onClickAddColor={() => { onClickDeleteColor(color); }}
    />
  ));
  return (
    <div className="explore-page">
      <div className="container">
        <Panel isChosenPanel title={'Select up to 10 colors'}>
          {chosenColors}
        </Panel>
        <div className="colors-wrap">
          <Colors colors={flatColors} title={'Flat'} />
          <Colors colors={materialColors} title={'Material'} />
        </div>
      </div>
    </div>
  );
};

ExplorePage.propTypes = {
  chosenColorsGroup: PropTypes.arrayOf(React.PropTypes.string).isRequired,
  deleteColor: PropTypes.func.isRequired,
  flatColors: PropTypes.arrayOf(PropTypes.object),
  materialColors: PropTypes.arrayOf(PropTypes.object),
};

export default connect(state => ({
  chosenColorsGroup: state.colorReducer.chosenColorsGroup,
  flatColors: state.colorReducer.flatColors,
  materialColors: state.colorReducer.materialColors,
}), colorActions)(ExplorePage);
