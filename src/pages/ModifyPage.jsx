import React, { PropTypes } from 'react';
import { ModifyPicker } from 'containers';
import { Panel, ColorItem } from 'components';
import { connect } from 'react-redux';
import * as colorActions from '../actions/colorActions';

const ModifyPage = ({ deleteColor, chosenColorsGroup }) => {
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
    <div className="modify-page">
      <div className="container">
        <Panel isChosenPanel title={'Select up to 10 colors'}>
          {chosenColors}
        </Panel>
        <ModifyPicker />
      </div>
    </div>
  );
};

ModifyPage.propTypes = {
  chosenColorsGroup: PropTypes.arrayOf(React.PropTypes.string).isRequired,
  deleteColor: PropTypes.func.isRequired,
};

export default connect(state => ({
  chosenColorsGroup: state.colorReducer.chosenColorsGroup,
}), colorActions)(ModifyPage);
