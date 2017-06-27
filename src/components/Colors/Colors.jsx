import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ExploreColor from '../ExploreColor/ExploreColor';
import * as colorActions from '../../actions/colorActions';

import './colors.scss';

const Colors = ({ colors, title, addColor, deleteColor }) => {
  const onClickAddColor = (isAdded, color) => {
    if (!isAdded) {
      addColor(color);
    } else {
      deleteColor(color);
    }
  };

  const colorItems = colors.map((item, index) => (
    <ExploreColor
      onClickAddColor={onClickAddColor}
      color={item.color}
      key={`exploreColor ${index}`}
      isClicked={item.isClicked}
    />
  ));

  return (
    <div className="colors">
      <h2 className="colors__title">{title}</h2>
      <div className="colors__items">
        {colorItems}
      </div>
    </div>
  );
};

Colors.propTypes = {
  colors: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  addColor: PropTypes.func.isRequired,
  deleteColor: PropTypes.func.isRequired,
};

export default connect(null, colorActions)(Colors);
