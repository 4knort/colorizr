import React from 'react';
import { Panel, ColorItem } from 'components';
import { connect } from 'react-redux';
import * as colorActions from '../actions/colorActions';

const ExplorePage = (props) => {
  const onClickDeleteColor = (color) => {
    if (color !== '#f5f5f5') {
      props.deleteColor(color);
    }
  };

  const chosenColors = props.chosenColorsGroup.map((color, index) => (
    <ColorItem 
      key={`chosen-${index}`} 
      choose color={color} 
      onClickAddColor={() => { onClickDeleteColor(color) }} 
    />
  ));

  return (
    <div className="explore-page">
      <Panel choose title={'Select up to 10 colors'}>
        {chosenColors}
      </Panel>
    </div>
  );
};

export default connect(state => ({
  chosenColorsGroup: state.colorReducer.chosenColorsGroup,
}), colorActions)(ExplorePage);
