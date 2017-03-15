import React, { PropTypes } from 'react';
import { ModifyPicker } from 'containers';
import { Panel, ColorItem, ModifyInputs, ModifiedColor } from 'components';
import { connect } from 'react-redux';
import * as colorActions from '../actions/colorActions';

import './css/modified-page.scss';

const ModifyPage = (props) => {
  const onClickAddColor = (isAdded, color) => {
    if (!isAdded) {
      props.addColor(color);
      props.modifyColorAdd();
    } else {
      props.deleteColor(color);
    }
  };

  const onClickDeleteColor = (color) => {
    if (color !== '#f5f5f5') {
      props.deleteColor(color);
    }
  };

  const onChangeColor = (modifier, percent) => {
    props.changeColor(modifier, percent);
  };

  const getRandomModify = () => {
    props.getRandomModifyColor();
  };

  const chosenColors = props.chosenColorsGroup.map((color, index) => (
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
        <div className="modifiers-wrap">
          <ModifyInputs
            changeColor={(modifier, percent) => { onChangeColor(modifier, percent); }}
          />
          <ModifiedColor
            isAdded={props.modifyColorIsAdded}
            color={props.modifyColor}
            onClickAddColor={(isAdded, color) => { onClickAddColor(isAdded, color); }}
            getRandomModifyColor={() => { getRandomModify(); }}
          />
        </div>
      </div>
    </div>
  );
};

ModifyPage.propTypes = {
  chosenColorsGroup: PropTypes.arrayOf(React.PropTypes.string).isRequired,
  modifyColor: PropTypes.string.isRequired,
  modifyColorIsAdded: PropTypes.bool.isRequired,
};

export default connect(state => ({
  chosenColorsGroup: state.colorReducer.chosenColorsGroup,
  modifyColor: state.colorReducer.modifyColor,
  modifyColorIsAdded: state.colorReducer.modifyColorIsAdded,
}), colorActions)(ModifyPage);
