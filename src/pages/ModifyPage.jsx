import React, { PropTypes } from 'react';
import { ModifyPicker } from 'containers';
import { Panel, ColorItem, ModifyInputs, ModifiedColor } from 'components';
import { connect } from 'react-redux';
import * as colorActions from '../actions/colorActions';

import './css/pages.scss';

const ModifyPage = (props) => {
  const emptyColor = '#f5f5f5';
  
  const onClickAddColor = (isAdded, color) => {
    if (!isAdded) {
      props.addColor(color);
      props.modifyColorAdd();
    } else {
      props.deleteColor(color);
    }
  };

  const onClickDeleteColor = (color) => {
    if (color !== emptyColor) {
      props.deleteColor(color);
    }
  };

  const onChangeColor = (modifier, percent) => {
    props.changeColor(modifier, percent);
  };

  const getRandomModify = () => {
    props.getRandomModifyColor();
  };

  const chosenColors = props.colors.chosenColorsGroup.map((color, index) => (
    <ColorItem
      key={`chosen-${index}`}
      choose color={color}
      isChosenPanel
      onClickDeleteColor={onClickDeleteColor}
    />
  ));

  return (
    <div className="modify-page">
      <div className="container clearfix">
        <Panel isChosenPanel colorsBlockClass={'panel__colors panel__colors--choose'} title={'Select up to 10 colors'}>
          {chosenColors}
        </Panel>
        <ModifyPicker />
        <div className="modifiers-wrap">
          <ModifiedColor
            isAdded={props.modifyColorIsAdded}
            color={props.modifyColor}
            onClickAddColor={onClickAddColor}
            getRandomModifyColor={getRandomModify}
          />
          <ModifyInputs
            changeColor={onChangeColor}
          />
        </div>
      </div>
    </div>
  );
};

ModifyPage.propTypes = {
  colors: PropTypes.objectOf(React.PropTypes.array).isRequired,
};

export default connect(state => ({
  colors: state.colorReducer.colors,
  modifyColor: state.colorReducer.modifyColor,
  modifyColorIsAdded: state.colorReducer.modifyColorIsAdded,
}), colorActions)(ModifyPage);
